import React, { useContext } from 'react'
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { DarkModeContext } from '../context/DarkModeContext';

const Them = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);


    return (
        <div className="ml-4 mt-2 cursor-pointer items-center text-[#38BDF8]">
            <button onClick={toggleDarkMode}>
                {darkMode ? <BsMoonStars size={20} /> : <MdOutlineWbSunny size={25} />}
            </button>
        </div>
    )
}

export default Them