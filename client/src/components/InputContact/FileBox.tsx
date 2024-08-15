import React from 'react';
import { useDropzone } from 'react-dropzone';

interface IProps {
    label?: string;
    name?: string;
    error?: string;
    info?: string;
    onFilesChange?: (files: File[]) => void;
}

const FileBox: React.FC<IProps> = ({ label, name, error, info, onFilesChange }) => {
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        multiple: true,
        onDrop: (acceptedFiles) => {
            if (onFilesChange) onFilesChange(acceptedFiles);
        },
    });

    const borderClass = acceptedFiles.length > 0 ? 'border-[#17822e]' : 'hover:border-[#17822e]';

    return (
        <>
            <div className='flex flex-col gap-4'>
                {label && <label htmlFor={name} className="text-[16px] font-bold text-gray-700">{label} - {error && <span className="text-[14px] text-rose-500 mt-0.5">{error}</span>}</label>}
                <div {...getRootProps({ className: `flex w-full h-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed p-6 transition-all duration-300 ease border-gray-400 ${borderClass}` })}>
                    <input {...getInputProps()} name={name} id={name} className="hidden" />
                    <div className="space-y-1 text-center">
                        <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                        </div>
                        <div className="text-gray-600">
                            <p className="font-medium text-primary-500 hover:text-primary-700 cursor-pointer">
                                Kliknij, aby przesłać lub przeciągnij i upuść
                            </p>
                        </div>
                        {info && <p className="text-[14px] text-gray-500">{info}</p>}
                        <div className="text-[16px] font-bold text-gray-500">
                            {acceptedFiles.map((file) => (
                                <p key={file.name}>{file.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FileBox;
