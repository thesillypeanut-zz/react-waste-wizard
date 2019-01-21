import React from 'react';

import { AppHeader } from '../app-header';
import { BaseReactComponent } from '../base-react-component';
import { Favourites } from '../favourites';
import { SearchBar } from '../search-bar';
import { SearchResults } from '../search-results';

import './styles.css';


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
