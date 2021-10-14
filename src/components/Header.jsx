import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/Io";
import { BsFillPlayBtnFill } from "react-icons/Bs"
import { AiOutlineVideoCameraAdd } from "react-icons/Ai"
import { FaUserCircle } from "react-icons/Fa"
import { GrApps } from "react-icons/Gr"
import Search from "./Search" 


const Header = ({games, serachGame}) => { 

    return(
        <div>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <div className="mr-2 ml-7 text-red-600 text-2xl">
                    <BsFillPlayBtnFill/>

                    </div>
                    <span className="font-semibold text-xl tracking-tight">Top Games Twitch</span>
                </div>
                <div className="hidden lg:block">
                    <Search games={games} serachGame={serachGame}/>
                </div>
                
                <div className="hidden sm:block">
                    <div className="flex flex-row text-2xl">
                        <div className="mr-4 ml-4">
                            <AiOutlineVideoCameraAdd/>
                        </div>
                        <div className="mr-4 ml-4" >
                            <GrApps/>
                        </div>
                        <div className="mr-4 ml-4">
                            <IoMdNotificationsOutline/>
                        </div>
                        <div className="mr-5 text-red-600 text-4xl text-purple-700" >
                            <FaUserCircle/>
                        </div>

                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Header