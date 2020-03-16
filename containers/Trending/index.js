import React, { Component } from "react";
import Layout from "../../components/Layouts";
import { connect } from "react-redux";
import Span from "../../components/Span";
import ListMovies from "../../components/Movies/ListMovies";
import { GetTrendingMovie, GetGenre } from "../../redux/actions/movie";
import Pagination from "../../components/Pagination";
import { Grid } from "@material-ui/core";

class Home extends Component {
  constructor() {
    super();
    this.state = {
        time : 'week'
    }
  }
  async componentDidMount() {
    await this.props.dispatch(GetGenre());
    this.props.dispatch(GetTrendingMovie());
  }

  _handlePage = (page) => {
    const {time} = this.state
    this.props.dispatch(GetTrendingMovie(time,page));
  }

  render() {
    const { isLoading, trendingMovies } = this.props.movie;
    return (
      <Layout>
        <Span title="Trending on the week">
          <Grid container>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
              <ListMovies
                loading={isLoading}
                data={
                  trendingMovies &&
                  trendingMovies.results &&
                  trendingMovies.results.length > 0
                    ? trendingMovies.results
                    : []
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
              <Pagination
                page={trendingMovies && trendingMovies.page}
                totalPage={trendingMovies && trendingMovies.total_pages}
                handlePage={this._handlePage}
              />
            </Grid>
          </Grid>
        </Span>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  movie: state.movie
});

export default connect(mapStateToProps)(Home);
