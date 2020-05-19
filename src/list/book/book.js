import React from 'react'; 
import OptionalContent from './optionalContent/OptionalContent'; 
import MainContent from './mainContent/MainContent'; 

class Book extends React.Component {

    constructor(props){
        super(props); 
        this.state={
            hidden: true, 
        }
    }

    onTitleClick(){
        if(this.state.hidden === true){
            this.setState({
                hidden: false
            })
        } else{
            this.setState({
                hidden: true
            })
        }
    }

    render(){
        return (
            <li>
                <MainContent book={this.props.book} onTitleClick={()=>this.onTitleClick()}/>
                {this.state.hidden===false && <OptionalContent book={this.props.book}/>}
            </li>
        )
    }
}

export default Book; 