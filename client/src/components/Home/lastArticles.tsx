"use client";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import Link from "next/link";
import { useArticlesQuery } from "@/services/queryHooks";
import { Skeleton } from "@nextui-org/skeleton";
import { Divider } from "@nextui-org/react";
import { Suspense } from "react";

import { SocialIconsProps } from "./ts/types";

export function SocialIcons({ label, icon, className, href }: SocialIconsProps) {
    return (
    <Link href={href} className={className} aria-label={label}>
        {icon}
    </Link>
  );
}

export default function LastArticles() {
  const { data: articlesResponse, error, isLoading } = useArticlesQuery();
  const articles = articlesResponse?.data || [];

  return (
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
          <Suspense fallback={<div>Wczytywanie...</div>}>
            {isLoading ? (
              <div className="flex flex-col gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#f8f8f8] shadow-lg rounded relative overflow-hidden p-3 bg-opacity-50 border border-[#333]/25"
                  >
                    <div className="grid grid-cols-12 gap-3 sm:gap-6">
                      <div className="col-span-12 sm:col-span-4">
                        <Skeleton className="h-32 sm:h-48 w-full rounded-lg" />
                      </div>
                      <div className="col-span-12 sm:col-span-8 flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-3">
                          <Skeleton className="h-6 w-3/4 rounded-lg" />
                          <Skeleton className="h-4 w-1/2 rounded-lg" />
                          <Skeleton className="h-4 w-full rounded-lg" />
                          <Skeleton className="h-4 w-full rounded-lg" />
                          <Skeleton className="h-4 w-full rounded-lg" />
                        </div>
                        <Skeleton className="h-6 w-1/4 rounded-lg" />
                      </div>
                    </div>
                  </div>
                ))}
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
                          src={
                            item.image.startsWith("/")
                              ? item.image
                              : `/${item.image}`
                          }
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
                                "d MMMM, yyyy",
                                { locale: pl }
                              )}
                            </p>
                          </div>
                          <Divider className="h-[1px] w-full" />
                          <p className="text-xs leading-relaxed text-justify break-words overflow-hidden text-ellipsis line-clamp-3">
                            {item.subtext}
                          </p>
                        </div>
                        <a
                          href={`aktualnosci?id=${item.id}&subid=${item.subpost_id}`}
                          className="hover:underline text-[#2d2f2d] text-base"
                        >
                          Czytaj dalej
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Suspense>
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
                href={"https://www.facebook.com/profile.php?id=100064391691386"}
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
            <div className="shadow-xl border border-[#333]/25 flex flex-col p-4 pb-4 bg-white rounded-md items-center">
              <h2 className="text-[24px] font-bold text-[#2d3748] text-center my-1">
                Dołącz do newslettera
              </h2>
              <form>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12 w-11/12 mx-auto">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="block w-full p-2 mt-2 mb-2 bg-white border border-[#d1d5db] rounded-md text-[#2d3748] outline-none"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-span-12 w-full flex items-center justify-center mb-2">
                    <p className="text-[#787575] pl-2 text-sm w-11/12">
                      Administratorem danych subskrybentów jest Polskie
                      Towarzystwo Ekonomiczne (zk@pte.pl). Więcej informacji o
                      przetwarzaniu danych:
                      <u>
                        <a
                          href="https://pte.pl/uploads/ZK_PTE_PB_Z08f_Klauzula_informacyjna_Newsletter_944b504976.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-[#178223]"
                        >
                          {" "}
                          LINK
                        </a>
                      </u>
                    </p>
                  </div>
                  <div className="col-span-12 w-full flex items-center justify-center">
                    <button
                      type="submit"
                      className="inline-block outline-none appearance-none px-3 py-2 bg-[#0f8009] shadow-lg text-white text-sm font-medium rounded transition-all duration-150 ease-in-out mr-2"
                      aria-label="zapisz się newslettera"
                    >
                      Zapisz się
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[2px] w-full bg-[#17822e] mt-6" />
    </section>
  );
}
