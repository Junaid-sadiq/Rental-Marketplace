'use client'
import { useState } from "react"; 
import { SafeUser } from "@/app/types";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import ToggleSwitch from "../ToggleSwitch";
import Categories from "./Categories";
interface NavbarProps {
    currentUser?: SafeUser | null;
}
const Navbar:React.FC<NavbarProps> = ({currentUser}) => {
  const [darkMode, setDarkMode] = useState(false);
  console.log('darkmode:', darkMode)
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
            bg-white dark:bg-black
          "
        >
                <Logo/>
                <Search/>
                <Menu currentUser={currentUser}/>
              {/*   <ToggleSwitch
                  label="Dark Mode"
                  value={darkMode}
                  setvalue={setDarkMode}
                /> */}
            </div>
       </Container>
      </div>
            <Categories/>
    </div>
  );
}


export default Navbar;