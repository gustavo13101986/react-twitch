import React, {useEffect, useState} from 'react';
import '../styles/components/app.css'
import api from '../utils/api.js'


const App = () => {
    const [games, setGames] = useState([])
    let lista = [{name:"carlos"},{name:"diego"}]
    useEffect(() => {
        const fetchData = async() => {
            const result = await api.get('https://api.twitch.tv/helix/games/top')
            let resultData = result.data.data

            // adding size to the image
            resultData.map(game => {
                let newImg = game.box_art_url.replace('{width}', '300').replace('{height}', '300')
                game.box_art_url = newImg
            })

            setGames(resultData)
            console.log(resultData)

        }
        fetchData()
    },[])
    return(
        <div>
            {games.map(game => {
                return(
                <img src ={game.box_art_url}/>

            )})

            }
        </div>
    )
}


export default App;