import React from 'react'; 
import SearchBar from './searchComponents/searchBox'; 
import Filter from './searchComponents/filter'; 

class Search extends React.Component {

    constructor(props){
        super(props); 
    }

    render(){
        return (
            <div>
                <SearchBar handleSearch={this.props.handleSearch}/>
                <Filter handleFilter={this.props.handleFilter}/>
            </div>
        )
    }
}

export default Search