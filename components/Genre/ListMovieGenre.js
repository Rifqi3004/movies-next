import React from "react";
import { connect } from "react-redux";
import { Grid, Link } from "@material-ui/core";
import ListMovies from "../Movies/ListMovies";
import CardMovie from "../CardMovie";
import { GetMovieGenre } from "../../redux/actions/movie";
import Pagination from "../Pagination";

class ListMovieGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  _handlePage = page => {
    const { dispatch, movie } = this.props;
    dispatch(GetMovieGenre(movie.activeGenre.id, page));
  };

  render() {
    const { moviesGenre, isLoading } = this.props.movie;
    return (
      <>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <ListMovies
              loading={isLoading}
              data={
                moviesGenre &&
                moviesGenre.results &&
                moviesGenre.results.length > 0
                  ? moviesGenre.results
                  : []
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <Pagination
              page={moviesGenre && moviesGenre.page}
              totalPage={moviesGenre && moviesGenre.total_pages}
              handlePage={this._handlePage}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps)(ListMovieGenre);
