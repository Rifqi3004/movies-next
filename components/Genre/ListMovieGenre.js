import React from 'react'
import {connect} from 'react-redux'
import {Grid, Link, LinearProgress} from '@material-ui/core'
import {GetGenre, PostActiveGenre} from '../../redux/actions/movie'
import CardMovie from '../CardMovie'
import {GetMovieGenre} from '../../redux/actions/movie'


var data = [1,2,3]
class ListMovieGenre extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            genres : []
        }
    }
    render(){
        const {moviesGenre, genre, isLoading} = this.props.movie
        return (
            <>
                {
                    isLoading ?
                    <LinearProgress style={{width : '100%'}} color="primary"/> :
                    <Grid container spacing={2}>
                        {
                            (moviesGenre !== '')&&
                                (moviesGenre.results.length > 0) &&
                                moviesGenre.results.map(value => (
                                    <Grid item key={value.id} xs={12} sm={12} md={6} lg={2} xl={2}>
                                        <Link color="inherit" underline="none">
                                            <CardMovie data={value} />
                                        </Link>
                                    </Grid>
                                ))
                            
                        }
                    </Grid>

                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    movie : state.movie
})

export default connect(mapStateToProps)(ListMovieGenre)
