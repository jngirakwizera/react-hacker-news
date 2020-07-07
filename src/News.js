import React, {Component} from 'react';


class News extends Component {
  constructor(props) {
    super(props);
   
}

    render() {
        let data = this.props.data;
        let title = data.title;
        if(!title){
            title = "";
        }
        let author = data.author;
        if(!author){
            author = "";
        }
        let text = data.story_text;
        if(!text){
            text = "";
        }
       
      return (
        <div>
  
            <div>Title: {title}</div>
            <div>Author: {author}</div>
            <div>Story: {text}</div>
          <hr></hr>

        </div>
            
      )
    }
  }

export default News;