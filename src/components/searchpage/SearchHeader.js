import React, { Component } from 'react';
import { getMovies } from '../../store/actions/MoviesActions';
import { connect } from 'react-redux';

import './SearchHeaderStyle.css';

 class SearchHeader extends Component {

    state = {
        title: "",
        error: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.validate()){
            this.props.getMovies(this.state.title);
        }
    }

    // there are plenty of ways to validate the forms, I choose this one real quick for this application.
    validate = () => {
        if(this.state.title.length >= 3){
            this.setState({error: ""});
            return true;
        } else {
            this.setState({error: "Search must contain at least 3 characters."});
            return false;
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div className="search-header">
                <form onSubmit={this.handleSubmit}>
                    <label style={{color: "red"}}>
                        {this.state.error}
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
        getMovies: (data) => dispatch(getMovies(data)),
    }
}

export default connect(null, mapDispatchToProps)(SearchHeader);