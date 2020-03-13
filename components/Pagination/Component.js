import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';

export default class Component extends React.Component {
    

    filterPages = (visiblePages, totalPages) => {
        return visiblePages.filter(page => page <= totalPages);
    };



    _renderPage = () => {
        const { page, totalPage } = this.props;
        
        if (totalPage < 7) {
            return this.filterPages([1, 2, 3, 4, 5, 6], totalPage);
        } else {
            if (page % 5 >= 0 && page > 4 && page + 2 < totalPage) {
                return [1, page - 1, page, page + 1, totalPage];
            } else if (page % 5 >= 0 && page > 4 && page + 2 >= totalPage) {
                return [1, totalpage - 3, totalPage - 2, totalPage - 1, totalPage];
            } else {
                return [1, 2, 3, 4, 5, totalPage];
            }
        }

    }

    render() {
        const { classes } = this.props;
        console.log(this.props)
        return (
            <div className={classes.root}>
                {this._renderPage()}
            </div>
        )
    }
}

Component.defaultProps = {
    page : 1,
    totalPage : 1
}

Component.propTypes = {
    page : PropTypes.number,
    totalPage : PropTypes.number,
    classes : PropTypes.object
}
