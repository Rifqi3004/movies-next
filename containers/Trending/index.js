import React, { Component } from 'react'
import Layout from '../../components/Layouts'
import { connect } from 'react-redux'
import Span from '../../components/Span'
import ListMovies from '../../components/Movies/ListMovies'
import {GetTrendingMovie, GetGenre} from '../../redux/actions/movie'
import Pagination from '../../components/Pagination'

class Home extends Component {
    constructor(){
        super()
    }
    async componentDidMount(){
        await this.props.dispatch(GetGenre())
        this.props.dispatch(GetTrendingMovie())
    }
    render() {
        const { isLoading, trendingMovies } = this.props.movie;
        return (
            <Layout>
                <Span title="Trending on the week">
                    <ListMovies
                        loading={isLoading}
                        data={trendingMovies && trendingMovies.results && trendingMovies.results.length > 0  ? trendingMovies.results : []}
                    /> 
                    <Pagination 
                        page = { trendingMovies && trendingMovies.page }
                        totalPage = { trendingMovies && trendingMovies.total_pages }    
                    /> 
                </Span>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    auth : state.auth,
    movie : state.movie
  })
  

export default connect(mapStateToProps)(Home)
