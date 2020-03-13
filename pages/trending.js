import React, { Component } from 'react'
import Trending from '../containers/Trending'
import Head from 'next/head'

export default class index extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Movie | Trending</title>
        </Head>
        <Trending />
      </>
    )
  }
}
