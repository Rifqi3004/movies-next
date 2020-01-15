import React, { Component } from 'react'
import Home from '../containers/Home'
import Head from 'next/head'

export default class index extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Movie | Beranda</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.2.0/css/swiper.css" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.2.0/css/swiper.min.css" rel="stylesheet" />
          <script src="https://unpkg.com/react-id-swiper@2.4.0/lib/react-id-swiper.js"></script>
          <script src="https://unpkg.com/react-id-swiper@2.4.0/lib/react-id-swiper.min.js"></script>
        </Head>
        <Home />
      </>
    )
  }
}
