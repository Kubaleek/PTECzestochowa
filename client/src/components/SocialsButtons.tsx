import Image from "next/image"
import Link from "next/link"


type SocialsType = {
    id: number;
    href: string;
    src: string;
    alt: string;
}

const Socials: SocialsType[] = [
    {
        id: 1, href: "https://twitter.com/PTE_ZK", src: "https://platform-cdn.sharethis.com/img/twitter.svg", alt:"twitter sharing button",
    },
    {
        id: 2, href: "https://www.facebook.com/profile.php?id=100064391691386", src: "https://platform-cdn.sharethis.com/img/facebook.svg", alt: "facebook sharing button",
    },
    {
        id: 3, href: "https://www.linkedin.com/company/polskie-towarzystwo-ekonomiczne/?originalSubdomain=pl", src: "https://platform-cdn.sharethis.com/img/linkedin.svg", alt: "linkedin sharing button"
    }
]

const SocialsButtons = () => {
    return (
        <>
            {Socials.map(((item) => (
              <Link key={item.id} href={item.href} className="mr-2" aria-label={item.alt}>
                <button className='rounded-md border-none cursor-pointer inline-block text-xs h-8 leading-8 px-2 relative text-center top-0 align-top bg-[#17822e] transition duration-300 ease-out whitespace-nowrap'>
                  <Image src={item.src} alt={item.alt} className='inline-block h-4 w-4 relative top-2 align-top' width={200} height={200} />
                </button>
              </Link>
            )))}
        </>
    )
}

export default SocialsButtons