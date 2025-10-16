// src/components/sections/home/ContactSection.tsx
'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Button from '../../ui/Button';
import EditText from '../../ui/EditText';
import TextArea from '../../ui/TextArea';

/**
 * Struktura danych formularza kontaktowego.
 * Uwaga: to tylko stan UI – faktyczne wysłanie (API) jest TODO.
 */
interface FormData {
  email: string;
  fullName: string;
  subject: string;
  message: string;
  consent: boolean;
}

/** Stan początkowy – czyste pola. */
const initialFormState: FormData = {
  email: '',
  fullName: '',
  subject: '',
  message: '',
  consent: false,
};

/** Prosta walidacja e-mail (na potrzeby UI; backend musi zweryfikować ponownie). */
const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  // Błąd logiczny (dla a11y) – po dotknięciu i z treścią
  const emailInvalid =
    emailTouched && !isValidEmail(formData.email) && formData.email.length > 0;

  // Błąd wizualny – jak wyżej, ALE tylko poza focusem
  const emailInvalidVisual = !emailFocused && emailInvalid;

  /** Uniwersalny handler – wspiera inputy i textarea, także checkbox. */
  const handleChange =
    (field: keyof FormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        event.target.type === 'checkbox'
          ? (event.target as HTMLInputElement).checked
          : event.target.value;

      setFormData((prev) => ({ ...prev, [field]: value as any }));
    };

  const handleEmailFocus = () => setEmailFocused(true);
  const handleEmailBlur = () => {
    setEmailFocused(false);
    setEmailTouched(true);
  };

  /** Submit bez realnego wysłania – zostawiamy TODO jak w oryginale. */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailTouched(true);
    setEmailFocused(false);
    if (!isValidEmail(formData.email)) return;
    // TODO: submit
  };

  /**
   * Baza klas dla inputów:
   * - spójne metryki i kolory z tokenów (globals.css)
   * - stany: focus/disabled
   */
  const baseInput =
    'h-[50px] rounded-input border bg-[var(--color-white)] px-[12px] ' +
    'font-sans text-[16px] leading-[150%] tracking-[-0.02em] text-[var(--color-text)] ' +
    'border-[var(--color-stroke)] placeholder:text-[var(--color-text)]/55 ' +
    'focus:text-[var(--color-dark)] focus:border-[var(--color-primary)] ' +
    'focus:ring-2 focus:ring-[var(--color-primary)]/30 ' +
    'disabled:bg-[var(--color-surface-subtle)] disabled:text-[var(--color-text)]/35 ' +
    'disabled:placeholder:text-[var(--color-text)]/30 disabled:border-[var(--color-stroke-light)] ' +
    'transition-colors';

  // wariant dla e-maila (błąd wizualny tylko poza focusem)
  const emailClasses = [
    baseInput,
    emailInvalidVisual &&
      'border-[var(--color-error)] bg-[var(--state-error-10)] ' +
      'text-[var(--color-on-error-container)] placeholder:text-[var(--color-on-error-container)]/70 ' +
      'focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/30', // w trakcie fokusowania wracamy do stanu „focused”
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      id="kontakt"
      className="w-full bg-[var(--color-surface-subtle)] py-[80px] scroll-mt-[82px]"
    >
      {/* Dodatkowa kotwica dla linków typu #poznajmy – zatrzymanie pod headerem */}
      <span id="poznajmy" className="block h-0 scroll-mt-[82px]" aria-hidden="true" />

      <div className="mx-container w-full">
        {/* Tytuł sekcji */}
        <div className="pb-[20px]">
          <h2 className="use-clash text-[42px] leading-[120%] text-[var(--color-dark)]">
            POROZMAWIAJMY
          </h2>
        </div>

        {/* Formularz – wizualnie panel z lekkim cieniem */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-[42px] rounded-panel border border-[var(--color-white)] bg-[#F6FBFF] px-[32px] py-[46px] shadow-[0_24px_48px_rgba(17,_39,_61,_0.08)]"
        >
          <div>
            <h3 className="use-clash text-[18px] leading-[160%] text-[var(--color-dark)]">
              Zostaw nam wiadomość
            </h3>
          </div>

          {/* Wiersz pól: e-mail / imię i nazwisko / temat */}
          <div className="flex flex-wrap gap-[20px]">
            {/* E-MAIL */}
            <label className="flex w-full flex-col gap-[10px] lg:w-[319px]">
              <span className="use-clash text-[14px] leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
                Adres e-mail
              </span>
              <EditText
                name="email"
                type="email"
                placeholder="Twój adres e-mail"
                value={formData.email}
                onChange={handleChange('email')}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                className={emailClasses}
                aria-invalid={emailInvalid || undefined}
                aria-describedby={emailInvalid ? 'email-error' : undefined}
                required
              />
              {emailInvalidVisual && (
                <p
                  id="email-error"
                  className="mt-[6px] text-[13px] leading-[18px] text-[var(--color-on-error-container)]"
                >
                  Podaj poprawny adres e-mail (np. imię@domena.pl).
                </p>
              )}
            </label>

            {/* IMIĘ I NAZWISKO */}
            <label className="flex w-full flex-col gap-[10px] lg:w-[330px]">
              <span className="use-clash text-[14px] leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
                Imię i nazwisko
              </span>
              <EditText
                name="fullName"
                placeholder="Twoje imię i nazwisko"
                value={formData.fullName}
                onChange={handleChange('fullName')}
                className={baseInput}
              />
            </label>

            {/* TEMAT */}
            <label className="flex w-full flex-col gap-[10px] lg:w-[527px]">
              <span className="use-clash text-[14px] leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
                Temat rozmowy
              </span>
              <EditText
                name="subject"
                placeholder="O czym chcesz porozmawiać?"
                value={formData.subject}
                onChange={handleChange('subject')}
                className={baseInput}
              />
            </label>
          </div>

          {/* WIADOMOŚĆ */}
          <label className="flex flex-col gap-[10px]">
            <span className="use-clash text-[14px] leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
              Wiadomość
            </span>
            <TextArea
              name="message"
              rows={6}
              placeholder="Napisz swoją wiadomość…"
              value={formData.message}
              onChange={handleChange('message')}
              className={baseInput
                .replace('h-[50px]', 'h-[152px]')
                .replace('px-[12px]', 'p-[12px]')}
            />
          </label>

          {/* ZGODA RODO – checkbox jako kropka w kółku + długi tekst z odstępem */}
          <label className="body-xs font-sans flex items-start gap-[12px] text-left tracking-[-0.02em] text-text-secondary">
            <input
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange('consent')}
              className="peer sr-only"
            />
            <span
              className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-stroke)] bg-[var(--color-white)] transition-colors duration-200 peer-checked:border-[var(--color-primary)]"
              aria-hidden="true"
            >
              <span
                className={`block rounded-full transition-all duration-200 ${
                  formData.consent
                    ? 'h-[10px] w-[10px] bg-[var(--color-primary)]'
                    : 'h-[8px] w-[8px] border-2 border-[var(--color-stroke-light)]'
                }`}
              />
            </span>

            <span className="body-xs font-sans max-w-[90%] tracking-[-0.02em] text-text-secondary"> 
              Wyrażam zgodę na przetwarzanie moich danych osobowych w postaci imienia, nazwiska, adresu e-mail i nr tel. (jeżeli został podany), podanych w powyższym formularzu, zgodnie z przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), Dz. Urz. UE z 4.5.2016 r. L 119, str. 1), w celu udzielenia odpowiedzi na złożone zapytanie. Żądanie usunięcia danych proszę kierować na adres <b>biuro@realestate.com</b>. 
              {/* odstęp między akapitami */} 
              <span className="block h-[12px]" aria-hidden="true" /> 
              Informujemy, że: 1. Administratorem Pani/Pana danych osobowych jest RealEstate sp. z o.o. z siedzibą w Poznaniu przy ul. Długiej 5 lok. 25, 01-200 Poznań (KRS nr 0001000000) (dalej „Administrator”) e-mail: <b>biuro@realestate.com</b> 
              </span>
          </label>

          {/* CTA wysłania – metryki zgodne z tokenami przycisków */}
          <Button
            type="submit"
            variant="primary"
            className="h-[56px] w-full max-w-[320px] justify-center gap-[10px] rounded-pill px-[32px] py-[18px]"
          >
            WYŚLIJ WIADOMOŚĆ
          </Button>
        </form>
      </div>
    </section>
  );
}
