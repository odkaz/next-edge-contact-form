export type ContactForm = {
  inquiryType: string;
  desiredPosition: string;

  name: string;
  furigana?: string;

  email: string;
  phone?: string;

  affiliation?: string;
  currentStatus?: string;

  message: string;

  privacyAccepted: boolean;
};