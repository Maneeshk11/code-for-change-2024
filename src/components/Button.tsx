import Link from "next/link";
import { FC, ReactNode } from "react";


interface ButtonProps {
    title: string;
    src: string;
    classname?: string;
    children?: ReactNode;
    onClick?: ()=> void;
    disabled: boolean
}

const Button: FC<ButtonProps> = ({ title, src, classname, children, onClick, disabled }) => {
    return (
        <Link href={src} className={`${disabled && "pointer-events-none"} ${classname}`} onClick={onClick}>
            <button className = {`${disabled && "pointer-events-none bg-gray-700 text-gray-500"} text-xl py-2 px-3 border-2 rounded-xl border-gray-600 hover:bg-gray-800 ${classname}`}>{children}{title}</button>
        </Link>

    )
}

export default Button