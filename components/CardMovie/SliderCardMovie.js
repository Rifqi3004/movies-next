import React from 'react'
import {SearchOutlined, Notifications} from '@material-ui/icons'
import {Grid} from '@material-ui/core'
import {Star} from '@material-ui/icons'
import colors from '../../tools/colors'
import {connect} from 'react-redux'

const SliderCardMovie = (props) => {
  const {data, movie} = props
  var selectGenre = [];
  const genre = data.genre_ids;
  movie.genre.map((gnr) => {
    genre.map((gnr2) => {
      if(gnr2 === gnr.id){
        selectGenre.push(gnr.name)
      }
    })
  })
  var genres = ''
  if(selectGenre.length > 0){
      for(var i = 0; i < selectGenre.length; i++){
        if(i !== selectGenre - 1){
          genres += selectGenre[i]+','
        }else{
          genres += selectGenre[i]
        }
        if(i === 1){
          break;
        }
      }
  }
  const imageUrl = process.env.MOVIE_IMAGE_URL+data.backdrop_path
  const title = JSON.stringify(data.title)
  const fontSizeTitle = () => {
    if(title.length > 50){
      return 10
    }else if(title.length > 20){
      return 12
    }else if(title.length > 10){
      return 14
    }else{
      return 16
    }
  }
  return (
    <Grid container spacing={1}>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
          <div className="img-movie-div">
            <img src={imageUrl} className="img-movie" />
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
          <div className="detail-movie">
            <p className="genre-date">{genres.length > 0 && genres} | {data.release_date}</p>
            <p className="title-movie" >{data.title}</p>
            <p className="rating-movie" style={{position :'absolute',top : 0, right : 20}}><Star style={{color : colors.yellow2, fontSize : 16}} /> &nbsp;{data.vote_average}/10</p>
          </div>
        </Grid>
        <style jsx>{`
          .container-SliderCardMovie {
                display: flex;
                flex-direction:column;
                font-family: Poppins;
          }
          .img-movie-div {
            height: 200px;
            width: 400px;
            border-radius: 10px;

          }

          .img-movie {
            height: 200px;
            width: 400px;
            border-radius: 10px;
          }

          .detail-movie {
            width: 400px;
            position: relative;
          }
          .genre-date {
            font-size: 12px;
            font-weight: 400;
            font-family: Poppins;
            width: 400px;
            margin-bottom : -10px
          }
          .title-movie {
            font-weight: 700;
            font-family: Poppins;
            width: 180px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-lines: 1;
            margin-bottom : -10px;
          }
          .rating-movie {
            font-size: 12px;
            font-weight: 700;
            font-family: Poppins;
            line-height : 5px;
            position: absolute;
            top: 10;
            right: 20
          }
          .p-movie {
            hyphens: auto;
            widht:400px
          }



          `}</style>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  movie : state.movie
})

export default connect(mapStateToProps)(SliderCardMovie)
