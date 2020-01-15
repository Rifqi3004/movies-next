import React from 'react'
import {connect} from 'react-redux'
import {Grid, Card, CardHeader, CardContent ,Button} from '@material-ui/core'
import {GetGenre, PostActiveGenre, GetMovieGenre} from '../../redux/actions/movie'
import axios from 'axios'
import colors from '../../tools/colors';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Alert, AlertTitle } from '@material-ui/lab';
import {AUTH_GET_REQ_TOKEN, AUTH_GET_SESSION_TOKEN, AUTH_VALIDATE_LOGIN} from '../../redux/constan/api'
import {saveSessionToken} from '../../redux/actions/auth'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            openError : false,
            errorMessage : '',
            loading : false
        }
    }
    render(){
        return (
            <>
               <div className="login">
                <div className="card-login">
                    <div className="card-header">
                        <h4 className="head-login">Login ke {process.env.APP_NAME}</h4>
                        <Alert severity="error" style={{display : (this.state.openError)?'block':'none'}}>
                            <AlertTitle>Error</AlertTitle>
                            {this.state.errorMessage}
                        </Alert>
                    </div>
                    <div className="">
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                this.setState({
                                    loading : true
                                })
                                axios.get(process.env.MOVIE_API+AUTH_GET_REQ_TOKEN+'?api_key='+process.env.API_KEY)
                                .then((access) => {
                                    const accessToken = access.data.request_token
                                    const dataLogin = {
                                        "username" : values.username,
                                        "password" : values.password,
                                        "request_token" : accessToken
                                    }
                                    axios.post(process.env.MOVIE_API+AUTH_VALIDATE_LOGIN+'?api_key='+process.env.API_KEY, dataLogin, {
                                        headers : {
                                            'Content-Type' : 'application/json'
                                        }
                                    })
                                    .then(() => {
                                        axios.post(process.env.MOVIE_API+AUTH_GET_SESSION_TOKEN+'?api_key='+process.env.API_KEY, {
                                            request_token : accessToken
                                        }, {
                                            headers : {
                                                'Content-Type' : 'application/json'
                                            }
                                        })
                                        .then(async (session) => {
                                            await this.props.dispatch(saveSessionToken({
                                                token : session.data.session_id
                                            }))
                                            setSubmitting(false)
                                            this.setState({
                                                openError : false,
                                                loading : false
                                            })
                                        }).catch((err1) => {
                                            if(err1.request){
                                                console.log(err1.request)
                                            }
                                            if(err1.response){
                                                console.log(err1.response)
                                            }
                                            this.setState({
                                                openError : true,
                                                errorMessage : 'Something Wrong !',
                                                loading : false
                                            })
                                        })
                                    }).catch((err0) => {
                                        if(err0.request){
                                            this.setState({
                                                openError : true,
                                                errorMessage : err0.request.data.status_message,
                                                loading : false
                                            })
                                        }
                                        if(err0.response){
                                            console.log(err0.response)
                                            this.setState({
                                                openError : true,
                                                errorMessage : err0.response.data.status_message,
                                                loading : false
                                            })
                                        }
                                    })
                                }).catch(() => {
                                    this.setState({
                                        openError : true,
                                        errorMessage : 'Something Wrong !',
                                        loading : false
                                    })
                                })
                            }}
                            >
                            {({ 
                                 values,
                                 errors,
                                 touched,
                                 handleChange,
                                 handleBlur,
                                 handleSubmit,
                                 isSubmitting,
                             }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form">
                                        <div className="div-field">
                                            <div className="row">
                                                <div className="input-field col s12" style={{width:350}}>
                                                    <input 
                                                        id="username" 
                                                        type="text" 
                                                        className="validate" 
                                                        name="username" 
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        style={{width:350}}
                                                        />
                                                    <label for="username">Username</label>
                                                    <span className="helper-text" data-error={errors.username && touched.username && errors.username} ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="div-field">
                                            <div className="row">
                                                <div className="input-field col s12 field" style={{width:350}}>
                                                    <input
                                                        id="password" 
                                                        type="password" 
                                                        className="validate" 
                                                        name="password" 
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        style={{width:350}}
                                                    />
                                                    <label for="password">Password</label>
                                                    <span className="helper-text" data-error={errors.password && touched.password && errors.password}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button variant="contained" style={{width : 300, background : (this.state.loading)?colors.blue1:colors.blue2}} 
                                            disabled={this.state.loading} type="submit"
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
               </div>
               <style jsx>{`
                    .login {
                        display:flex;
                        justify-content: center;
                    }
                    .card-login {
                        width: 500px;
                        display: flex;
                        flex-direction: column;
                        background: #ffffff;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                        transition: 0.3s;
                        position: abosulute;
                        top: 50%;
                        left: 50%;
                        min-height:500px;
                        max-height: 750px;
                        padding-bottom : 50px;
                    }
                    .card-login:hover {
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                    }

                    .head-login {
                        font-family: Poppins;
                        font-size: 16px;
                        font-color: ${colors.blackPrimary};
                        text-align: center;
                        font-weight: 400;
                    }
                    .form {
                        display: flex;
                        flex-direction: column;
                        margin-top : 50px;
                        align-items:center;
                    }
                    .div-field {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 20px;
                        width: 350px;
                    }

               `}</style>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    auth : state.auth
})

export default connect(mapStateToProps)(Login)
