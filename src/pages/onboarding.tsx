import { CredentialResponse, GoogleLogin, TokenResponse, useGoogleLogin } from "@react-oauth/google"
import Image from "next/image";
import Logo from "../components/icons/logo";
import GoogleLogo from "../../public/google.svg"
import Button from "../components/Button";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from 'react';

import axios, { Axios } from "axios";
import { ONBOARDING, VERIFY_USER } from "../constants/api"
import { isNumberObject } from "util/types";

const inter = Inter({ subsets: ["latin"] });

interface Question {
    question: string;
    responsePattern: string;
    postKey: string;
}

const Onboarding = () => {
    const [localIndex, setLocalIndex] = useState<number>(0);
    const [currentResponse, setCurrentResponse ] = useState<string>("");
    const [buttonText, setButtonText] = useState<string>("Next");

    const questionList : Question[] = [
        {
            question: "What is your age?",
            postKey: "age",
            responsePattern: "[0-9]{3}"
        }, 
        {
            question: "What is your weight?",
            postKey: "weight",
            responsePattern: "[0-9]{3}"
        },
        {
            question: "What is your height in cm?",
            postKey: "height",
            responsePattern: "[0-9]{3}"
        },
        {
            question: "What is your activity level (from 0-3)?",
            postKey: "activeness",
            responsePattern: "[0-3]{1}"
        },
        {
            question: "What is your goal?",
            postKey: "goal",
            responsePattern: "[A-Za-z]{10}"
        }
    ];

    const postOnboardingData = async () => {
        const bodyFormData = new FormData();

        // TODO: Fix issue when manually changing responses
        for(var i = 0; i < questionList.length; i++){
            var response = localStorage.getItem('response' + i);
            response = response != null ? response : "";
            bodyFormData.append(`${questionList[i]}`, response);
        }

        console.log("Submission data:", bodyFormData);

        await axios.post(ONBOARDING, 
            bodyFormData, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : localStorage.getItem('authToken')
                }
            }).then((res) => {   
                window.location.href = "/";
                return res.data;
            });
    }

    const getStoredIndex = () : number => {
        var i : number = Number(localStorage.getItem('index'));
        if(typeof questionList[i] === 'undefined'){
            i = 0;
        }
        return i;
    }

    const refreshButtonText = () => {
        if(localIndex == questionList.length-2){
            setButtonText("Submit!");
        }
    }

    const updateInputField = (value : string) => {
        var regex = new RegExp(questionList[localIndex].responsePattern);
        if(regex.test(value)){
            setCurrentResponse(value);
        }
    }

    const respondToAndNextQuestion = () => {
        // Retrieve stored, restart if invalid
        var i : number = localIndex;

        // Store response
        console.log("Response:", currentResponse);
        localStorage.setItem('response' + i, currentResponse);

        // Next questions
        // setCurrentResponse("");
        i++;
        setLocalIndex(i);
        localStorage.setItem('index', i.toString());

        // If response are full
        if(i >= questionList.length-1){
            refreshButtonText();
            const test = postOnboardingData();
        }
    }

    useEffect(()=>{
        var i : number = 0; 
        refreshButtonText();
        setLocalIndex(i);
    }, []);

    return (
        <div className={`${inter.className} flex flex-col items-center gap-y-8 mt-40`}>
            <span>
				{questionList[localIndex].question}
                
                <input type="text" onChange={(e) => { updateInputField(e.target.value) }} className="h-full w-full text-white focus:outline-none px-3 bg-black border-2 border-gray-700 rounded-r-md">
                </input>

                <Button title={`${buttonText}`} src="#" onClick= { respondToAndNextQuestion }>
                </Button>
			</span>
        </div>
    );
}

export default Onboarding