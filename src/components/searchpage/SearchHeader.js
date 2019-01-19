import React, { Component } from 'react';
import { getMovies } from '../../store/actions/MoviesActions';
import { connect } from 'react-redux';

 class SearchHeader extends Component {

    state = {
        title: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getMovies(this.state.title);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    </label>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (data) => dispatch(getMovies(data))
    }
}

export default connect(null, mapDispatchToProps)(SearchHeader);