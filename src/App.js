import React from 'react';

import { AppHeader } from './react-components/app-header';
import { BaseReactComponent } from './react-components/base-react-component';
import { Favourites } from './react-components/favourites';
import { SearchBar } from './react-components/search-bar';
import { SearchResults } from './react-components/search-results';

import './App.css';


export default class App extends BaseReactComponent {
  filterState() {
    return {};
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <section className="app__container">
          <div className="app__search">
            <SearchBar />
            <SearchResults />
          </div>
          <Favourites />
        </section>
      </div>
    );
  }
};
