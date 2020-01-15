import React from 'react'
import {connect} from 'react-redux'
import ItemMenuGenre from './ItemMenuGenre'
import {Grid, Link, Button} from '@material-ui/core'
import {GetGenre, PostActiveGenre, GetMovieGenre} from '../../redux/actions/movie'
import axios from 'axios'

var data = [1,2,3]
class MenuGenre extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            genres : []
        }
    }
    async componentDidMount(){
        await this.props.dispatch(GetGenre())
        this.props.dispatch(GetMovieGenre(this.props.movie.activeGenre.id,1))
    }
    async getMovie(genre,page){
        await this.props.dispatch(PostActiveGenre(genre))
        await this.props.dispatch(GetMovieGenre(genre.id,page))
    }
    render(){
        const {activeGenre, genre} = this.props.movie
        
        return (
            <>
                <Grid container spacing={2}>
                    {
                        (genre.length > 0) &&
                        genre.map(value => (
                            <Grid item key={value.id}>
                                <Link color="inherit" underline="none" onClick={()=>this.getMovie(value,1)}>
                                    <ItemMenuGenre title={value.name} active={(value.name === activeGenre.name)?true:false} />
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    movie : state.movie
})

export default connect(mapStateToProps)(MenuGenre)
