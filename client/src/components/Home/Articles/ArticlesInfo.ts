import { StaticImageData } from 'next/image';
import LastArticle1 from "../../../assets/PTE/Test_LastArticles.webp";

export type ArticleInfosType = {
    id: number;
    src: string | StaticImageData;
    title: string;
    date: string;
    text: string;
}

const ArticlesInfos: ArticleInfosType[] = [
    {
        id: 1,
        src: LastArticle1,
        title: "Konferencja pt. Odkodowany Biznes – Odkodowany Samorząd",
        date: "poniedziałek, 10 czerwca 2024",
        text: "W dniu 05 czerwca 2024 r. odbyła się Konferencja: Odkodowany Biznes – Odkodowany Samorząd. Konferencja została zorganizowana przez Gminę Tarnowo Podgórne i Tarnowskie Stowarzyszenie Przedsiębiorców.",
    }
]

export default ArticlesInfos;