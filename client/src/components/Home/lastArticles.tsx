"use client";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import SocialIcons from "./Icons";
import Newslatter from "./Newslatter";
import { useArticlesQuery } from "@/services/queryHooks";
import { Skeleton } from "@nextui-org/skeleton";

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
                          src={item.image.startsWith('/') ? item.image : `/${item.image}`}
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
                          href={`aktualnosci?id=${item.id}&subid=${item.subpost_id}`}
                          className="hover:underline text-[#2d2f2d] text-base">
                          Czytaj dalej
                        </a>
                      </div>
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
                    <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v9h4v-9h3l1-4h-4V6c0-.6.4-1 1-1h3z" />
                  </svg>
                }
              />
              <SocialIcons
                href={"https://www.linkedin.com/company/pte-zk"}
                className={
                  "text-[#2d2f2d] opacity-70 border-2 border-[#333]/50 shadow-lg p-2 rounded-md flex justify-center items-center hover:bg-blue-800 hover:text-white hover:border-blue-800 transition-all ease-in duration-200 hover:scale-110"
                }
                label={"LinkedIn"}
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                }
              />
            </div>
            <Newslatter />
          </div>
        </div>
      </div>
    </section>
  );
}
