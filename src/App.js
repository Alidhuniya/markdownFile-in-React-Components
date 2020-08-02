import React from 'react';
// import logo from './logo.svg';
import AppMarkdown from "./readme/README.md";
import './App.css';
import marked from "marked"; 
import ReactMarkdown from 'react-markdown';

/*
Note: Below are the example of rendering markdown file using marked and react-markdown package. marked package is commented because 
dangerousSetInnerHTMl is just like innerHTML which can expose xss attack on website especially when using on user input like search query, or with dynamic data which change based on user action like product page on ecommerce shop

You can prevent xss attack with dangerously setInner HTML with sanitizing(clean before render on DOM) package like dompufy
this article covers sanitizing topic(https://dev.to/jam3/how-to-prevent-xss-attacks-when-using-dangerouslysetinnerhtml-in-react-1464) As far as possible avoid using dangerous set Inner HTML, if you're using makes sure you sanitize before render on dom on client side and server side both

*/


// class App extends React.Component {  // this one is by using marked package

//   constructor() {
//     super();
//     this.state = { markdown: '' };
//   }

//   componentDidMount() {
//     const readmePath = require("./readme/README.md");
  
//     fetch(readmePath)
//       .then(response => {
//         return response.text()
//       })
//       .then(text => {
//         this.setState({
//           markdown: marked(text)
//         })
//       })
//   }

  
//   render() {
//     const { markdown } = this.state;
  
//     return (
//       <section>
//         <article dangerouslySetInnerHTML={{__html: markdown}}></article>
//       </section>
//     )
//   }
// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { markdown: '' };
   
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }


  render() {
    const { markdown } = this.state;
    return <ReactMarkdown className="section" source={markdown} escapeHtml={false}/>;
  }
}

export default App;


