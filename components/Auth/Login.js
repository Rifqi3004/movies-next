import React from 'react'
import {connect} from 'react-redux'
import {Grid, Card, CardHeader, CardContent ,Button} from '@material-ui/core'
import {GetGenre, PostActiveGenre, GetMovieGenre} from '../../redux/actions/movie'
import axios from 'axios'
import colors from '../../tools/colors';
import {Formik, Form, Field, ErrorMessage} from 'formik'

const Login = () => {
        return (
            <>
               <div className="login">
                <div className="card-login">
                    <div className="card-header">
                        <h4 className="head-login">Login ke {process.env.APP_NAME}</h4>
                    </div>
                    <div className="">
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values)
                                setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                }, 400);
                            }}
                            >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="form">
                                        <div className="div-field">
                                            <Field name="username" style={{  }}/>
                                            <ErrorMessage name="username" component="div" />
                                        </div>
                                        <div className="div-field">
                                            <Field type="password" name="password" />
                                            <ErrorMessage name="password" component="div" />
                                        </div>
                                        <Button variant="contained" style={{width : 200}} color="primary" disabled={isSubmitting} type="submit">Login</Button>
                                    </div>
                                </Form>
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
                        height:500px;
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
                        justify-content: center;
                        align-items:center
                    }
                    .div-field {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 25px;
                    }

               `}</style>
            </>
        )
}
const mapStateToProps = (state) => ({
    auth : state.auth
})

export default connect(mapStateToProps)(Login)
