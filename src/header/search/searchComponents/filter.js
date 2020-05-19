import React from 'react'; 

const filters = {
    type: 'all', 
    saleability: 'all'
}

class Filter extends React.Component {

    constructor(props){
        super(props); 
    }


    saleabilityFilter(e){
        filters.saleability = e;
        this.props.handleFilter(filters); 
    }

    typeFilter(e){
        if(e==="True"){
            e=true
        } else if(e==="False"){
            e=false
        }
        filters.type = e; 
        this.props.handleFilter(filters); 
    }

    render(){
        return (
            <form>
                <label htmlFor="type">Print Type: </label>
                <select name="type" id="type" onChange={(e)=>this.typeFilter(e.target.value)}>
                    <option value="all">all</option>
                    <option value="True">Ebook</option>
                    <option value="False">Paper</option>
                </select>
                <label htmlFor="bookType">Saleability:</label>
                <select id="bookType" name="bookType" onChange={(e)=>this.saleabilityFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="FOR_SALE">For Sale</option>
                    <option value="NOT_FOR_SALE">Not For Sale</option>
                </select>
            </form>
        )
    }
}

export default Filter; 