"use client";

import { useId, useRef, useState } from "react";

import {
  emptyContactForm,
  serviceOptions,
  validateContact,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/lib/contact";
import { ArrowRight } from "@/components/ui";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full border border-bone-300 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-500/70 focus:border-brand-600";
const errorFieldClass = "border-brand-700 bg-brand-600/5";
const labelClass =
  "block font-display text-base font-semibold uppercase tracking-[0.08em] text-ink-900";

export default function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const update =
    (field: keyof ContactFormValues) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => {
        if (!current[field]) return current;
        const next = { ...current };
        delete next[field];
        return next;
      });
    };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateContact(values);
    if (!validation.valid) {
      setErrors(validation.errors);
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    setStatusMessage("");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.values),
      });

      const data: { ok?: boolean; message?: string; errors?: ContactFieldErrors } =
        await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setStatusMessage(
          data.message ??
            `We could not send that. Please call ${site.phoneDisplay} instead.`,
        );
        requestAnimationFrame(() => errorSummaryRef.current?.focus());
        return;
      }

      setStatus("success");
      setStatusMessage(data.message ?? "Thanks — we will be in touch shortly.");
      setValues(emptyContactForm);
    } catch {
      setStatus("error");
      setStatusMessage(
        `Something went wrong sending that. Please call ${site.phoneDisplay} or email ${site.email}.`,
      );
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border-t-2 border-brand-600 bg-bone-50 p-8 sm:p-10"
      >
        <h2 className="font-display text-3xl font-bold uppercase leading-tight">
          Request received
        </h2>
        <p className="mt-4 text-lg leading-relaxed">{statusMessage}</p>
        <p className="mt-4 leading-relaxed">
          If it is urgent — an active leak, storm damage — call{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-brand-800 underline underline-offset-4"
          >
            {site.phoneDisplay}
          </a>{" "}
          rather than waiting on a reply. Our emergency line is answered 24/7.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setStatusMessage("");
          }}
          className="mt-8 inline-flex items-center gap-2 border-2 border-ink-900 px-6 py-3 font-display text-base font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
        >
          Send another request
        </button>
      </div>
    );
  }

  const errorEntries = Object.entries(errors) as [
    keyof ContactFormValues,
    string,
  ][];

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border-t-2 border-ink-900 bg-bone-50 p-6 sm:p-9"
    >
      <h2 className="font-display text-3xl font-bold uppercase leading-tight">
        Request a free quote
      </h2>
      <p className="mt-3 leading-relaxed">
        Tell us about the property and what the roof is doing. We reply during
        office hours, {site.hours.display}.
      </p>

      {status === "error" && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 border-l-4 border-brand-700 bg-brand-600/10 p-4"
        >
          <p className="font-semibold text-brand-800">{statusMessage}</p>
          {errorEntries.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-800">
              {errorEntries.map(([field, message]) => (
                <li key={field}>
                  <a
                    href={`#${formId}-${field}`}
                    className="underline underline-offset-2"
                  >
                    {message}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${formId}-name`}>
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={update("name")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={`mt-2 ${fieldClass} ${errors.name ? errorFieldClass : ""}`}
            placeholder="Jane Alvarez"
          />
          {errors.name && (
            <p id={`${formId}-name-error`} className="mt-1.5 text-sm text-brand-800">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-phone`}>
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={update("phone")}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            className={`mt-2 ${fieldClass} ${errors.phone ? errorFieldClass : ""}`}
            placeholder="(415) 555-0134"
          />
          {errors.phone && (
            <p
              id={`${formId}-phone-error`}
              className="mt-1.5 text-sm text-brand-800"
            >
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-email`}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update("email")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={`mt-2 ${fieldClass} ${errors.email ? errorFieldClass : ""}`}
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p
              id={`${formId}-email-error`}
              className="mt-1.5 text-sm text-brand-800"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${formId}-city`}>
            Property address or city <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-city`}
            name="city"
            type="text"
            autoComplete="street-address"
            required
            value={values.city}
            onChange={update("city")}
            aria-invalid={errors.city ? true : undefined}
            aria-describedby={errors.city ? `${formId}-city-error` : undefined}
            className={`mt-2 ${fieldClass} ${errors.city ? errorFieldClass : ""}`}
            placeholder="1160 Battery St E, San Francisco"
          />
          {errors.city && (
            <p id={`${formId}-city-error`} className="mt-1.5 text-sm text-brand-800">
              {errors.city}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${formId}-service`}>
            Service needed <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${formId}-service`}
            name="service"
            required
            value={values.service}
            onChange={update("service")}
            aria-invalid={errors.service ? true : undefined}
            aria-describedby={
              errors.service ? `${formId}-service-error` : undefined
            }
            className={`mt-2 ${fieldClass} ${errors.service ? errorFieldClass : ""}`}
          >
            <option value="">Choose a service…</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p
              id={`${formId}-service-error`}
              className="mt-1.5 text-sm text-brand-800"
            >
              {errors.service}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${formId}-message`}>
            What is the roof doing? <span aria-hidden="true">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={update("message")}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={
              errors.message ? `${formId}-message-error` : `${formId}-message-hint`
            }
            className={`mt-2 ${fieldClass} ${errors.message ? errorFieldClass : ""}`}
            placeholder="Two-storey house in the Sunset, roof is about 22 years old. Brown stain spreading on the upstairs ceiling after last week's rain."
          />
          {errors.message ? (
            <p
              id={`${formId}-message-error`}
              className="mt-1.5 text-sm text-brand-800"
            >
              {errors.message}
            </p>
          ) : (
            <p id={`${formId}-message-hint`} className="mt-1.5 text-sm">
              Age of the roof, what you are seeing, and whether it is urgent.
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 border-2 border-brand-600 bg-brand-600 px-7 py-3 font-display text-lg font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-brand-700 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send my request"}
          {status !== "submitting" && <ArrowRight />}
        </button>
        <p className="text-sm">
          Prefer to talk?{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-brand-800 underline underline-offset-4"
          >
            Call {site.phoneDisplay}
          </a>
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {status === "submitting" ? "Sending your request" : statusMessage}
      </p>
    </form>
  );
}
