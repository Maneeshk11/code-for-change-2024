import Link from "next/link";
import { FC, ReactNode } from "react";


interface ButtonProps {
    title: string;
    src: string;
    classname?: string;
    children?: ReactNode;
    onClick?: ()=> void
}

const Button: FC<ButtonProps> = ({ title, src, classname, children, onClick }) => {
    return (
        <Link href={"#"} className={`${classname}`} onClick={onClick}>
            <button className = {`text-xl py-2 px-3 border-2 rounded-xl border-gray-600 hover:bg-gray-800 ${classname}`}>{children}{title}</button>
        </Link>

    )
}

export default Button