import React, {useEffect, useState} from 'react';
import '../styles/components/app.css'
import '../styles/components/Cards.css'
import api from '../utils/api.js'
import { fetchGame } from '../utils/fetchGame';
import Game from './Game';

const GamesTop = ({getData, newGame}) => {

    const [games, setGames] = useState([])
    const [verGame, setVerGame] = useState([])

    const handlefetchGame = async (id)=> {
        let res = await fetchGame(id)
        setVerGame(res[0])
    }

    useEffect(() => {
        setVerGame(newGame)
        const fetchData = async() => {
            const results = await api.get('https://api.twitch.tv/helix/games/top')
            let resultData = results.data.data
            getData(results.data.data)

            // adding size to the image
            resultData.map(game => {
                let newImg = game.box_art_url.replace('{width}', '800').replace('{height}', '500')
                game.box_art_url = newImg
            })

            setGames(resultData)
            console.log(resultData)

        }
        fetchData()
    },[newGame])



    return(
        <div className ="grid grid-cols-1 lg:grid-cols-4 gap-2">
            <Game verGame={verGame}/>
            <div className="container">
            {games.map(game => {
                return(
                    <div key={game.id} className ="item">
                        <div className ="card">
                            <img src ={game.box_art_url}/>
                            <h2 className="title">{game.name}</h2>
                            <button type="button" className="btn btn-blue" onClick={()=> handlefetchGame(game.id)} >Ver</button>
                        </div>
                    </div>
                )})
            }
            </div>
        </div>

    )
}

export default GamesTop