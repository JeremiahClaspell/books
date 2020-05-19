import React from 'react'; 
import Book from './book/book'; 

class List extends React.Component {

    constructor(props){
        super(props); 
    }
    
    render(){
        const book = this.props.books.filter((book)=>{
            console.log(book.saleInfo.isEbook)
            return (
                ((this.props.filter.filterSaleability === book.saleInfo.saleability)||this.props.filter.filterSaleability ==="all")
                && ((this.props.filter.filterType == book.saleInfo.isEbook)||this.props.filter.filterType ==="all" )? book: null
            )
        }).map((book)=>{
           return <Book book={book} key={book.id}/>
        })

        return (
            <ul>
                {book}
            </ul>
        )
    }
}

export default List; 