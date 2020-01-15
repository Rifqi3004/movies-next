import React from 'react'
import {connect} from 'react-redux'
import {Grid, Link, LinearProgress} from '@material-ui/core'
import CardMovie from '../CardMovie'

class ListTrendingMovie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            genres : []
        }
    }
    render(){
        const {trendingMovies, isLoading} = this.props.movie
        return (
            <>
                {
                    isLoading ?
                    <LinearProgress style={{width : '100%'}} color="primary"/> :
                    <Grid container spacing={2}>
                        {
                            (trendingMovies.results)&&
                                (trendingMovies.results.length > 0) &&
                                trendingMovies.results.map(value => (
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

export default connect(mapStateToProps)(ListTrendingMovie)
