import News from "./News/News";
import PostsInfo from "./PostsInfo";
import LineSection from "../../LineSection";
import Link from "next/link";

export default function Posts() {
    return (
        <section>
            <div className="grid grid-cols-12 gap-6 lg:gap-12">
                <div className="col-span-12 lg:col-span-7 xl:col-span-8">
                    <h2 className="flex items-center mb-5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
                        </svg>
                        <span className="text-[26px] font-bold m-0">Artykuły i opinie</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        {PostsInfo.map(((item) => (
                            <div key={item.id} className="bg-[#f8f8f8] rounded-lg group relative mb-4 overflow-hidden p-3 border border-[#333]/15 bg-opacity-50 shadow hover:bg-opacity-100 transition-all ease duration-500">
                                <div className="flex flex-col gap-3">
                                  <div>
                                    <h2 className="text-[16px] font-semibold group-hover:underline text-[#2d2f2d]">
                                      {item.title}
                                    </h2>
                                    <p className="text-[12px] text-justify break-normal break-words">
                                      {item.date}
                                    </p>
                                  </div>
                                  <p className="text-[12px] text-justify break-normal break-words ">
                                    {item.text}
                                  </p>
                                  <Link href={""} className="underline text-[#2d2f2d]">
                                    Czytal dalej
                                  </Link>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 xl:col-span-4">
                    <h2 className="flex items-center mb-5">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
                        </svg>
                        <span className="text-[26px] font-bold m-0"> Nowe wydarzenia</span>
                    </h2>
                    <News />
                </div>
            </div>
            <LineSection />
        </section>
    );
}