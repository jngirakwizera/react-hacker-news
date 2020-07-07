import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        news: [],
        query: "",
    }
}
 

componentDidMount() {
  this.loadNews();
}

onChange = e => {
  this.setState({
    query: e.target.value
  });
  this.loadNews();
}

  loadNews = async () => {

    this.setState({
        news: []
    });

    const response = await fetch("https://hn.algolia.com/api/v1/search_by_date?query=" + this.state.query);

    const data = await response.json();
  

    this.setState({
        news: data.hits
    });

}
render() {
  return (
    <div className="App">
      <header className="App-header">
      <input value={this.state.query}  onChange={this.onChange}/>
        {this.state.news.map((data, index) => (
              <News key={index} index={index} data={data}/>
          ))}
      </header>
    </div>
  );
}

}



export default App;