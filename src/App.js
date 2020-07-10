import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import Display from './Display';

export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          text: '',
          items: [],
          toggle: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  getBook(){
      axios.request({
          method: 'get',
          url: `https://www.googleapis.com/books/v1/volumes?q=${this.state.text}&key=AIzaSyC1eqYmoHCSHBy40V6bFTGoj9DL0S7A1cE`
          //https://www.googleapis.com/books/v1/volumes?q=intitle:${this.state.text}&key=AIzaSyC1eqYmoHCSHBy40V6bFTGoj9DL0S7A1cE`
      }).then((response) => {
          // console.log(response.data);
          // console.log(response.data.items)
          this.setState({
              items: response.data.items,
              toggle: true
          })
          // console.log(response.data.items[1].selfLink)
      }).catch((error) => {
          console.log(error);
      });
  }
  handleSubmit(evt){
      evt.preventDefault();
      this.getBook();
  }
  async handleChange(evt){
      evt.preventDefault();
      await this.setState({
          text: evt.target.value
      })
      // console.log(this.state.text);
  }
  render() {
    return (
      <div className ='Display'>
        <h1>Book Search</h1>
        <form className='inputBox' onSubmit={this.handleSubmit}>
          <input
          value={this.state.text}
          onChange={this.handleChange}
          name='text'
          type='text'
          />
          <button>Search</button>
        </form>
          <Display books={this.state.items}/>
      </div>
    )
  }
}

