"use client"

import { useEffect, useRef } from 'react';
import { socialMediaLinks } from './Icons';
import Ukraine from "../../../../assets/PTE/ukraina.webp"
import Image from 'next/image';

const SocialMediaLinks = () => (
  <div className="flex flex-row gap-4 ">
    {socialMediaLinks.map(([id, href, icon]) => (
      <a key={id} href={href} className="text-[#2d2f2d] opacity-70 transition-all duration-300 ease lg:hover:scale-110 lg:hover:opacity-100" aria-label={id}>
        {icon}
      </a>
    ))}
  </div>
);

const TwitterWidget = () => {
  const twitterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (twitterRef.current) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => {
        if (window.twttr && twitterRef.current) {
          window.twttr.widgets.load(twitterRef.current);
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={twitterRef} className="hidden md:flex max-w-full bg-white">
      <a className="twitter-timeline" data-theme="light" href="https://twitter.com/PTE_ZK" data-height="400" data-width="100%" data-chrome="noheader nofooter noscrollbar transparent" data-tweet-limit="5" title="Twitter Timeline">
        Tweets by @PTE_ZK
      </a>
    </div>
  );
};

const Newsletter = () => (
  <div className="shadow-lg border border-[#333]/25 flex flex-col max-w-3xl mx-auto p-4 pb-4 bg-white rounded-md items-center">
    <h1 className="text-[24px] font-bold text-[#2d3748] text-center my-1">
      Dołącz do newslettera
    </h1>
    <form>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 w-11/12 mx-auto">
          <input type="email" id="email" placeholder="Email" required className="block w-full p-2 mt-2 mb-2 bg-white border border-[#d1d5db] rounded-md text-[#2d3748] outline-none"/>
        </div>
        <div className="col-span-12 w-full flex items-center justify-center mb-2">
          <label htmlFor="allow-checkbox" className="text-[#787575] pl-2 text-sm w-11/12">
            Administratorem danych subskrybentów jest Polskie Towarzystwo Ekonomiczne (zk@pte.pl). Więcej informacji o przetwarzaniu danych:
            <u>
              <a href="https://pte.pl/uploads/ZK_PTE_PB_Z08f_Klauzula_informacyjna_Newsletter_944b504976.pdf" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#178223]"> 
              LINK
              </a>
            </u>
          </label>
        </div>
        <div className="col-span-12 w-full flex items-center justify-center">
          <button type="submit" className="inline-block outline-none appearance-none px-3 py-2 bg-[#0f8009] shadow-lg text-white text-sm font-medium rounded transition-all duration-150 ease-in-out mr-2" aria-label='zapisz się newslettera'>
            Zapisz się
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default function SocialMedia() {
  return (
    <div className="col-span-12 lg:col-span-5 xl:col-span-4">
      <h2 className="flex items-center mb-5">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="square"
          className="inline-block text-[#17822e] text-[12px] text-sm mr-3 h-3 align-middle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"
          ></path>
        </svg>
        <span className="text-[26px] font-bold m-0">Social media</span>
      </h2>
      <div className="flex flex-col gap-6">
        <SocialMediaLinks />
        <TwitterWidget />
        <div className="flex flex-col gap-4 justify-center items-center max-w-[150px] md:mx-auto">
          <Image src={Ukraine} alt="flaga ukrainy" />
          <a href="https://pomagamukrainie.gov.pl/" className="lg:hover:underline">
            #PomagamUkrainie
          </a>
        </div>
        <Newsletter />
      </div>
    </div>
  );
}
