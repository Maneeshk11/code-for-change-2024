import { useEffect, useState } from "react"
import Button from "../Button"
import Logo from "../icons/logo"
import { UserInfo } from "@/utils/types/interface"


const NavBar = () => {
    const [signin, setSignin] = useState<boolean>(false)
    const [userInfoName, setUserInfoName] = useState<string>("")
    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            const userInfoString = localStorage.getItem("userInfo");
            setSignin(true)
            if (userInfoString !== null) {
                const userinfo = JSON.parse(userInfoString).userData as UserInfo;
                setUserInfoName(userinfo.name)
            }

        }
    }, [])

    const logout = () => {
        localStorage.removeItem("authToken")
        localStorage.removeItem("userInfo")
        window.location.href = "/signup";
    }

    return (
        <div className="w-screen h-28 py-5 px-8 flex flex-row justify-between items-center">
            <Logo />
            {
                signin ?
                    <div className="flex flex-row items-center gap-x-3">
                        <span className="text-lg font-semibold">Hey {userInfoName}</span>
                        <Button disabled={false} src={""} title="Logout" onClick={logout}/>
                    </div>
                    : <Button disabled={false} src="/signup" title="Sign Up" />
            }
        </div>
    )
}

export default NavBar