import React, {Component} from 'react';
import SearchBarComponent from '../containers/search-bar.container';
import WeatherList from '../containers/weather-list.container';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBarComponent/>
                <WeatherList />
            </div>
        );
    }
}
