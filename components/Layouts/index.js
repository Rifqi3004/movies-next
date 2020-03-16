import React from 'react';
import PropTypes from 'prop-types';
import Header from './HeaderBody';
import Menu from './Menu';
import Footer from './Footer';

import {Grid, Box} from '@material-ui/core'


function Layout({ children }) {
  return (
    <Box style={{background:'#F9F9F9'}}>
      <Grid container>
        <Grid lg={2} item>
          <Menu />
        </Grid>
        <Grid lg={10} item>
          <Grid container style={{padding : 20}} spacing={5}>
            <Grid item sm={12} md={12} lg={12} justify="flex-end ">
              <Header />
            </Grid>
            <Grid item sm={12} md={12} lg={12}>
              {children }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <style jsx>{`
            .root-container {
              background: #F9F9F9;
            }
            .container {
              padding : 40px;
              background : #b1c8ed;
            }
        `}</style>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;