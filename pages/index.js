import React, { Component } from 'react'
import Home from '../containers/Home'
import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class index extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Movie | Beranda</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </Head>
        <Home />
      </>
    )
  }
}
