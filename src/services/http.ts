import axios from "axios";

/**
 * Shared HTTP client. The API base URL is supplied at build time through
 * NEXT_PUBLIC_API_URL; when it is missing, requests fail loudly instead of
 * silently posting to a random origin.
 */
export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "",
  timeout: 15_000,
  headers: { "Content-Type": "application/json" },
});
