import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

export default class Component extends React.Component {
  filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter(page => page <= totalPages);
  };

  _renderPage = () => {
    const { page, totalPage } = this.props;
    console.log(page, totalPage);

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
  };

  render() {
    const { classes, page } = this.props;
    const pages = this._renderPage();
    return (
      <div className={classes.root}>
        {pages.map((pg, index) => (
          <Button
            key={index}
            color={pg === page ? "primary" : "default"}
            className={classes.btnPage}
            onClick={
                () => this.props.handlePage(pg)
            }
            variant={pg === page ? "contained" : "text"}
          >
            {pg}
          </Button>
        ))}
      </div>
    );
  }
}

Component.propTypes = {
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  totalPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  classes: PropTypes.object.isRequired,
  handlePage : PropTypes.func.isRequired
};
