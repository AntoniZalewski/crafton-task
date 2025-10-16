const FooterSection = () => {
  return (
    // UWAGA: usunięte px-page (powodowało podwójny padding z mx-container)
    <footer className="w-full bg-[var(--color-white)] pb-[40px] pt-[20px]">
      <div className="mx-container flex w-full flex-col items-center gap-[16px] text-center">
        <p className="body-m font-sans max-w-[750px] text-text-secondary">
          Copyright 2025 RealEstate Sp. z o.o. Wszelkie prawa zastrzezone.
        </p>
        <p className="body-m font-sans max-w-[750px] text-text-secondary">
          <span>Projekt i realizacja: </span>
          <span className="font-semibold text-text-primary">Crafton</span>
        </p>
        <p className="body-s font-sans max-w-[694px] text-text-secondary">
          Materialy zawarte na stronie maja charakter pogladowy i nie moga byc traktowane jako ostateczne projekty realizacyjne. Deweloper zastrzega sobie prawo zmian. Informacja nie stanowi oferty w rozumieniu Kodeksu Cywilnego i ma wylacznie charakter informacyjny.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
