export default function Test2() {
    return (
        <div className="bg-[#f5f1ec] flex flex-col md:flex-row justify-between gap-1 border-2 border-[#333]/25 p-2 shadow-lg">
          <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 lucide lucide-users">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Użytkownicy
            <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-3xl">
              0
            </span>
          </h3>
        </div>
    );
}