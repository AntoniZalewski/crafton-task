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
    <section id="kontakt" className="w-full bg-secondary-background py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="font-[Clash Display] text-[44px] uppercase tracking-[0.32em] text-text-primary sm:text-[52px]">
              POROZMAWIAJMY
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-9 rounded-3xl border border-border-light bg-secondary-white p-10 shadow-[0_24px_48px_rgba(17,_39,_61,_0.08)]"
          >
            <div>
              <h3 className="font-[Clash Display] text-[26px] uppercase tracking-[0.28em] text-text-primary">
                ZOSTAW NAM WIADOMOŚĆ
              </h3>
            </div>

            <div className="grid gap-7 lg:grid-cols-3">
              <label className="flex flex-col gap-3">
                <span className="font-[Clash Display] text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                  ADRES E-MAIL
                </span>
                <EditText
                  type="email"
                  placeholder="Twój adres e-mail"
                  value={formData.email}
                  onChange={handleChange('email')}
                />
              </label>

              <label className="flex flex-col gap-3">
                <span className="font-[Clash Display] text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                  IMIĘ I NAZWISKO
                </span>
                <EditText
                  placeholder="Twoje imię i nazwisko"
                  value={formData.fullName}
                  onChange={handleChange('fullName')}
                />
              </label>

              <label className="flex flex-col gap-3">
                <span className="font-[Clash Display] text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                  TEMAT ROZMOWY
                </span>
                <EditText
                  placeholder="O czym chcesz porozmawiać?"
                  value={formData.subject}
                  onChange={handleChange('subject')}
                />
              </label>
            </div>

            <label className="flex flex-col gap-3">
              <span className="font-[Clash Display] text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                WIADOMOŚĆ
              </span>
              <TextArea
                rows={6}
                placeholder="Napisz swoją wiadomość..."
                value={formData.message}
                onChange={handleChange('message')}
              />
            </label>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={toggleConsent}
                className="flex items-start gap-4 text-left text-xs leading-[18px] text-text-secondary"
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded border-2 ${
                    formData.consent
                      ? 'border-primary-background bg-primary-background'
                      : 'border-border-light bg-secondary-white'
                  } transition-colors duration-200`}
                >
                  {formData.consent ? (
                    <svg
                      className="h-3 w-3 text-primary-foreground"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 4.707 9.293L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z" />
                    </svg>
                  ) : null}
                </span>
                <span className="max-w-[90%]">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w
                  postaci imienia, nazwiska, adresu e-mail i nr tel. (jeżeli
                  został podany), podanych w powyższym formularzu, zgodnie z
                  przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE)
                  2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                  fizycznych w związku z przetwarzaniem danych osobowych i w
                  sprawie swobodnego przepływu takich danych oraz uchylenia
                  dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych),
                  Dz. Urz. UE z 4.5.2016 r. L 119, str. 1), w celu udzielenia
                  odpowiedzi na złożone zapytanie. Żądanie usunięcia danych
                  proszę kierować na adres biuro@realestate.com Informujemy, że:
                  1. Administratorem Pani/Pana danych osobowych jest RealEstate
                  sp. z o.o. z siedzibą w Poznaniu przy ul. Długiej 5 lok. 25,
                  01-200 Poznań (KRS nr 0001000000) (dalej "Administrator")
                  e-mail: biuro@realestate.com
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
              size="large"
              className="mt-4 inline-flex w-full max-w-[320px] items-center justify-center gap-3 px-9 py-4 font-[Clash Display] uppercase tracking-[0.24em]"
            >
              WYŚLIJ WIADOMOŚĆ
              <svg
                className="h-5 w-5 rotate-[-45deg]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
