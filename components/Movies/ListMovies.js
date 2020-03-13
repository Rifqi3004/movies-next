import React from 'react'
import {Grid, Link, LinearProgress} from '@material-ui/core'
import CardMovie from '../CardMovie'
import PropTypes from 'prop-types';

class Component extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            genres : []
        }
    }
    render(){
        const {data, loading} = this.props
        return (
            <>
                {
                    loading ?
                    <LinearProgress style={{width : '100%'}} color="primary"/> :
                    <Grid container spacing={2}>
                        {
                            (data)&&
                                (data.length > 0) &&
                                data.map(value => (
                                    <Grid item key={value.id} xs={12} sm={12} md={6} lg={2} xl={2}>
                                        <Link color="inherit" underline="none">
                                            <CardMovie data={value} />
                                        </Link>
                                    </Grid>
                                ))
                            
                        }
                    </Grid>

                }
            </>
        )
    }
}

Component.defaultProps = {
    data : [],
    loading : false
}

Component.PropTypes = {
    data : PropTypes.array,
    loading : PropTypes.bool
}

export default Component
