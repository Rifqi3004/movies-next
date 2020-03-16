import React from 'react'
import MenuGenre from './MenuGenre'
import {connect} from 'react-redux'
import {Grid} from '@material-ui/core'
import ListMovieGenre from './ListMovieGenre'

const Genre = (props) => {
    return (
    <Grid container spacing={5}>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
              <MenuGenre />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
              <ListMovieGenre />
          </Grid>
      </Grid>
    )
}

const mapStateToProps = (state) => ({
    movie : state.movie
})

export default connect(mapStateToProps)(Genre)
