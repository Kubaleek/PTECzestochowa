export default function SocialMedia() {
  const socialMediaLinks: [string, string, JSX.Element][] = [
    [
      "twitter",
      "https://x.com/PTE_ZK",
      <svg key="twitter" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"> <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>,
    ],
    [
      "facebook",
      "https://www.facebook.com/profile.php?id=100064391691386",
      <svg key="facebook" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    ],
    [
      "linkedin",
      "https://www.linkedin.com/company/polskie-towarzystwo-ekonomiczne/?originalSubdomain=pl",
      <svg key="linkedin" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> <rect width="4" height="12" x="2" y="9" /> <circle cx="4" cy="4" r="2" /></svg>,
    ],
    [
      "youtube",
      "https://www.youtube.com/channel/UCjypCHgzaMg7V3NWLM5D3Qg",
      <svg key="youtube" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"> <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4  49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /> <path d="m10 15 5-3-5-3z" /></svg>,
    ],
  ];

  return (
    <>
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
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
          </svg>
          <span className="text-[26px] font-bold m-0">Social media</span>
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4">
            {socialMediaLinks.map(([id, href, icon]) => (
              <a
                key={id}
                href={href}
                className="text-[#2d2f2d] opacity-70 transition-all duration-300 ease lg:hover:scale-110 lg:hover:opacity-100">
                {icon}
              </a>
            ))}
          </div>
          <div className="hidden md:flex max-w-full">
            <iframe
              id="twitter-widget-0"
              scrolling="no"
              frameBorder="0"
              className=""
              style={{
                position: "static",
                visibility: "visible",
                width: "553px",
                height: "400px",
                display: "block",
                flexGrow: 1,
              }}
              title="Twitter Timeline"
              src="https://syndication.twitter.com/srv/timeline-profile/screen-name/PTE_ZK?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtYWl0X3NhcGZpbGVzX2FfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwiDmF1dm5vc2FsbHk2P2iF9eGZI0DbnlseB6mh6ALAKZtXrXRSZqRUxlwbSMvTw6yLFvDUzrg80qZmccJpx7wvZ2OQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=pl&amp;origin=https%3A%2F%2Fpte.pl%2F&amp;sessionId=066582a22223513afffad7829c2cd1a584fc3fb5&amp;showHeader=true&amp;showReplies=false&amp;transparent=false&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716"></iframe>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center max-w-[150px] md:mx-auto">
            <img src="https://pte.pl/_next/image?url=https%3A%2F%2Fcms.pte.pl%2Fuploads%2Fukraina_76705a5fde.webp&amp;w=1920&amp;q=75" alt="flaga ukrainy" loading="lazy" />
            <a href="https://pomagamukrainie.gov.pl/" className="lg:hover:underline">#PomagamUkrainie</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '48rem', margin: 'auto', padding: '0.5rem', paddingBottom: '1rem', alignItems: 'center', backgroundColor: 'white', borderRadius: '0.375rem', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2d3748', textAlign: 'center' }}>Dołącz do newslettera</h1>
                <form>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0.5rem' }}>
                    <div style={{ gridColumn: 'span 12 / span 12', width: '90%', justifySelf: 'center' }}>
                        <input type="email" id="email" placeholder="Email" required style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem', marginBottom: '0.5rem', backgroundColor: 'white', border: '1px solid #d1d5db', borderRadius: '0.375rem', color: '#2d3748', outline: 'none' }} value="" />
                    </div>
                    <div style={{ gridColumn: 'span 12 / span 12', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.4rem' }}>
                        <label htmlFor="allow-checkbox" style={{ color: '#a1a1a1', paddingLeft: '0.5rem', fontSize: '0.8rem', width: '90%' }}>
                            Administratorem danych subskrybentów jest Polskie Towarzystwo Ekonomiczne (zk@pte.pl). Więcej informacji o przetwarzaniu danych:
                            <u><a href="https://pte.pl/uploads/ZK_PTE_PB_Z08f_Klauzula_informacyjna_Newsletter_944b504976.pdf" target="_blank" rel="noopener noreferrer">LINK</a></u>
                        </label>
                    </div>
                    <div style={{ gridColumn: 'span 12 / span 12', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button type="submit" style={{ display: 'inline-block', outline: '0', appearance: 'none', padding: '0px 12px', border: '0px solid transparent', borderRadius: '4px', textDecoration: 'none', cursor: 'pointer', backgroundColor: 'rgb(15, 128, 9)', boxShadow: 'rgb(19 170 82 / 40%) 0px 2px 3px', color: 'rgb(255, 255, 255)', fontSize: '14px', fontWeight: '400', height: '36px', transition: 'all 150ms ease-in-out 0s', marginRight: '0.5rem' }}>
                            Zapisz się
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
      </div>
    </>
  );
}