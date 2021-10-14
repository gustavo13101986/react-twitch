import React,{useState} from 'react';
import Header from '../components/Header'
import GamesTop from '../components/GamesTop';

const Home = () => {
    const [games, setGames] = useState([])
    const [newGame, setNewGame] = useState([])


    const getData = (data)=> {
        setGames(data)
    }

    const serachGame = (R) => {
        setNewGame(R)
    }


    return (
        <>
            <Header games={games} serachGame={serachGame} />
            <GamesTop getData={getData} newGame={newGame}/>
        </>
    )
}

export default Home