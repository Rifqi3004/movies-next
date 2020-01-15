import axios from 'axios'
import {GET_GENRE, POST_ACTIVE_GENRE, GET_MOVIE_GENRE} from '../constan/movie'
import {GET_GENRE_API, GET_MOVIE_GENRE_API} from '../constan/api'

export const GetGenre = (data) => ({
    type : GET_GENRE,
    payload : axios.get(process.env.MOVIE_API+GET_GENRE_API+'?api_key='+process.env.API_KEY+'&language=en-US')
})

export const PostActiveGenre = (genre) =>({
    type : POST_ACTIVE_GENRE,
    payload : genre
})

export const GetMovieGenre = (genreId, page=1) => ({
    type : GET_MOVIE_GENRE,
    payload : axios.get(process.env.MOVIE_API+GET_MOVIE_GENRE_API+'?api_key='+process.env.API_KEY+'&with_genres='+genreId+'&page='+page)
})