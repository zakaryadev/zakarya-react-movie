import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";
export default class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=5a5e0322&s=Avengers")
            .then(responese => responese.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=5a5e0322&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(responese => responese.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch(err=> console.log(err))
    }

    render() {
        return (

            <div className="container content">
                <Search searchMovie={this.searchMovies} />
                {!this.state.loading ? (
                    <Movies movies = {this.state.movies} />
                )
                :
                    (
                        <Loader />
                    )
                }
            </div>
        );
    }
}