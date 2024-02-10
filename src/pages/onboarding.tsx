import { CredentialResponse, GoogleLogin, TokenResponse, useGoogleLogin } from "@react-oauth/google"
import Image from "next/image";
import Logo from "../components/icons/logo";
import GoogleLogo from "../../public/google.svg"
import Button from "../components/Button";
import { Inter } from "next/font/google";

import axios from "axios";
import { VERIFY_USER } from "../constants/api"

const inter = Inter({ subsets: ["latin"] });

const Onboarding = () => {
    return (
        <div className={`${inter.className} flex flex-col items-center gap-y-8 mt-40`}>
            <span>
				Hey!!!
			</span>
        </div>
    );
}

export default Onboarding