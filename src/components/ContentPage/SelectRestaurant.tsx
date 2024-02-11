import { RestaurantSearch } from "@/utils/api/RestaurantSearch";
import { Restaurant } from "@/utils/types/interface";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import Button from "../Button";

interface SelectRestaurantProps {
    setMovement: Dispatch<SetStateAction<string>>
}

const SelectRestaurant:FC<SelectRestaurantProps> = ({setMovement}) => {

    const [restaurant, setRestaurant] = useState<string>("");
    const [selectedRes, setSelectedRes] = useState<Restaurant>({} as Restaurant)
    const [boolRes, setBoolRes] = useState<boolean>(false)
    const [restaurantList, setRestaurantList] = useState<Restaurant[]>([])

    useEffect(() => {
        if (restaurant !== "") {
            (async () => {
                const res = await RestaurantSearch(restaurant)
                console.log(res)
                setRestaurantList(res)
            })()
        } else {
            setRestaurantList([] as Restaurant[])
        }
    }, [restaurant])

    const onClickHotel = (key: number) => {
        setSelectedRes(restaurantList[key])
        setBoolRes(true)
        setRestaurantList([] as Restaurant[])
        setRestaurant("")
    }

    const clearRestaurant = () => {
        setBoolRes(false)
        setSelectedRes({} as Restaurant)
    }

    const HotelItem = ({ img, hotelName, index }: { img: string; hotelName: string; index: number }) => {
        return (
            <div key={index} className="h-16 w-full flex flex-row hover:bg-slate-700 cursor-pointer" onClick={(e) => onClickHotel(index)} >
                <div className="h-full aspect-square flex flex-col items-center justify-center ">
                    <Image alt="restaurant image" src={img} width={50} height={50} />
                </div>
                <div className="h-full w-64 flex flex-row items-center">
                    <span className=" text-white px-3 ">{hotelName}</span>
                </div>
            </div>
        )
    }

    return (
        <div id="selectRestaurant" className="h-[calc(100vh-7rem)] w-fit flex flex-col gap-y-6 mx-auto">
            <span className="font-semibold text-2xl">Where are we at?</span>
            <div className="h-16 flex flex-row relative w-80">
                <div className="h-full aspect-square flex flex-col items-center justify-center border-y-2 border-l-2 rounded-l-md border-gray-700">
                    {
                        boolRes && selectedRes ?
                            <Image alt="restaurant image" src={selectedRes.logo} width={50} height={50} />
                            :
                            <IoFastFood className="text-4xl" />
                    }

                </div>
                <div className="h-full flex flex-row items-center w-64">
                    {!boolRes ?
                        <input type="text" onChange={(e) => { setRestaurant(e.target.value) }} className="h-full w-full text-white focus:outline-none px-3 bg-black border-2 border-gray-700 rounded-r-md" />
                        :
                        <div className="h-full w-full flex flex-row items-center border-2 border-gray-700 rounded-r-md">
                            <span className=" text-white px-3  ">{selectedRes.name}</span>
                        </div>

                    }
                </div>
                <div className={`${restaurant === "" || boolRes ? "hidden" : "block"} w-80 absolute top-full mt-2 border-2 rounded-md border-gray-700 max-h-64 overflow-y-scroll`}>
                    {restaurantList.length > 0 &&
                        restaurantList.map((rest, index) => {
                            return (
                                <HotelItem hotelName={rest.name} img={rest.logo} key={index} index={index} />
                            )
                        })
                    }
                </div>

                <div className={`${boolRes ? "block": "hidden"} absolute -right-10 top-1/4 cursor-pointer `} onClick={clearRestaurant}>
                    <CiCircleRemove className="w-8 h-8" fill="#cc0000"/>
                </div>
            </div>

            <Button src={""} title="Continue" classname="ml-auto mt-32" disabled={!boolRes} onClick={() => {
                setMovement("down")
            }}/>
        </div>
    )
}

export default SelectRestaurant