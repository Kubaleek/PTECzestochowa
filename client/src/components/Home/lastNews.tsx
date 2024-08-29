import { format, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import { useNewsQuery } from "@/services/queryHooks";
import slugify from 'slugify';
import { Skeleton } from "@nextui-org/skeleton";


export default function LastNews() {
    const { data, error, isLoading } = useNewsQuery();
    
    const news = data?.data ?? [];
    return (
        <>
            {isLoading ? (
            <div className="grid grid-cols-1 gap-4">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="border-2 border-[#17822e]/50 shadow-lg p-2 rounded-lg">
                        <Skeleton className="h-4 mb-2 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                    </div>
                ))}
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
                    <a href={`aktualnosci/${slugify(`${item.subtitle.toLowerCase()}`)}/${slugify(`${item.title.toLowerCase()}`)}`} key={item.subpost_id} className="border-2 group border-[#17822e]/50 shadow-lg opacity-70 p-2 rounded-lg hover:opacity-100 lg:hover:bg-[#f9f2eb] lg:hover:border-[#17822e] transition-all duration-200 ease-linear">
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