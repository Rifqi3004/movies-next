import React, { Component } from 'react'
import Layout from '../../components/Layouts'
import { connect } from 'react-redux'
import Slider from '../../components/Slider'
import Span from '../../components/Span'
import Genre from '../../components/Genre'
import Login from '../../components/Auth/Login'
import { Grid, Button } from '@material-ui/core';
import {logout} from '../../redux/actions/auth'
class Profile extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {token, isAuth, profile} = this.props.auth
        return (
            <Layout>
                <Span title="Profile">
                    {
                        (isAuth && token !== '') ? 
                        <Grid>
                            <p>Your Login</p>
                            <Button color="primary" variant="contained" onClick={()=>this.props.dispatch(logout())}>Logout</Button>
                        </Grid> 
                        :
                        <Login />
                    }
                </Span>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    auth : state.auth
  })
  

export default connect(mapStateToProps)(Profile)
