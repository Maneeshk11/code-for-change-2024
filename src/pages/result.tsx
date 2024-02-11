import { Dispatch, FC, SetStateAction, useState } from "react";
import Button from "../components/Button";

interface ResultCompProps {
    setMovement: Dispatch<SetStateAction<string>>
}
const ResultComp: FC<ResultCompProps> = ({ setMovement }) => {
    const [loading, setLoading] = useState<boolean>(true)
    return (
        <div id="resultomp" className="h-[calc(100vh-7rem)]  mt-24 w-fit flex flex-col gap-y-6 mx-auto">
            <span className="font-semibold text-2xl">What u can do?</span>
            <div className=" w-[28rem] text-white bg-black border-2 border-gray-700 p-3 rounded-md">
                {
                    
                    <span color="white p-3">{localStorage.getItem("promptresult")}</span>
                }
            </div>
            <div className="flex flex-row items-center justify-between mt-12">
                <Button src={""} title="Back" disabled={false} onClick={() => {
                    setMovement("up")
                }} />
            </div>

        </div>
    )
}

export default ResultComp;