import { toast } from "sonner";
import { http } from "@/src/services/http";
import { getErrorMessage } from "@/src/utils/getMessages";
import type { SendMessagePayload } from "./types";

/**
 * Submits the contact form. The endpoint is configurable so the same client
 * works against staging and production without code changes.
 */
export const sendMessage = async (payload: SendMessagePayload) => {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/contact";
  const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "";
  const isAbsoluteEndpoint = /^https?:\/\//i.test(endpoint);

  // Never attempt a request when there is no verified backend to receive it.
  if (!isAbsoluteEndpoint && !baseURL) {
    throw new Error("Contact endpoint is not configured");
  }

  try {
    const { data } = await http.post(endpoint, payload);

    toast.success(
      typeof data?.message === "string"
        ? data.message
        : "Message sent successfully.",
    );

    return data;
  } catch (error) {
    console.error("Send message error:", error);
    toast.error(getErrorMessage(error, "Could not send your message."));
    throw error;
  }
};
