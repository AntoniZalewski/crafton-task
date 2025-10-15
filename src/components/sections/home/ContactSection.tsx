'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Button from '../../ui/Button';
import EditText from '../../ui/EditText';
import TextArea from '../../ui/TextArea';

interface FormData {
  email: string;
  fullName: string;
  subject: string;
  message: string;
  consent: boolean;
}

const initialFormState: FormData = {
  email: '',
  fullName: '',
  subject: '',
  message: '',
  consent: false,
};

// Prosta walidacja e-maila (wystarczająca do UX; backend niech i tak waliduje ponownie)
const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [emailTouched, setEmailTouched] = useState(false);

  const emailInvalid = emailTouched && !isValidEmail(formData.email) && formData.email.length > 0;

  const handleChange =
    (field: keyof FormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        event.target.type === 'checkbox'
          ? (event.target as HTMLInputElement).checked
          : event.target.value;

      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // włącz walidację e-maila przy submit
    setEmailTouched(true);

    if (!isValidEmail(formData.email)) {
      // nie wysyłamy — pokaże się stan error na e-mailu
      return;
    }

    // TODO: wyślij formularz (fetch/axios)
    // console.log(formData);
  };

  // Wspólny „default/focus/disabled” wygląd
  const baseInput =
    'h-[50px] rounded-input border bg-[var(--color-white)] px-[12px] ' +
    'font-sans text-[16px] leading-[150%] tracking-[-0.02em] text-[var(--color-dark)] ' +
    'border-[var(--color-stroke)] placeholder:text-[var(--color-text)]/55 ' +
    'focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 ' +
    'disabled:bg-[var(--color-surface-subtle)] disabled:text-[var(--color-text)]/35 disabled:placeholder:text-[var(--color-text)]/30 disabled:border-[var(--color-stroke-light)] ' +
    'transition-colors';

  // Czerwony stan error tylko dla pola e-mail
  const emailClasses = [
    baseInput,
    emailInvalid &&
      'border-[#8E1C16] bg-[#FCEEEE] text-[#8E1C16] placeholder-[#8E1C16]/70 focus:border-[#8E1C16] focus:ring-[#8E1C16]/30',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      id="kontakt"
      className="w-full bg-[var(--color-surface-subtle)] px-[clamp(24px,6vw,80px)] py-[80px]"
    >
      <span id="poznajmy" className="block h-0" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="pb-[20px]">
          <h2 className="font-display text-[42px] font-medium uppercase leading-[120%] text-[var(--color-dark)]">
            POROZMAWIAJMY
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-[42px] rounded-panel border border-[var(--color-white)] bg-[#F6FBFF] px-[32px] py-[46px] shadow-[0_24px_48px_rgba(17,_39,_61,_0.08)]"
        >
          <div>
            <h3 className="font-display text-[18px] font-medium uppercase leading-[160%] text-[var(--color-dark)]">
              Zostaw nam wiadomość
            </h3>
          </div>

          <div className="flex flex-wrap gap-[20px]">
            {/* E-MAIL (ma stan error) */}
            <label className="flex w-full flex-col gap-[10px] lg:w-[319px]">
              <span className="font-display text-[14px] font-medium uppercase leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
                Adres e-mail
              </span>
              <EditText
                type="email"
                placeholder="Twój adres E-mail"
                value={formData.email}
                onChange={handleChange('email')}
                onBlur={handleEmailBlur}
                className={emailClasses}
                aria-invalid={emailInvalid || undefined}
                aria-describedby={emailInvalid ? 'email-error' : undefined}
                required
              />
              {emailInvalid && (
                <p
                  id="email-error"
                  className="mt-[6px] text-[13px] leading-[18px] text-[#8E1C16]"
                >
                  Podaj poprawny adres e-mail (np. imie@domena.pl).
                </p>
              )}
            </label>

            {/* IMIĘ I NAZWISKO */}
            <label className="flex w-full flex-col gap-[10px] lg:w-[330px]">
              <span className="font-display text-[14px] font-medium uppercase leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
                Imię i nazwisko
              </span>
              <EditText
                placeholder="Twoje imię i nazwisko"
                value={formData.fullName}
                onChange={handleChange('fullName')}
                className={baseInput}
              />
            </label>

            {/* TEMAT */}
            <label className="flex w-full flex-col gap-[10px] lg:w-[527px]">
              <span className="font-display text-[14px] font-medium uppercase leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
                Temat rozmowy
              </span>
              <EditText
                placeholder="O czym chcesz porozmawiać?"
                value={formData.subject}
                onChange={handleChange('subject')}
                className={baseInput}
              />
            </label>
          </div>

          {/* WIADOMOŚĆ */}
          <label className="flex flex-col gap-[10px]">
            <span className="font-display text-[14px] font-medium uppercase leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
              Wiadomość
            </span>
            <TextArea
              rows={6}
              placeholder="Napisz swoją wiadomość…"
              value={formData.message}
              onChange={handleChange('message')}
              className={
                baseInput.replace('h-[50px]', 'h-[152px]').replace('px-[12px]', 'p-[12px]')
              }
            />
          </label>

          {/* ZGODA RODO — okrągły znacznik jak w designie */}
          <label className="body-xs font-sans flex items-start gap-[12px] text-left tracking-[-0.02em] text-text-secondary">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange('consent')}
              className="peer sr-only"
            />
            <span
              className="
                relative inline-flex h-5 w-5 items-center justify-center rounded-full
                border border-[var(--color-stroke)]
                bg-[var(--color-white)]
                transition-colors duration-200
                peer-checked:border-[var(--color-primary)]
              "
              aria-hidden="true"
            >
              <span
                className={`
                  block rounded-full transition-all duration-200
                  ${formData.consent
                    ? 'h-[10px] w-[10px] bg-[var(--color-primary)]'
                    : 'h-[8px] w-[8px] border-2 border-[var(--color-stroke-light)]'}
                `}
              />
            </span>

            <span className="body-xs font-sans max-w-[90%] tracking-[-0.02em] text-text-secondary">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na
              złożone zapytanie. Żądanie usunięcia danych proszę kierować na adres
              biuro@realestate.com. Administratorem danych jest RealEstate sp. z o.o., ul. Długa 5 lok.
              25, 01-200 Poznań.
            </span>
          </label>

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
};

export default ContactSection;
