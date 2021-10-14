import api from '../utils/api';

export const fetchGame = async(id) => {
    const result = await api.get(`https://api.twitch.tv/helix/games?id=${id}`)
    let resultData = result.data.data

    // adding size to the image
    resultData.map(game => {
        let newImg = game.box_art_url.replace('{width}', '800').replace('{height}', '500')
        game.box_art_url = newImg
    })
    console.log(resultData)
    return resultData
}