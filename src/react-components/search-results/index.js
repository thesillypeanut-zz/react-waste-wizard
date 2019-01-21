import React from 'react';

import { BaseReactComponent } from '../base-react-component';
import { updateFavourites, updateWasteLookupList, setQueryResults } from '../../actions/actions';
import { htmlDecode } from '../../actions/helpers';

import './styles.css';


export class SearchResults extends BaseReactComponent {
    filterState({ queryResults }) {
        return { queryResults };
    }

    render() {
        const { queryResults } = this.state;

        if (!queryResults) {
            return null;
        }

        const items = queryResults.map((result, index) => {
            const body = result.body.startsWith("&lt;ul&gt;")
            ? result.body
            : '&lt;ul&gt; \n &lt;li&gt;' + result.body + '&lt;\/li&gt; \n&lt;\/ul&gt;';

            return (
                <li key={`search-result-${index}`} className="search-results__grid-container">
                    <div className="search-results__grid-item">
                        <input
                            type="checkbox"
                            checked={result.isChecked}
                            id={result.title}
                            className="search-results__star-checkbox"
                            onChange={(e) => {
                                const isChecked = e.target.checked;
                                updateWasteLookupList(isChecked, result.title);
                                setQueryResults();
                                updateFavourites(isChecked, result);
                            }}
                        />
                        <label htmlFor={result.title} className="search-results__checkbox-label">{result.title}</label>
                    </div>
                    <div className="search-results__grid-item" dangerouslySetInnerHTML={{ __html: htmlDecode(body) }} />
                </li>
            )
        })

        return (
            <section>
                <ul className="search-results__unordered-list">{items}</ul>
            </section>

        );
    }
};