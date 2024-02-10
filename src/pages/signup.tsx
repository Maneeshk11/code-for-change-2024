import { TokenResponse, useGoogleLogin } from "@react-oauth/google"
import Image from "next/image";
import Logo from "../components/icons/logo";
import GoogleLogo from "../../public/google.svg"
import Button from "../components/Button";
import { Inter } from "next/font/google";
import React, { useState } from 'react';

import axios from "axios";
import { VERIFY_USER } from "../constants/api"

const inter = Inter({ subsets: ["latin"] });

const SignUp = () => {

    const postAuthenticate = async (tokenResponse : TokenResponse) => {
        console.log("Token Response: ", tokenResponse);
        console.log("Axios target: ", VERIFY_USER);
        
        const userInfo = await axios.post(VERIFY_USER, {
            accessToken: tokenResponse.access_token
        }).then((res) => {
            const authToken : string = res.headers['authorization'];
            console.log("Axios success, storing Auth Token: ", authToken);
            const [jwtToken, setJwtToken] = useState<string>(authToken);

            localStorage.setItem('authToken', authToken);
            return res.data;
        })
        
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        //window.location.href = "/";
    }

    const loginWithGoogle = useGoogleLogin({
        onSuccess: postAuthenticate,
        flow: "implicit"
    });

    return (
        <div className={`${inter.className} flex flex-col items-center gap-y-8 mt-40`}>
            <div className="flex flex-col gap-y-2 items-center">
                <Logo />
                <span className="font-extrabold text-3xl mt-2 text-gray-400">Welcome !</span>
                <h3 className="font-medium">Please enter your details.</h3>
            </div>
            <div className="flex flex-col gap-y-4 items-center w-[340px]">
                <input type="text" placeholder="Email" className="rounded-lg w-full px-4 py-3 border-[1px] bg-slate-900  border-gray-600" />
                <input type="text" placeholder="Password" className="rounded-lg w-full px-4 py-3 border-[1px] bg-slate-900  border-gray-600" />
                <Button title="Continue" src="#" classname="w-full" />                
                <div className="flex flex-row w-full items-center justify-center">
                    <div className="bg-[#1919193f] h-[1px] flex-grow">&nbsp;</div>
                    <span className="px-3">OR</span>
                    <div className="bg-[#1919193f] h-[1px] flex-grow">&nbsp;</div>
                </div>
                
                <Button src="#" title="Continue with Google" classname="flex flex-row items-center justify-center gap-x-2 w-full"
                        onClick={loginWithGoogle}>
                        <Image src={GoogleLogo} alt="google" />
                        { }
                </Button>
            </div>
        </div>
    );
}

export default SignUp