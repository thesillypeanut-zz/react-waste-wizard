import React from 'react';

import { BaseReactComponent } from '../base-react-component';
import { updateFavourites, updateWasteLookupList, setQueryResults } from '../../actions/actions';
import { htmlDecode } from '../../actions/helpers';

import './styles.css';


export class Favourites extends BaseReactComponent {
    filterState({ favouritesList }) {
        return { favouritesList };
    }

    render() {
        const { favouritesList } = this.state;

        if (!favouritesList || favouritesList.length === 0) {
            return null;
        }

        const items = favouritesList.map((item, index) => {
            const body = item.body.startsWith("&lt;ul&gt;")
            ? item.body
            : '&lt;ul&gt; \n &lt;li&gt;' + item.body + '&lt;\/li&gt; \n&lt;\/ul&gt;'; // eslint-disable-line

            return (
                <li key={`favourite-${index}`} className="favourites-list__grid-container">
                    <div className="favourites-list__grid-item">
                        <input
                            type="checkbox"
                            checked={item.isChecked}
                            id={item.title}
                            className="favourites-list__star-checkbox"
                            onChange={(e) => {
                                const isChecked = e.target.checked;
                                updateWasteLookupList(isChecked, item.title);
                                setQueryResults();
                                updateFavourites(isChecked, item);
                            }}
                        />
                        <label htmlFor={item.title} className="favourites-list__checkbox-label">{item.title}</label>
                    </div>
                    <div className="favourites-list__grid-item" dangerouslySetInnerHTML={{ __html: htmlDecode(body) }} />
                </li>
            )
        })

        return (
            <div className="favourites-list">
                <h1 className="favourites-list__title">Favourites</h1>
                <ul className="favourites-list__unordered-list">{items}</ul>
            </div>

        );
    }
};