import React from 'react';

import { AppHeader } from '../app-header';
import { BaseReactComponent } from '../base-react-component';
import { SearchBar } from '../search-bar';
import { SearchResults } from '../search-results';

import './styles.css';


export default class App extends BaseReactComponent {
  filterState() {
    return {};
  }

  render() {
    return (
      <div>
        <AppHeader />
        <section className="app__container">
          <SearchBar />
          <SearchResults />
        </section>
      </div>
    );
  }
};
