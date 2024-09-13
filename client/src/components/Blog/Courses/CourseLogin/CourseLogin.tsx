import { FormEvent, useState } from "react";
import { Button } from '@nextui-org/react';
import { LoginBox } from "./LoginBox";
import { useRouter } from 'next/router'

export const CoursesLogin = () => {
    const router = useRouter()

    // Stan Błędów
    const [errors, setErrors] = useState<{ email: string | null; password: string | null }>({
        email: null,
        password: null,
    });
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
     
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
     
        if (response.ok) {
          router.push('/profile')
        } else {
          // Handle errors
        }
      }

    return (
        <div className="w-full max-w-5xl bg-white shadow-lg flex flex-col lg:flex-row mb-4 border border-[#333]/50 rounded">
            <div className="w-full lg:w-2/5 bg-green-700 p-4 flex flex-col gap-3 text-white">
                <div className="flex items-center">
                    <svg version="1.1" viewBox="139.31 0 92.39 92.39" xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" style={{ zIndex: 1 }}> <path   id="mark"   d="m 159.2838,1.6227 h 52.0768 l 18.7535,19.3304 V 71.7312 L 211.3606,90.7731 H 158.9953 L 140.9632,72.1641 V 20.5202 Z M 158.3279,0 h 53.9728 l 19.4362,20.034 V 72.6608 L 212.3007,92.3959 H 158.0289 L 139.3404,73.1094 V 19.5853 Z m 2.0744,3.5217 h 49.8582 l 17.9545,18.5068 v 48.615 L 210.2605,88.874 H 160.1261 L 142.8621,71.0578 V 21.6141 Z m 1.7896,3.0385 h 46.3086 l 16.6761,17.1892 V 68.903 L 208.5003,85.8356 H 161.9354 L 145.9007,69.2879 V 23.3645 Z m 0.2995,49.062 0.0345,12.9317 c 2e-4,0.0236 -1e-4,0.0865 0.0374,0.0796 0.315,-0.0575 3.4404,1.9553 1.811,2.3231 h -11.9375 c -0.9584,-0.7835 2.5356,-2.4873 2.7094,-2.4829 l 0.002,-40.4845 c 0,-0.0168 -0.002,-0.0349 -0.0104,-0.0401 -0.404,-0.2688 -1.4161,-0.4681 -1.6291,-1.61 l 9.967,-0.0118 c 1.402,-0.0346 3.1725,0.0512 3.8756,0.2212 3.0516,0.7383 5.0129,2.1187 6.6311,3.949 1.5889,1.797 3.2308,4.3501 3.9136,7.6819 0.4922,2.4021 0.5229,3.3976 0.1612,5.2122 -0.8424,4.2238 -3.1261,7.3829 -4.9724,8.7956 -2.857,2.1859 -6.141,3.3049 -10.6087,3.4445 l -1e-4,-0.01 z m -0.0652,-24.5174 0.0529,19.8688 0.1044,0.0443 2e-4,0.006 c 4.3544,0.9166 8.3632,-5.121 8.2183,-9.3688 -0.1486,-4.355 -2.1995,-7.8568 -5.4019,-10.4275 -0.223,-0.1789 -1.6305,-0.457 -2.9739,-0.1224 z m 26.5053,-11.7084 0.005,57.115 c 0,0.4721 2.129,1.142 2.193,3.1987 l -12.9306,-0.0405 c -0.3296,-1.0531 1.0156,-2.3631 2.5857,-3.3743 L 180.7455,19.2421 166.129,19.2013 c -0.0969,-3e-4 -0.777,1.3298 -1.3128,1.4094 -0.4237,0.063 -0.6138,-0.1676 -0.6189,-0.4976 l -0.0239,-5.7621 43.3495,0.0565 c 0.0394,1.3109 0.1194,3.3878 0.0716,5.7629 -0.0135,0.6728 -0.3962,1.0735 -1.1829,0.1991 -0.3001,-0.3336 -0.4866,-1.0649 -1.3268,-1.0604 z m 14.5127,31.1838 -0.003,15.754 12.0468,0.0347 c 0.0754,0.0232 1.7213,-2.2891 2.7159,-1.5574 l -0.0128,5.8747 -26.2648,0.0649 c -0.4451,-2.3202 4.2196,-3.7435 4.3053,-5.0043 0.3424,-5.0242 0.1499,-10.1781 0.1499,-15.2242 l -2.0722,0.008 c -0.0355,1e-4 -2.4485,2.3378 -2.4439,1.3901 l 0.0369,-7.6299 c 0.005,-0.9925 2.2889,1.2566 2.3633,1.2566 l 2.1159,-0.004 0.035,-17.3445 c 0,-0.007 -2.2423,-0.7622 -1.7699,-1.7098 l 23.7696,0.034 0.0233,5.7627 c -0.2869,1.1974 -2.4419,-1.0172 -2.5692,-1.3005 l -12.4337,-0.003 0.0457,14.5531 12.1754,-0.0187 c 0.0928,-1e-4 1.8934,-2.5245 2.6821,-1.3565 v 8.5351 c -0.7099,1.2527 -2.3852,-2.1358 -2.6373,-2.1355 z"   style={{ fill: "rgb(255, 255, 255)", fillRule: "evenodd" }}  /></svg>
                    <div className="pl-2">
                        <p className="m-0 font-arrus text-xs font-bold text-white">Oddział w</p>
                        <p className="m-0 font-arrus text-xs font-bold text-white">Częstochowie</p>
                    </div>
                </div>
                <hr />
                <p className="text-xs text-pretty leading-relaxed text-justify">
                    Aby zobaczyć listę szkoleń, zaloguj się, używając tymczasowego hasła otrzymanego od PTE Częstochowa. Hasło będzie ważne do czasu jego zmiany. W razie problemów skontaktuj się z administratorem.
                </p>
                <hr />
                <p className="text-xs text-pretty leading-relaxed text-justify">
                    Strona Szkolenia jest w trakcie budowy
                </p>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-3 lg:gap-6 p-4 bg-[#f7f3ef]">
                <h2 className="text-lg md:text-2xl font-bold text-pretty leading-relaxed">Logowanie do Szkoleń</h2>
                <form className="grid grid-cols-1 gap-3">
                    <LoginBox
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Wpisz Email"
                        error={errors.email}
                        autocomplete="off"
                    />
                    <div className="flex flex-col gap-2">
                        <LoginBox
                            label="Hasło"
                            name="password"
                            type="password"
                            placeholder="Wpisz Hasło"
                            error={errors.password}
                            autocomplete="on"
                        />
                    </div>
                </form>
                <Button className="text-base font-medium bg-green-700 text-white rounded-lg px-4 py-2 shadow-sm transition-all duration-200">
                    Zaloguj się
                </Button>
            </div>
        </div>
    );
};
