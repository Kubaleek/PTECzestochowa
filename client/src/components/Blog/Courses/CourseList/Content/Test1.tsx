export default function Test1() {
    return (
      <>
        <div className="bg-[#f5f1ec] flex tems-center justify-between border-2 border-[#333]/25 p-2 shadow-lg">
          <div>
            <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
              Szkolenia
              <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-full">
                0
              </span>
            </h3>
            <p className="text-sm text-pretty leading-relaxed text-gray-700 text-justify text-clip">
              Oto lista dostępnych szkoleń. Jako administrator, masz pełną kontrolę nad tymi zasobami – możesz dodawać nowe szkolenia, edytować istniejące oraz usuwać te, które są już nieaktualne lub niepotrzebne.
            </p>
          </div>
        </div>
      </>
    );
}