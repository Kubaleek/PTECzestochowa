import { Params } from "@/app/[category]/types";
import Courses from "./Courses/Courses";
import SocialsButtons from "./SocialsButtons";
import { usePathname } from "next/navigation";
import { useSubPostsQuery } from "@/services/queryHooks";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetPages } from "@/services/homeAPI";
import { Skeleton } from "@nextui-org/skeleton";



export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
  const { category } = params as { category: string };
  const id = Array.isArray(query.id) ? query.id[0] : query.id;

  const queryClient = new QueryClient();

  // Prefetch data on the server
  await queryClient.prefetchQuery({
    queryKey: ['Posts', category, id],
    queryFn: async () => GetPages({ category, id }),
    staleTime: 1000 * 60,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      category,
      id: id ?? null, // Ensure id is either a string or null
    },
  };
};
// Define the type for props
interface DetailsProps {
  category: string;
  id: string | null;
}

export default function Details({ category, id }: DetailsProps) {
  const paths = usePathname();

  // Fetch posts using a custom hook
  const {
    data: PostsResponse,
    error,
    isLoading,
  } = useSubPostsQuery(category, id ?? "");

  const posts = PostsResponse?.data || [];

  return (
    <section className="col-span-12 md:col-span-8 xl:col-span-9">
      <article className="mm_article flex flex-col gap-3 mb-20 h-fit bg-white rounded-lg w-full mt-4 p-3 shadow-lg border border-[#333]/25">
        {isLoading ? (

          <div className="flex flex-col gap-3">
            <Skeleton className="h-8 w-3/4 bg-[#ccc]" />
            <Skeleton className="h-6 w-2/3 bg-[#ccc]" />
            <Skeleton className="h-4 w-full bg-[#ccc]" />
            <Skeleton className="h-4 w-5/6 bg-[#ccc]" />
            <Skeleton className="h-4 w-4/5 bg-[#ccc]" />
            <div className="flex flex-row gap-2">
              <Skeleton className="h-10 w-10 bg-[#ccc] rounded-full" />
              <Skeleton className="h-10 w-10 bg-[#ccc] rounded-full" />
              <Skeleton className="h-10 w-10 bg-[#ccc] rounded-full" />
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center p-4 mb-4 text-red-800 border-4 border-red-300 bg-red-50 rounded-lg">
            Wystąpił błąd podczas ładowania danych.
          </div>
        ) : (
          <>
            {posts.length > 0 ? (
              posts.map((item) => (
                <div key={item.id} className="flex flex-col gap-2">
                  <div>
                    <h2 className="text-lg font-bold text-[#17822e] break-words whitespace-normal text-pretty leading-relaxed">
                      {item.subtitle}
                    </h2>
                    <h1 className="text-xl md:text-3xl font-bold break-words whitespace-normal text-pretty leading-relaxed">
                      {item.title}
                    </h1>
                  </div>
                  {item.post_id}
                  <div className="flex flex-row gap-2">
                    <SocialsButtons />
                  </div>
                  <div>
                    {paths === "/kontakt/kontakt" ? (
                      <p>Kontakt</p>
                    ) : paths === "/kursy/szkolenia" ? (
                      <Courses />
                    ) : null}

                    <div
                      dangerouslySetInnerHTML={{ __html: item.post_content }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>Brak postów do wyświetlenia.</p>
              </div>
            )}
          </>
        )}
      </article>
    </section>
  );
}
