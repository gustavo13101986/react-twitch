import React, {useState} from 'react';
import { BsSearch } from "react-icons/Bs"


const Search = ({games, serachGame}) => {
    const [game, setGame] = useState('')

    const buscarGame =()=>{
        let R = games.find(item => {
            return item.name.toLowerCase() === game.toLowerCase()
        })
        R.box_art_url.replace('{width}', '800').replace('{height}', '500')
            
        serachGame(R)
        setGame('')
    }

    return(
        <div>
            <div className="bg-white flex items-center rounded-full shadow-xl">
                <input className="rounded-l-full w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="search by full name"
                name="game"
                onChange={e => setGame(e.target.value)}
                value = {game}
                />
                <div className="p-4">
                <button onClick={()=> buscarGame()} className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                    <BsSearch/>
                </button>
                </div>
            </div>
        </div>
    )
}
export default Search