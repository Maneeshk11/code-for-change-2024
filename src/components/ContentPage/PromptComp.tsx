import { Dispatch, FC, SetStateAction, useState } from "react";
import Button from "../Button";
import axios from "axios";

interface PromptCompProps {
    setMovement: Dispatch<SetStateAction<string>>
}
const PromptComp: FC<PromptCompProps> = ({ setMovement }) => {

    const [prompt, setPrompt] = useState<string>("")
    return (
        <div id="promptcomp" className="h-[calc(100vh-7rem)] w-fit flex flex-col gap-y-6 mx-auto">
            <span className="font-semibold text-2xl">What do u wanna eat?</span>
            <textarea onChange={(e)=>{setPrompt}} placeholder="I am feeling ..." name="" id="" className="w-[28rem] h-48 focus:outline-none text-white bg-black border-2 border-gray-700 p-3 rounded-md"></textarea>
            <div className="flex flex-row items-center justify-between mt-12">
                <Button src={""} title="Back" disabled={false} onClick={() => {
                    setMovement("up")
                }} />
                <Button src={""} title="Continue" disabled={false} onClick={async () => {
                    const res = await axios.post("http://164.92.112.249:8000/healthify-menu",
                    {
                        "restaurant_id": "65c82b9a788b11f7fa6499a8",
                        "user_prompt": prompt,

                    },
                    {
                        headers: {
                            Authorization: `${localStorage.getItem("authToken")}`
                        }
                    }).then(
                        (res) => (
                            localStorage.setItem("promptresult", res.data.result)
                            
                        )
                    )
                    window.location.href = "/result"
                    
                }} />
            </div>

        </div>
    )
}

export default PromptComp;