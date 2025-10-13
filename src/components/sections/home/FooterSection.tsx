const FooterSection = () => {
  return (
    <footer className="w-full bg-secondary-white py-16">
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-6 px-6 text-center text-text-secondary">
        <p className="text-base">
          © 2025 RealEstate Sp. z o.o. Wszelkie prawa zastrzeżone.
        </p>
        <p className="text-base">
          <span>Projekt i realizacja: </span>
          <span className="font-semibold text-text-primary">Crafton</span>
        </p>
        <p className="text-sm leading-6">
          Materiały zawarte na stronie WWW mają charakter poglądowy i nie mogą
          być traktowane jako ostateczne projekty realizacyjne. Deweloper
          zastrzega sobie prawo zmian. Niniejsza informacja nie stanowi oferty w
          rozumieniu przepisów Kodeksu Cywilnego i ma wyłącznie charakter
          informacyjny.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
