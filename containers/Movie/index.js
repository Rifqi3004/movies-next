import React, { Component } from 'react'
import Layout from '../../components/Layouts'
import { connect } from 'react-redux'
import Span from '../../components/Span'

class Movie extends Component {
    render() {
        return (
            <Layout>
                <Span title={this.props.movieId}>
                    <h1>oke</h1>
                </Span>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    auth : state.auth
  })
  

export default connect(mapStateToProps)(Movie)
