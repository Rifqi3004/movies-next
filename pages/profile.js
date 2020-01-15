import React, { Component } from 'react'
import Profile from '../containers/Profile'
import Head from 'next/head'

export default class index extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Movie | Profile</title>
        </Head>
        <Profile />
      </>
    )
  }
}
