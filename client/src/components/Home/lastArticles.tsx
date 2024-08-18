"use client";
import Link from "next/link";
import Image from "next/image";
import { homeAPI } from "../../services/homeAPI";
import { useQuery } from "@tanstack/react-query";
import { Article, ArticlesResponse } from "./ts/types";
import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import Test from "../../assets/PTECzęstochowa/pte_siedziba.jpg";
import { Typography } from "@material-tailwind/react";

export default function LastArticles() {
  const { data, error, isLoading } = useQuery<ArticlesResponse>({
    queryKey: ["lastArticles"],
    queryFn: homeAPI.GetArticles,
  });

  const articles: Article[] = data?.data || [];

  return (
    <>
      <section>
        <div className="grid grid-cols-12 lg:gap-12">
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
                viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
              </svg>
              <span className="text-[26px] font-bold m-0">Aktualności</span>
            </h2>
            {isLoading ? (
              <p>ładowanie</p>
            ) : error ? (
              <div className="flex items-center p-4 mb-4 text-red-800 border-4 border-red-300 bg-red-50 rounded-lg">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  {" "}
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div className="ms-3 text-sm font-medium">
                  Błąd: Nie udało się wczytać ostatnich artykułów.
                </div>
              </div>
            ) : (
              <p>Test</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
