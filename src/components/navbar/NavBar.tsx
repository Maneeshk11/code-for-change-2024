import Button from "../Button"
import Logo from "../icons/logo"


const NavBar = () => {
    return (
        <div className="w-screen h-28 py-5 px-8 flex flex-row justify-between items-center">
            <Logo />
            <Button src="/signup" title="Sign Up"/>
        </div>
    )
}

export default NavBar