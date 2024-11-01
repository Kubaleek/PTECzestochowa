"use client";

import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import { usePostsQuery, useNewsQuery } from "@/services/queryHooks";
import { Skeleton } from "@nextui-org/skeleton";
import { Divider } from "@nextui-org/react";
import { Suspense } from "react";

export default function LastPosts() {
  const { data: postsData, error: postsError, isLoading: postsLoading } = usePostsQuery();
  const { data: newsData, error: newsError, isLoading: newsLoading } = useNewsQuery();

  const posts = postsData?.data ?? [];
  const news = newsData?.data ?? [];

  const renderLoadingSkeleton = (count : number) =>
    [...Array(count)].map((_, index) => (
      <div key={index} className="bg-[#f8f8f8] rounded-lg p-3 border border-[#333]/15 shadow-lg">
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2 mb-2" />
        <Skeleton className="h-3 w-full mb-1" />
        <Skeleton className="h-3 w-full mb-1" />
        <Skeleton className="h-3 w-full mb-1" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    ));

  const renderError = (message : string) => (
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
      <div className="ml-3 text-sm font-medium">{message}</div>
    </div>
  );

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
              />
            </svg>
            <span className="text-[26px] font-bold m-0">Artykuły i opinie</span>
          </h2>
          <Suspense fallback={<div>Wczytywanie..</div>}>
            {postsLoading
              ? renderLoadingSkeleton(4)
              : postsError
              ? renderError("Błąd: Nie udało się wczytać ostatnich postów.")
              : (
                <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 justify-center items-center">
                  {posts.map((item) => (
                    <div
                      key={item.subpost_id}
                      className="bg-[#f8f8f8] hover:font-bold group rounded-lg relative overflow-hidden p-3 border border-[#333]/15 shadow-lg transition-all duration-200 ease-linear"
                    >
                      <div className="flex flex-col gap-3">
                        <div>
                          <h2 className="group-hover:underline font-semibold text-sm">
                            {item.title}
                          </h2>
                          <p className="text-xs">
                            {format(parseISO(item.created_at), "EEEE, d MMMM yyyy", { locale: pl })}
                          </p>
                        </div>
                        <Divider className="h-[1px] w-full" />
                        <p className="text-xs leading-relaxed text-justify break-words overflow-hidden text-ellipsis line-clamp-3">
                          {item.subtext}
                        </p>
                        <a
                          href={`aktualnosci/?id=3&subid=${item.subpost_id}`}
                          className="hover:underline text-[#2d2f2d] text-sm"
                        >
                          Czytaj dalej
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </Suspense>
        </div>
        
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
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
              />
            </svg>
            <span className="text-[26px] font-bold m-0">Nowe wydarzenia</span>
          </h2>
          <Suspense fallback={<div>Wczytywanie....</div>}>
            {newsLoading
              ? renderLoadingSkeleton(5)
              : newsError
              ? renderError("Błąd: Nie udało się wczytać ostatnich wydarzeń.")
              : (
                <div className="grid grid-cols-1 gap-4">
                  {news.map((item) => (
                    <a
                      href={`aktualnosci?id=2&subid=${item.subpost_id}`}
                      key={item.post_id}
                      className="border-2 group border-[#17822e]/50 shadow-lg opacity-70 p-2 rounded-lg hover:opacity-100 lg:hover:bg-[#f9f2eb] lg:hover:border-[#17822e] transition-all duration-200 ease-linear"
                    >
                      <h3 className="text-sm font-semibold leading-relaxed break-words overflow-hidden text-ellipsis line-clamp-3">
                        {item.title}
                      </h3>
                      <p className="text-xs group-hover:text-[#17822e] group-hover:font-bold transition-colors duration-300">
                        {format(parseISO(item.created_at), "d MMMM, yyyy", { locale: pl })}
                      </p>
                    </a>
                  ))}
                </div>
              )}
          </Suspense>
        </div>
      </div>
      <hr className="h-[2px] w-full bg-[#17822e] mt-6" />
    </section>
  );
}
