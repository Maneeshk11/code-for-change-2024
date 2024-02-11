import { Dispatch, FC, SetStateAction } from "react";
import Button from "../Button";

interface PromptCompProps {
    setMovement: Dispatch<SetStateAction<string>>
}
const PromptComp: FC<PromptCompProps> = ({ setMovement }) => {
    return (
        <div id="promptcomp" className="h-[calc(100vh-7rem)] w-fit flex flex-col gap-y-6 mx-auto">
            <span className="font-semibold text-2xl">What do u wanna eat?</span>
            <textarea placeholder="I am feeling ..." name="" id="" className="w-[28rem] h-48 focus:outline-none text-white bg-black border-2 border-gray-700 p-3 rounded-md"></textarea>
            <div className="flex flex-row items-center justify-between mt-12">
                <Button src={""} title="Back" disabled={false} onClick={() => {
                    setMovement("up")
                }} />
                <Button src={""} title="Continue" disabled={false} onClick={() => {
                    setMovement("down")
                }} />
            </div>

        </div>
    )
}

export default PromptComp;