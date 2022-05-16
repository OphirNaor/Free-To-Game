import axios from "axios";




const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
    params: { id: '452' },
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': 'ebb8594839mshcf82ebc8f50c481p1f26acjsncc2a59bc50ab'
    }
};



const query = () => {

    const games = localStorage.getItem('games')
    if (!games) {
        return axios.request(options).then(function (response) {
            localStorage.setItem('games', JSON.stringify(response.data))
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    } else return JSON.parse(games)
}

const getGameById = (id) => {
    const optionsGame = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id },
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'ebb8594839mshcf82ebc8f50c481p1f26acjsncc2a59bc50ab'
        }
    };
    const game = localStorage.getItem('game_' + id)
    if (!game) {
        return axios.request(optionsGame).then(function (response) {
            localStorage.setItem('game_' + id, JSON.stringify(response.data))
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    } else return JSON.parse(game)
}

export const GameService = {
    query,
    getGameById
}