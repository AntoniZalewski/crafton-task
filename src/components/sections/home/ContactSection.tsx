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

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);

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

  const toggleConsent = () => {
    setFormData((prev) => ({ ...prev, consent: !prev.consent }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submission placeholder
  };

  return (
    <section id="kontakt" className="w-full bg-[var(--color-surface-subtle)] px-[clamp(24px,6vw,80px)] py-[80px]">
      <span id="poznajmy" className="block h-0" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="pb-[20px]">
          <h2 className="font-display text-[42px] font-medium uppercase leading-[120%] text-[var(--color-dark)]">
            POROZMAWIAJMY
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[42px] rounded-panel border border-[var(--color-white)] bg-[#F6FBFF] px-[32px] py-[46px] shadow-[0_24px_48px_rgba(17,_39,_61,_0.08)]"
        >
          <div>
            <h3 className="font-display text-[18px] font-medium uppercase leading-[160%] text-[var(--color-dark)]">
              Zostaw nam wiadomosc
            </h3>
          </div>

          <div className="flex flex-wrap gap-[20px]">
            <label className="flex w-full flex-col gap-[10px] lg:w-[319px]">
              <span className="font-display text-[14px] font-medium uppercase leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
                Adres e-mail
              </span>
              <EditText
                type="email"
                placeholder="Twoj adres e-mail"
                value={formData.email}
                onChange={handleChange('email')}
                className="h-[50px] rounded-input border border-[var(--color-stroke)] bg-[var(--color-white)] px-[12px] font-sans text-[16px] leading-[150%] tracking-[-0.02em] text-[var(--color-dark)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30"
              />
            </label>

            <label className="flex w-full flex-col gap-[10px] lg:w-[330px]">
              <span className="font-display text-[14px] font-medium uppercase leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
                Imie i nazwisko
              </span>
              <EditText
                placeholder="Twoje imie i nazwisko"
                value={formData.fullName}
                onChange={handleChange('fullName')}
                className="h-[50px] rounded-input border border-[var(--color-stroke)] bg-[var(--color-white)] px-[12px] font-sans text-[16px] leading-[150%] tracking-[-0.02em] text-[var(--color-dark)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30"
              />
            </label>

            <label className="flex w-full flex-col gap-[10px] lg:w-[527px]">
              <span className="font-display text-[14px] font-medium uppercase leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
                Temat rozmowy
              </span>
              <EditText
                placeholder="O czym chcesz porozmawiac?"
                value={formData.subject}
                onChange={handleChange('subject')}
                className="h-[50px] rounded-input border border-[var(--color-stroke)] bg-[var(--color-white)] px-[12px] font-sans text-[16px] leading-[150%] tracking-[-0.02em] text-[var(--color-dark)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30"
              />
            </label>
          </div>

          <label className="flex flex-col gap-[10px]">
            <span className="font-display text-[14px] font-medium uppercase leading-[20px] tracking-[-0.02em] text-[var(--color-text)]">
              Wiadomosc
            </span>
            <TextArea
              rows={6}
              placeholder="Napisz swoja wiadomosc..."
              value={formData.message}
              onChange={handleChange('message')}
              className="h-[152px] rounded-input border border-[var(--color-stroke)] bg-[var(--color-white)] p-[12px] font-sans text-[16px] leading-[150%] tracking-[-0.02em] text-[var(--color-dark)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30"
            />
          </label>

          <div className="flex flex-col gap-[20px]">
            <button
              type="button"
              onClick={toggleConsent}
              className="body-xs font-sans flex items-start gap-[12px] text-left tracking-[-0.02em] text-text-secondary"
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-[6px] border-2 ${
                  formData.consent
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)]'
                    : 'border-[var(--color-stroke)] bg-[var(--color-white)]'
                } transition-colors duration-200`}
              >
                {formData.consent ? (
                  <svg
                    className="h-3 w-3 text-[var(--color-white)]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4.707 9.293L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
                  </svg>
                ) : null}
              </span>
              <span className="body-xs font-sans max-w-[90%] tracking-[-0.02em] text-text-secondary">
                Wyrazam zgode na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zlozone zapytanie. Zzadanie usuniecia danych prosze kierowac na adres biuro@realestate.com. Administratorem danych jest RealEstate sp. z o.o. z siedziba w Poznaniu, ul. Dluga 5 lok. 25, 01-200 Poznan.
              </span>
            </button>
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={() => toggleConsent()}
              className="hidden"
              aria-hidden="true"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="h-[56px] w-full max-w-[320px] justify-center gap-[10px] rounded-pill px-[32px] py-[18px]"
          >
            WYSLIJ WIADOMOSC
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

