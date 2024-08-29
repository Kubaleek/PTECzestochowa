"use client";

import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import LastNews from './lastNews';
import { usePostsQuery } from "@/services/queryHooks";
import slugify from 'slugify';
import { Skeleton } from "@nextui-org/skeleton";

export default function LastPosts() {
  const { data, error, isLoading } = usePostsQuery();

  const posts = data?.data ?? [];

  return (
    <section>
      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <h2 className="flex items-center mb-5">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path></svg>
            <span className="text-[26px] font-bold m-0">Artykuły i opinie</span>
          </h2>
          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 justify-center items-center">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-[#f8f8f8] rounded-lg p-3 border border-[#333]/15 shadow-lg">
                <div className="flex flex-col gap-3">
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-1/2 mb-2" />
                  <Skeleton className="h-3 w-full mb-1" />
                  <Skeleton className="h-3 w-full mb-1" />
                  <Skeleton className="h-3 w-full mb-1" />
                  <Skeleton className="h-3 w-1/3" />
                </div>
              </div>
            ))}
          </div>
          ) : error ? (
            <div className="flex items-center p-4 mb-4 text-red-800 border-4 border-red-300 bg-red-50 rounded-lg">
              <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> {" "} <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" /></svg>
              <div className="ms-3 text-sm font-medium">
                Błąd: Nie udało się wczytać ostatnich postów.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 justify-center items-center">
                {posts.map((item) => (
                <div key={item.subpost_id} className="bg-[#f8f8f8] hover:font-bold group rounded-lg group relative overflow-hidden p-3 border border-[#333]/15 shadow-lg transition-all duration-200 ease-linear">
                    <div className="flex flex-col gap-3">
                      <div>
                        <h2 className="group-hover:underline font-semibold text-sm">
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
                      <a href={`aktualnosci/${slugify(`${item.subtitle.toLowerCase()}`)}/${slugify(`${item.title.toLowerCase()}`)}`} className="hover:underline text-[#2d2f2d] text-sm">
                        Czytaj dalej
                      </a>
                    </div>
                </div>
                ))}
            </div>
          )}
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <h2 className="flex items-center mb-5">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path></svg>
            <span className="text-[26px] font-bold m-0">Nowe wydarzenia</span>
          </h2>
          <LastNews />
        </div>
      </div>
      <hr className="h-[2px] w-full bg-[#17822e] mt-6" />
    </section>
  );
}
