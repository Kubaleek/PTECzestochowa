export default function ContactData() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold text-xl sm:text-2xl text-pretty leading-relaxed">
        Informacje Kontaktowe
      </h3>
      <ul className="font-medium text-xs sm:text-sm space-y-1 text-pretty leading-relaxed text-justify">
        <li>Adres: Ul. Pułaskiego 4/6 42-200 Częstochowa</li>
        <li>Telefon: +48 509 928 888</li>
        <li>Email: czestochowa@pte.pl</li>
        <li>NIP: 573108787</li>
        <li>REGON: 150045353</li>
        <li>KRS: 000009063</li>
        <li>Bank: PKO Bank Polski: 73 1020 1664 0000 3202 0166 1818</li>
      </ul>
      <h4 className="font-medium font-sans text-gray-500">Prace w toku! Już wkrótce dostępny będzie formularz kontaktowy.</h4>
    </div>
  );
}
