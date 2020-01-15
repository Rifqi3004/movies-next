import React, { Component } from 'react'
import Layout from '../../components/Layouts'
import { connect } from 'react-redux'
import Span from '../../components/Span'
import ListMovieTrending from '../../components/Movies/ListTrendingMovies'
import {GetTrendingMovie, GetGenre} from '../../redux/actions/movie'

class Home extends Component {
    constructor(){
        super()
    }
    async componentDidMount(){
        await this.props.dispatch(GetGenre())
        this.props.dispatch(GetTrendingMovie())
    }
    render() {
        return (
            <Layout>
                <Span title="Trending on the week">
                    <ListMovieTrending />
                </Span>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    auth : state.auth
  })
  

export default connect(mapStateToProps)(Home)
