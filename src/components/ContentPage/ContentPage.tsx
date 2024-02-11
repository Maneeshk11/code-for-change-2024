import { useEffect, useState } from "react"
import PromptComp from "./PromptComp"
import SelectRestaurant from "./SelectRestaurant"


const ContentPage = () => {
    const [top, setTop] = useState<string>("top-48")

    const [navi, setNavi] = useState<number>(0)
    const [movement, setMovement] = useState<string>("")

    useEffect(() => {

        if (movement === "down") {
            setNavi((prevNavi) => {
                const nextNavi = prevNavi + 1;
                const newPosition = `calc(12rem - ${nextNavi} * (100vh - 7rem))`;
                setTop(newPosition); 
                return nextNavi;
            });
        } else if (movement === "up") {
            setNavi((prevNavi) => {
                const nextNavi = prevNavi - 1;
                const newPosition = `calc(12rem - ${nextNavi} * (100vh - 7rem))`;
                setTop(newPosition);
                return nextNavi;
            });
        }

    }, [movement])

    return (
        <div style={{ top: top }} className={`w-screen ${top} absolute transform duration-300 ease-in`}>
            <SelectRestaurant setMovement={setMovement} />
            <PromptComp setMovement={setMovement} />
        </div>
    )


}

export default ContentPage