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
