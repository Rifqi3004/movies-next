import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {Fab} from '@material-ui/core'
import colors from '../../tools/colors'

const ItemMenuGenre = ({active, title}) => {
    return (
        <>
            {
                (active)?
                (
                     <Fab size="small" variant="extended" style={{ background : colors.yellow1 }}><h1 className="titleBtnGenre">{title || 'Genre'}</h1></Fab>
                ):
                (
                    <Fab size="small" variant="extended" color="inherit"><h1 className="titleBtnGenre">{title || 'Genre'}</h1></Fab>
                )
            }
             <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap');
            .titleBtnGenre {
                font-family: Poppins;
                font-size: 12px;
                font-weight: bold;
                color:${colors.blackPrimary}
            }

        `}</style>
        </>
    )
}

ItemMenuGenre.propTypes = {
    active : PropTypes.bool,
    title : PropTypes.string
}

export default ItemMenuGenre
