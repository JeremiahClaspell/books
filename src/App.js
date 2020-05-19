import React from 'react';
import './App.css';
import Header from './header/header'; 
import List from './list/list'; 

class App extends React.Component{
  
  constructor(props){
    super(props); 

    this.state={
        books: [], 
        filter: {
          filterType: 'all', 
          filterSaleability: 'all'
        }
    }   
  }

  componentDidMount(){
    const data = fetch('https://www.googleapis.com/books/v1/volumes?q=Shakespeare&key=AIzaSyBvgPOfvWuBkXbzoZgRidHqLiMqvra2fS4&maxResults=40')
    .then(response=> response.json())
    .then(responseJson=>{
      console.log(responseJson)
      this.setState({
        books: responseJson.items
      })

    })
  }

  handleSearch(searchTerm){
    const url = `https://www.googleapis.com/books/v1/volumes?q=`; 
    const key = 'AIzaSyBvgPOfvWuBkXbzoZgRidHqLiMqvra2fS4'; 

    fetch(`${url}${searchTerm}&key=${key}&maxResults=40`).then((response)=>
      response.json()
    ).then((responseJson)=>{
      this.setState({
        books: responseJson.items
      })
    })

  }

  handleFilter(f){
    this.setState({
      filter: {filterType: f.type, 
              filterSaleability: f.saleability
      }
    }) 
  }

  render(){
    
    return (
      <div className="app">
        <Header handleSearch={(searchTerm)=>this.handleSearch(searchTerm)} handleFilter={(f)=>this.handleFilter(f)}/>
        <List books={this.state.books} filter={this.state.filter}/>
      </div>
    );
  }

}


export default App;


//app
// header                                    list of books
//heading searchbar                           book
//        searchBox filter                    default info  optional info



//only list books matching search result
//filter by book type and book price
//allow user to click into book to see more info