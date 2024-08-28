import CourseTable from "./CourseTable/CourseTable";

const CourseContent = () => {
  return (
    <>
      <div className="bg-green-700 bg-opacity-95 rounded shadow-lg p-1">
        <div className="bg-white rounded p-4 flex flex-col gap-3">
          <div className="bg-[#f5f1ec] flex flex-col md:flex-row justify-between gap-1 border-2 border-[#333]/25 p-2 shadow-lg">
            <h3 className="text-xl font-bold text-black gap-2 text-pretty leading-relaxed items-center flex place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 lucide lucide-book-open-check">
                {" "}
                <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />{" "}
                <path d="m16 12 2 2 4-4" />{" "}
                <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
              </svg>
              Szkolenia{" "}
              <span className="bg-green-700 text-white px-2 py-1 text-xs rounded-3xl">
                73
              </span>
            </h3>
            <div className="flex flex-col gap-3">
              <button
                className={`flex items-center justify-center gap-1 font-medium bg-green-700 hover:bg-green-800 text-white rounded-lg px-4 py-2 shadow-sm transition-all duration-200`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 lucide lucide-plus">
                  {" "}
                  <path d="M5 12h14" /> <path d="M12 5v14" />
                </svg>
                Dodaj Szkolenie
              </button>
            </div>
          </div>
          <hr className="h-[2px] w-full bg-[#17822e]" />
          <div className="rounded max-w-full bg-[#f5f1ec] border-2 border-[#333]/25 p-2 shadow-lg">
            <CourseTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
