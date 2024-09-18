import { FormEvent, useState } from "react";
import { Button } from '@nextui-org/react';
import { LoginBox } from "./LoginBox";
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

export const CoursesLogin = () => {
    const router = useRouter();

    const [errors, setErrors] = useState<{ email: string | null; password: string | null }>({
        email: null,
        password: null,
    });

    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        
    }

    return (
        <div className="w-full max-w-5xl bg-white shadow-lg flex flex-col lg:flex-row mb-4 border border-[#333]/50 rounded">
            <div className="w-full lg:w-2/5 bg-green-700 p-4 flex flex-col gap-3 text-white">
                <div className="flex items-center">
                    <svg version="1.1" viewBox="139.31 0 92.39 92.39" xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" style={{ zIndex: 1 }}>
                        <path id="mark" d="..." style={{ fill: "#fff", fillRule: "evenodd" }} />
                    </svg>
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
                <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
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
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="text-base font-medium bg-green-700 text-white rounded-lg px-4 py-2 shadow-sm transition-all duration-200"
                    >
                        {isLoading ? 'Logowanie...' : 'Zaloguj się'}
                    </Button>
                </form>
            </div>
        </div>
    );
};
