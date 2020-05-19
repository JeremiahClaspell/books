import React from 'react'; 

class OptionalContent extends React.Component {

    constructor(props){
        super(props); 
    }

    render(){
        return (
            <div>
                <p>Is eBook: {this.props.book.saleInfo.isEbook? "Yes": "No"}</p>
                <p>Saleability: {this.props.book.saleInfo.saleability}</p>
            </div>
        )
    }
}

export default OptionalContent; 