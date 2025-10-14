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
    <section id="kontakt" className="w-full bg-secondary-background py-[80px]">
      <span id="poznajmy" className="block h-0" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1280px] px-[80px]">
        <div className="flex flex-col gap-[20px]">
          <div className="pt-[32px]">
            <h2 className="font-[Clash Display] text-[44px] uppercase tracking-[0.32em] text-text-primary sm:text-[52px]">
              POROZMAWIAJMY
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[20px] rounded-3xl border border-border-light bg-secondary-white p-[32px] shadow-[0_24px_48px_rgba(17,_39,_61,_0.08)]"
          >
            <div>
              <h3 className="font-[Clash Display] text-[26px] uppercase tracking-[0.28em] text-text-primary">
                ZOSTAW NAM WIADOMOSC
              </h3>
            </div>

            <div className="grid gap-[20px] lg:grid-cols-3">
              <label className="flex flex-col gap-[10px]">
                <span className="font-[Clash Display] text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                  ADRES E-MAIL
                </span>
                <EditText
                  type="email"
                  placeholder="Twoj adres e-mail"
                  value={formData.email}
                  onChange={handleChange('email')}
                  className="h-[56px]"
                />
              </label>

              <label className="flex flex-col gap-[10px]">
                <span className="font-[Clash Display] text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                  IMIE I NAZWISKO
                </span>
                <EditText
                  placeholder="Twoje imie i nazwisko"
                  value={formData.fullName}
                  onChange={handleChange('fullName')}
                  className="h-[56px]"
                />
              </label>

              <label className="flex flex-col gap-[10px]">
                <span className="font-[Clash Display] text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                  TEMAT ROZMOWY
                </span>
                <EditText
                  placeholder="O czym chcesz porozmawiac?"
                  value={formData.subject}
                  onChange={handleChange('subject')}
                  className="h-[56px]"
                />
              </label>
            </div>

            <label className="flex flex-col gap-[10px]">
              <span className="font-[Clash Display] text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">
                WIADOMOSC
              </span>
              <TextArea
                rows={6}
                placeholder="Napisz swoja wiadomosc..."
                value={formData.message}
                onChange={handleChange('message')}
                className="min-h-[188px]"
              />
            </label>

            <div className="mt-[20px] flex flex-col gap-[20px]">
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
                  Wyrazam zgode na przetwarzanie moich danych osobowych w
                  postaci imienia, nazwiska, adresu e-mail i nr tel. (jezeli
                  zostal podany), podanych w powyzszym formularzu, zgodnie z
                  przepisami rozporzadzenia Parlamentu Europejskiego i Rady (UE)
                  2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osob
                  fizycznych w zwiazku z przetwarzaniem danych osobowych i w
                  sprawie swobodnego przeplywu takich danych oraz uchylenia
                  dyrektywy 95/46/WE (ogolne rozporzadzenie o ochronie danych),
                  Dz. Urz. UE z 4.5.2016 r. L 119, str. 1), w celu udzielenia
                  odpowiedzi na zlozone zapytanie. Zadanie usuniecia danych
                  prosze kierowac na adres biuro@realestate.com Informujemy, ze:
                  1. Administratorem Pani/Pana danych osobowych jest RealEstate
                  sp. z o.o. z siedziba w Poznaniu przy ul. Dlugiej 5 lok. 25,
                  01-200 Poznan (KRS nr 0001000000) (dalej &quot;Administrator&quot;)
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
              className="mt-[32px] w-full max-w-[320px] px-[32px] py-[18px] uppercase tracking-[0.24em]"
            >
              WYSLIJ WIADOMOSC
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


