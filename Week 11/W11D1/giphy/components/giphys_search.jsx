import React from 'react';

import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchGiphys(this.state.searchTerm);
    }

    handleChange(e) {
        this.setState({searchTerm: e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                    placeholder="Search for Giphys here..."
                    value={this.state.searchTerm}
                    onChange={this.handleChange}/>
                    <button>Search</button>
                </form>
                <GiphysIndex giphys={this.props.giphys} />
            </div>
        )
    }


}

export default GiphysSearch;