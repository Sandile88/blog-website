import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
    return (
        <nav className="py-3 -mt-60">
            <div className="w-[140%] mx-auto flex justify-between items-center">
                <h1 className="ml-[-30%] font-bold uppercase flex-1 text-gray-900 dark:text-white">Next <span className="text-teal-400">Playground</span></h1>
                <div className="flex flex-1 justify-end">
                    
                    <ThemeToggle/>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
