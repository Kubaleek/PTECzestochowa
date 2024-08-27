"use client";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import Test from "../../assets/PTECzęstochowa/pte_siedziba.jpg";
import SocialIcons from "./Icons";
import Newslatter from "./Newslatter";
import { useArticlesQuery } from "@/services/queryHooks";
import slugify from 'slugify';

export default function LastArticles() {

  const { data: articlesResponse, error, isLoading } = useArticlesQuery();
  const articles = articlesResponse?.data || [];
  return (
    <>
      <section>
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            <h2 className="flex items-center mb-5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="square"
                className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"
                ></path>
              </svg>
              <span className="text-[26px] font-bold m-0">Aktualności</span>
            </h2>
            {isLoading ? (
              <div className="text-black">
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-2 text-[#333] animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Ładowanie...
              </div>
            ) : error ? (
              <div className="flex items-center p-4 mb-4 text-red-800 border-4 border-red-300 bg-red-50 rounded-lg">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div className="ms-3 text-sm font-medium">
                  Błąd: Nie udało się wczytać ostatnich artykułów.
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {articles.map((item) => (
                  <div
                    key={item.subpost_id}
                    className="bg-[#f8f8f8] shadow-lg rounded relative overflow-hidden p-3 bg-opacity-50 border border-[#333]/25"
                  >
                    <div className="grid grid-cols-12 gap-3 sm:gap-6">
                      <div className="col-span-12 sm:col-span-4">
                        <Image
                          src={Test}
                          alt="Aktualności"
                          width={400}
                          height={400}
                          className="rounded-lg object-cover h-auto sm:h-full w-full sm:w-auto"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-8 flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-3">
                          <div>
                            <h2 className="font-semibold text-base">
                              {item.title}
                            </h2>
                            <p className="text-xs">
                              {format(
                                parseISO(item.created_at),
                                "EEEE, d MMMM yyyy",
                                { locale: pl }
                              )}
                            </p>
                          </div>
                          <p className="text-xs leading-relaxed text-justify break-words overflow-hidden text-ellipsis line-clamp-3">
                            {item.subtext}
                          </p>
                        </div>
                        <a
                          href={`aktualnosci/${slugify(`${item.subtitle.toLowerCase()}`)}/${slugify(`${item.title.toLowerCase()}`)}`}
                          className="hover:underline text-[#2d2f2d] text-base">
                          Czytaj dalej
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-span-12 lg:col-span-5 xl:col-span-4">
            <h2 className="hidden lg:flex items-center mb-5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="square"
                className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"
                ></path>
              </svg>
              <span className="text-[26px] font-bold m-0">Social Media</span>
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 items-center">
                <SocialIcons
                  href={"https://x.com/PTE_ZK"}
                  className={
                    "text-[#2d2f2d] opacity-70 border-2 border-[#333]/50 shadow-lg p-2 rounded-md flex justify-center items-center hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all ease-in duration-200 hover:scale-110"
                  }
                  label={"Twitter"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  }
                />
                <SocialIcons
                  href={
                    "https://www.facebook.com/profile.php?id=100064391691386"
                  }
                  className={
                    "text-[#2d2f2d] opacity-70 border-2 border-[#333]/50 shadow-lg p-2 rounded-md flex justify-center items-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all ease-in duration-200 hover:scale-110"
                  }
                  label={"Facebook"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  }
                />
                <SocialIcons
                  href={
                    "https://www.linkedin.com/company/polskie-towarzystwo-ekonomiczne/?originalSubdomain=pl"
                  }
                  className={
                    "text-[#2d2f2d] opacity-70 border-2 border-[#333]/50 shadow-lg p-2 rounded-md flex justify-center items-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all ease-in duration-200 hover:scale-110"
                  }
                  label={"Linkedin"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  }
                />
                <SocialIcons
                  href={
                    "https://www.youtube.com/channel/UCjypCHgzaMg7V3NWLM5D3Qg"
                  }
                  className={
                    "text-[#2d2f2d] opacity-70 border-2 border-[#333]/50 shadow-lg p-2 rounded-md flex justify-center items-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all ease-in duration-200 hover:scale-110"
                  }
                  label={"youtube"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-youtube"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  }
                />
              </div>
              <Newslatter />
            </div>
          </div>
        </div>
        <hr className="h-[2px] w-full bg-[#17822e] mt-6" />
      </section>
    </>
  );
}
