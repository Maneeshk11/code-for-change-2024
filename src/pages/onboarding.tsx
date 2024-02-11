import Button from "@/components/Button"
import axios from "axios";
import { Inter } from "next/font/google";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Onboarding = () => {
    const [age, setAge] = useState<string>("")
    const [weight, setWeight] = useState<string>("")
    const [height, setHeight] = useState<string>("")
    const [activeness, setActiveness] = useState<string>("")
    const [goal, setGoal] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [top, setTop] = useState<string>("top-0")
    const [navi, setNavi] = useState<number>(0)
    const [movement, setMovement] = useState<string>("")

    const Question = ({ question, setOurState, end }: { question: string; setOurState: Dispatch<SetStateAction<string>>; end?: boolean }) => {
        return (
            <div className="h-screen w-fit flex flex-col gap-y-4 mx-auto">
                <span className="mt-48 font-semibold text-2xl">{question}</span>
                <input type="text" onChange={(e) => { setOurState(e.target.value) }} className="h-16 w-72 text-white focus:outline-none px-3 bg-black border-2 border-gray-700 rounded-r-md" />
                <Button src={""} title={`${end ? "Finish" : "Continue"}`} classname="ml-auto mt-8" disabled={false} onClick={async () => {
                    if (end) {
                        const res = await axios.post("http://164.92.112.249:8000/onboarding",
                            {
                                "age": age,
                                "gender": gender,
                                "weight": weight,
                                "height": height,
                                "activeness": activeness,
                                "goal": goal
                            },
                            {
                                headers: {
                                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                                }
                            }
                        )
                        window.location.href = "/"
                    } else {
                        setMovement("down")
                    }
                }} />
            </div>
        )
    }

    useEffect(() => {

        if (movement === "down") {
            setNavi((prevNavi) => {
                const nextNavi = prevNavi + 1;
                const newPosition = `calc(-${nextNavi}*(100vh))`;
                setTop(newPosition);
                return nextNavi;
            });
            setMovement("")
        }

    }, [movement])

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div style={{ top: top }} className={`${inter.className} ${top} absolute w-screen flex flex-col gap-y-6 mx-auto overflow-y-hidden duration-300 transform ease-in`}>
                <Question question="What is your age?" setOurState={setAge} />
                <Question question="What is your weight? (in kgs)" setOurState={setWeight} />
                <Question question="What is your height? (in cm)" setOurState={setHeight} />
                <Question question="What is your Gender? (Male/Female)" setOurState={setGender} />
                <Question question="What is your activeness? (Scale 0 - 3)" setOurState={setActiveness} />
                <Question question="What is your goal?" setOurState={setGoal} end={true} />
            </div>
        </div>
    )
}

export default Onboarding