import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import { homeAPI } from "../../services/homeAPI";
import { useQuery } from "@tanstack/react-query";
import { NewsResponse } from "./ts/types";

export default function LastNews() {
    const { data: { data: news = [] } = {}, error, isLoading } = useQuery<NewsResponse>({
        queryKey: ["lastNews"],
        queryFn: homeAPI.GetNews,
      });
    return (
        <>
            {isLoading ? (
            <div className="text-black">
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-2 text-[#333] animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> <path   d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"   fill="#E5E7EB" /> <path   d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"   fill="currentColor" /></svg>
                Ładowanie...
            </div>
            ) : error ? (
            <div className="flex items-center p-4 mb-4 text-red-800 border-4 border-red-300 bg-red-50 rounded-lg">
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> {" "} <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" /></svg>
                <div className="ms-3 text-sm font-medium">
                  Błąd: Nie udało się wczytać ostatnich wydarzeń.
                </div>
            </div>
            ) : (
            <div className="grid grid-cols-1 gap-4">
                {news.map(((item) => (
                    <a href="" key={item.subpost_id} className="border-2 group border-[#17822e]/50 shadow-lg opacity-70 p-2 rounded-lg hover:opacity-100 lg:hover:bg-[#f9f2eb] lg:hover:border-[#17822e] transition-all duration-200 ease-linear">
                        <h3 className="text-sm font-semibold leading-relaxed break-words overflow-hidden text-ellipsis line-clamp-3">{item.title}</h3>
                        <p className="text-xs group-hover:text-[#17822e] group-hover:font-bold transition-colors duration-300">
                          {format(parseISO(item.created_at),"d MMMM, yyyy",{ locale: pl })}
                        </p>
                    </a>
                )))}
            </div>
            )}
        </>
    );
}