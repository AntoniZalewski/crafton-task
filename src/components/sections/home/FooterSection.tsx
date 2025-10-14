const FooterSection = () => {
  return (
    <footer className="w-full bg-secondary-white py-[80px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mx-auto flex h-[164px] w-full max-w-[750px] flex-col items-center justify-center gap-[16px] px-4 pt-[20px] pb-[40px] text-center sm:px-8 md:px-[32px] xl:px-0">
          <p className="text-base text-text-secondary">
            © 2025 RealEstate Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-base text-text-secondary">
            <span>Projekt i realizacja: </span>
            <span className="font-semibold text-text-primary">Crafton</span>
          </p>
          <p className="text-sm leading-6 text-text-secondary">
            Materiały zawarte na stronie WWW mają charakter poglądowy i nie mogą
            być traktowane jako ostateczne projekty realizacyjne. Deweloper
            zastrzega sobie prawo zmian. Niniejsza informacja nie stanowi oferty
            w rozumieniu przepisów Kodeksu Cywilnego i ma wyłącznie charakter
            informacyjny.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
