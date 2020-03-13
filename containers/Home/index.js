import React, { Component } from 'react'
import Layout from '../../components/Layouts'
import { connect } from 'react-redux'
import Slider from '../../components/Slider'
import Span from '../../components/Span'
import Genre from '../../components/Genre'

class Home extends Component {
    render() {
        return (
            <Layout>
                <Span title="Now Showing">
                    <Slider />
                </Span>
                <Span title="Browse By Genre">
                    <Genre />
                </Span>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    auth : state.auth
  })
  

export default connect(mapStateToProps)(Home)
