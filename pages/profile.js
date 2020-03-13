import React, { Component } from 'react'
import Profile from '../containers/Profile'
import Head from 'next/head'

export default class index extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Movie | Profile</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
        </Head>
        <Profile />
      </>
    )
  }
}
