import React from 'react';
import PropTypes from 'prop-types';

import {Grid, Container} from '@material-ui/core'
import colors from '../../tools/colors'


function Layout({ children, title }) {
  return (
    <Container style={{background:'#F9F9F9', marginBottom : 30}}>
      <Grid container spacing={5}>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
              <h1 className="titleSpan">{title || 'Title'}</h1>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
              {children}
          </Grid>
      </Grid>
      
      <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap');
            .titleSpan {
                font-family: Poppins;
                font-size: 16px;
                font-weight: 700;
                color:${colors.blackPrimary};
                marginBottom : 20px;
            }

        `}</style>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Layout;