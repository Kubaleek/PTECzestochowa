export type ArticleInfosType = {
    id: number;
    src: string;
    title: string;
    date: string;
    text: string;
}

const ArticlesInfos: ArticleInfosType[] = [
    {
        id: 1,
        src: "https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2FMGKONFERENCJACZERWIEC_55735852fd.jpg&w=1920&q=75",
        title: "Konferencja pt. Odkodowany Biznes – Odkodowany Samorząd",
        date: "poniedziałek, 10 czerwca 2024",
        text: "W dniu 05 czerwca 2024 r. odbyła się Konferencja: Odkodowany Biznes – Odkodowany Samorząd. Konferencja została zorganizowana przez Gminę Tarnowo Podgórne i Tarnowskie Stowarzyszenie Przedsiębiorców.",
    }
]

export default ArticlesInfos;