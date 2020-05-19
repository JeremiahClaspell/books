import React from 'react'; 

class SearchBox extends React.Component {

    constructor(props){
        super(props);  
    }

    static searchTerm = null; 

    searchForm(e){
        e.preventDefault(); 
        this.props.handleSearch(this.searchTerm)
    }

    handleSearchValue(val){
        this.searchTerm = val; 
    }

    render(){
        return (
            <form onSubmit={(e)=>this.searchForm(e)}>
                <label htmlFor="searchBox">Search:</label>
                <input id="searchBox" name="searchBox" type="text" placeholder="search books" onChange={(e)=>this.handleSearchValue(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBox; 