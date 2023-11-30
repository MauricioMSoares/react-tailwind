import ToggleTheme from "../ToggleTheme/ToggleTheme"

const Header = ({ user }) => {
    return <>
        <div className="flex h-20 bg-petsup_purple justify-between items-center px-5 sm:rounded-xl sm:m-5">
            <span className="text-gray-100">Welcome, { user?.name || "User" }</span>
            <h1 className="text-gray-100 text-xl font-bold sm:hover:text-2xl sm:cursor-pointer">PetsUp</h1>
            <ToggleTheme />
        </div>
    </>
}

export default Header