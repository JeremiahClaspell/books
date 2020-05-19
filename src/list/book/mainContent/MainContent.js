import React from 'react'; 

class MainContent extends React.Component {

    constructor(props){
        super(props); 
    }

    render(){



        return (
            <>
                <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt={this.props.book.volumeInfo.title} onClick={()=>this.props.onTitleClick()}/>
                <h4>{this.props.book.volumeInfo.title}</h4>
                <ul>Author: {this.props.book.volumeInfo.authors}</ul>

            </>
        )
    }
}

export default MainContent; 