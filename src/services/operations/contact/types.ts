// SEND MESSAGE
export interface SendMessagePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}
