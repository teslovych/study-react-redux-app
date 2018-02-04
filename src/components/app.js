import React, {Component} from 'react';
import BooksList from '../containers/books-list.container';
import ActiveBook from '../containers/active-book.container';

export default class App extends Component {
    render() {
        return (
            <div>
                <BooksList/>
                <ActiveBook/>
            </div>
        );
    }
}
