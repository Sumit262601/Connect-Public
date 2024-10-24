import React, { useContext } from 'react'
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { DarkModeContext } from '../context/DarkModeContext';

const Them = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div className="ml-4 cursor-pointer items-center text-[#38BDF8]">
            <button onClick={toggleDarkMode} className={`${darkMode ? 'bg-white p-2 rounded-lg' : ' bg-gray-100 shadow rounded-lg p-2'}`}>
                {darkMode ? <BsMoonStars size={20} /> : <MdOutlineWbSunny size={20} />}
            </button>
        </div>
    )
}

export default Them