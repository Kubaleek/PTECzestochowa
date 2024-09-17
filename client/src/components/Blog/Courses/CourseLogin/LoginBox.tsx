
export const LoginBox = ({
    label,
    type,
    placeholder,
    name,
    error,
    autocomplete
}: {
    label: string;
    type: string;
    placeholder: string;
    name: string;
    error: string | null;
    autocomplete: string;
}) => (
    <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-base font-semibold">
            {label}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border rounded focus:outline-none shadow-md ${error ? 'border-red-500 ring-2 ring-red-500' : 'border-black/25 focus:ring-2 focus:ring-black/50'}`}
            autoComplete={autocomplete}
        />
        {error && (
            <p className="text-sm text-red-500 mt-1">
                {/* Wiadomość o błędzie */}
                {error}
            </p>
        )}
    </div>

);