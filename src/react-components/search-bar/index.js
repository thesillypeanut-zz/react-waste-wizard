import React from 'react';

import { setSearchQuery, setQueryResults } from '../../actions/actions';

import './styles.css';


export const SearchBar = () => {
    const setSearchQueryOnChange = e => setSearchQuery(e.target.value);
    const setQueryResultsOnSubmit = (e) => {
        e.preventDefault();
        setQueryResults();
    };
    
    return (
        <form onSubmit={setQueryResultsOnSubmit} className="search-bar">
            <input className='search-bar__input' onChange={setSearchQueryOnChange}/>
            <button className='search-bar__button' type="submit"/>
        </form>
    )
};
