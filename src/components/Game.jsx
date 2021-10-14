import React from 'react';
import '../styles/components/app.css'
import '../styles/components/Cards.css'
import { FiThumbsUp } from "react-icons/Fi"
import { FiThumbsDown } from "react-icons/Fi"

const Game = ({verGame}) => {

    return(
         <div className ="col-span-3 m-4 flex justify-center">
            {Object.keys(verGame).length > 0 ?
                <div key={verGame.id} className ="item">
                    <div className ="card">
                        <img className="border-8 border-black" src ={verGame.box_art_url}/>
                            <div className="flex flex-row text-2xl mt-7">
                                <div className="mr-4 ml-4">
                                    <h2 className="text-2xl">{verGame.name}</h2>
                                </div>
                                <div className="mr-4 ml-4 text-2xl" >
                                    <FiThumbsUp/> 
                                </div>
                                <div className="mr-4 ml-4 text-2xl">
                                    <FiThumbsDown/> 
                                </div>
                            

                        </div>
                    </div>
                </div>
                :
                <h1 className=" self-center bg-pink-400">Seleccione un juego de la derecha</h1>
            }

        </div>
    )
}

export default Game