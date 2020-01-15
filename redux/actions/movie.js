import axios from 'axios'
import {GET_GENRE, POST_ACTIVE_GENRE, GET_MOVIE_GENRE, GET_TRENDING_MOVIE, GET_NOW_PLAYING_MOVIE} from '../constan/movie'
import {GET_GENRE_API, GET_MOVIE_GENRE_API, GET_MOVIE_TRENDING_API, GET_MOVIE_NOW_PLAYING_API} from '../constan/api'

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

export const GetTrendingMovie = (time='week', page=1) => ({
    type : GET_TRENDING_MOVIE,
    payload : axios.get(process.env.MOVIE_API+GET_MOVIE_TRENDING_API+time+'?api_key='+process.env.API_KEY+'&page='+page)
})

export const GetNowPlaying = (language='en-US', page=1) => ({
    type : GET_NOW_PLAYING_MOVIE,
    payload : axios.get(process.env.MOVIE_API+GET_MOVIE_NOW_PLAYING_API+'?api_key='+process.env.API_KEY+'&language='+language+'&page='+page)
})