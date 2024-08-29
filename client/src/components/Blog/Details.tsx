import { Params } from "@/app/[category]/[subcategory]/ts/types";
import Courses from "./Courses/Courses";
import SocialsButtons from "./SocialsButtons";
import { usePathname } from "next/navigation";
// import { useSubPostsQuery } from "@/services/queryHooks";

export default function Details({ params }: { params: Params }) {
  const paths = usePathname();
  const { category, subcategory } = params;
  
  return (
    <section className="col-span-12 md:col-span-8 xl:col-span-9">
      <article className="flex flex-col gap-3 mb-20 h-fit bg-white rounded-lg w-full mt-4 p-3 shadow-lg border border-[#333]/25">
          <>
            <div className="flex flex-col gap-2">
              <div>
                <h2 className="text-lg font-bold text-[#17822e] break-words whitespace-normal text-pretty leading-relaxed">
                  Lorem
                </h2>
                <h1 className="text-xl md:text-3xl font-bold break-words whitespace-normal text-pretty leading-relaxed">
                  Lorem
                </h1>
              </div>
              <div className="flex flex-row gap-2">
                <SocialsButtons />
              </div>
            </div>
            <div>
              {paths === "/kontakt/kontakt" ? (
                <p>Kontakt</p>
              ) : paths === "/kursy/szkolenia" ? (
                <Courses />
              ) : (
                <p>Test</p>
              )}
            </div>
          </>
      </article>
    </section>
  );
}
