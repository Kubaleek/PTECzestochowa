export type PostsType = {
    id: number;
    title: string;
    date: string;
    text: string;
}

const PostsInfo: PostsType[] = [
    {
        id: 1,
        title: "Eksperci: Raport: Identyfikacja luki cyfrowej oraz zagrożeń wynikających z wprowadzania technologii cyfrowych do przedsiębiorstw",
        date: "poniedziałek, 10 czerwca 2024",
        text: "PRZEMYSLPRZYSZLOSCI.gov.pl: W obliczu szybkiego postępu technologicznego cyfryzacja staje się nieodzownym elementem współczesnego zarządzania rozwojem firmy. Nowe technologie cyfrowe, takie jak Internet Rzeczy, Big Data czy sztuczna inteligencja, otwierają przed firmami nowe możliwości zwiększenia efektywności i konkurencyjności. Jednakże wraz z wprowadzaniem tych rozwiązań pojawiają się również liczne zagrożenia. Świadomość podejmowanego ryzyka oraz podjęcie odpowiednich działań zapobiegawczych są niezbędne, aby możliwe było zapewnienie bezpieczeństwa przedsiębiorstwom oraz gospodarce krajowe...",
    }
]

export default PostsInfo;