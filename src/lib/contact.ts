import { services } from "@/lib/site";

export const OTHER_SERVICE = "Something else / not sure";

/** Options offered in the contact form's "service needed" select. */
export const serviceOptions: string[] = [
  ...services.map((service) => service.title),
  "Gutter cleaning",
  "Siding repair",
  "Attic insulation",
  OTHER_SERVICE,
];

export type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export const emptyContactForm: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Shared by the client form and the API route so the two can never disagree
 * about what counts as a valid enquiry.
 */
export function validateContact(input: unknown): {
  values: ContactFormValues;
  errors: ContactFieldErrors;
  valid: boolean;
} {
  const raw = (typeof input === "object" && input !== null ? input : {}) as Record<
    string,
    unknown
  >;

  const values: ContactFormValues = {
    name: asString(raw.name),
    phone: asString(raw.phone),
    email: asString(raw.email),
    city: asString(raw.city),
    service: asString(raw.service),
    message: asString(raw.message),
  };

  const errors: ContactFieldErrors = {};

  if (values.name.length < 2) {
    errors.name = "Please enter your name.";
  } else if (values.name.length > 120) {
    errors.name = "That name is too long.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone) {
    errors.phone = "Please enter a phone number we can reach you on.";
  } else if (digits.length < 10 || digits.length > 15) {
    errors.phone = "Please enter a valid phone number, including area code.";
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email) || values.email.length > 254) {
    errors.email = "That email address does not look right.";
  }

  if (values.city.length < 2) {
    errors.city = "Please tell us the property address or city.";
  } else if (values.city.length > 200) {
    errors.city = "That address is too long.";
  }

  if (!values.service) {
    errors.service = "Please choose the service you need.";
  } else if (!serviceOptions.includes(values.service)) {
    errors.service = "Please choose one of the listed services.";
  }

  if (values.message.length < 10) {
    errors.message = "A sentence or two about the roof helps us prepare.";
  } else if (values.message.length > 4000) {
    errors.message = "Please keep the message under 4000 characters.";
  }

  return { values, errors, valid: Object.keys(errors).length === 0 };
}
