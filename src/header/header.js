import React from 'react'; 
import Title from './title/title';
import Search from './search/search';
import './header.css'

class Header extends React.Component {
    
    constructor(props){
        super(props)
    }

    render(){
        return (
            <header>
                <Title/>
                <Search handleSearch={this.props.handleSearch} handleFilter={this.props.handleFilter}/>
            </header>
        )
    }
}

export default Header; 