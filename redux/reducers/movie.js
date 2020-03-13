import {GET_GENRE, POST_ACTIVE_GENRE, GET_MOVIE_GENRE, GET_TRENDING_MOVIE, GET_NOW_PLAYING_MOVIE} from '../constan/movie'

const initialState = {
    genre : [],
    movie : [],
    moviesGenre : '',
    movies : [],
    activeGenre : '',
    isLoading : false,
    isLoadingNowPlaying : false,
    isFinish : false,
    isError : false,
    trendingMovies : [],
    nowPlaying : []
};

export default (state = initialState, action) => {
  switch (action.type) {
    //get genre
    case GET_GENRE+'_PENDING' : 
    return {
      ...state, isLoading : true
    }

    case GET_GENRE+'_FULFILLED' : 
        return {
        ...state, isLoading : false, isFinish : true,
        genre : action.payload.data.genres,
        activeGenre : action.payload.data.genres[0]
    }

    case GET_GENRE+'_REJECTED' : 
        return {
        ...state, isError : true,

        }

    //post active Genre
    case POST_ACTIVE_GENRE+'_PENDING' : 
    return {
      ...state, isLoading : true
    }

    case POST_ACTIVE_GENRE+'_FULFILLED' : 
        return {
        ...state, isLoading : false, isFinish : true,
        activeGenre : action.payload
    }

    case POST_ACTIVE_GENRE+'_REJECTED' : 
        return {
        ...state, isError : true,

        }
        case POST_ACTIVE_GENRE : 
        return {
        ...state, isLoading : false, isFinish : true,
        activeGenre : action.payload
    }

    //get movie genre

    case GET_MOVIE_GENRE+'_PENDING' : 
    return {
      ...state, isLoading : true
    }

    case GET_MOVIE_GENRE+'_FULFILLED' : 
        return {
        ...state, isLoading : false, isFinish : true,
        moviesGenre : action.payload.data
    }

    case GET_MOVIE_GENRE+'_REJECTED' : 
        return {
        ...state, isError : true,

        }

    //get movie trending

    case GET_TRENDING_MOVIE+'_PENDING' : 
      return {
        ...state, isLoading : true
      }

    case GET_TRENDING_MOVIE+'_FULFILLED' : 
        return {
        ...state, isLoading : false, isFinish : true,
        trendingMovies : action.payload.data
    }

    case GET_TRENDING_MOVIE+'_REJECTED' : 
        return {
        ...state, isError : true,

        }

      case GET_NOW_PLAYING_MOVIE+'_PENDING' : 
        return {
          ...state, isLoadingNowPlaying : true
        }
  
      case GET_NOW_PLAYING_MOVIE+'_FULFILLED' : 
          return {
          ...state, isLoadingNowPlaying : false, isFinish : true,
          nowPlaying : action.payload.data
      }
  
      case GET_NOW_PLAYING_MOVIE+'_REJECTED' : 
          return {
          ...state, isError : true,
  
          }
    
    
   
    default:
      return state;
  }
};
