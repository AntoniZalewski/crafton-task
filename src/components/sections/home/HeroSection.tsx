import Button from "../../ui/Button";

const HeroSection = () => {
  return (
    <section className="w-full bg-secondary-white">
      <div className="mx-auto w-full max-w-[1280px] px-[clamp(24px,6vw,80px)] py-20">
        <h1 className="max-w-[1038px] font-[Clash Display] text-[clamp(36px,6vw,75px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#0A2030]">
          Twoj klucz do lepszej przyszlosci
        </h1>

        <p className="mt-[20px] max-w-[648px] font-[var(--font-instrument-sans)] text-[18px] leading-[1.6] text-[#0A2030]/80">
          W Crafton wierzymy, ze nieruchomosc to cos wiecej niz adres. To przestrzen, w ktorej rodza sie nowe historie i rozwijaja sie mozliwosci dla Ciebie i Twojej rodziny.
        </p>

        <div className="mt-[32px] flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-[20px]">
          <Button as="link" href="#inwestycje" variant="primary">
            Nasze inwestycje
          </Button>
          <Button as="link" href="#poznajmy" variant="secondary">
            Poznajmy sie
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

