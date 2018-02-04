import React, { Component } from 'react';
import BooksList from '../containers/books-list.component';

export default class App extends Component {
  render() {
    return (
        <div>
          <BooksList />
        </div>
    );
  }
}
