import cloneDeep from 'lodash-es/cloneDeep';
import { getState } from 'statezero';

import { handleResponse, setStateByPath } from './helpers';


export const fetchWasteLookupJSON = () =>
    handleResponse(fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000'))
        .then((response) => {
            response = response.map((item) => {
                item['isChecked'] = false;
                return item;
            });
            setStateByPath('wasteLookupList', response);
        });

export const setSearchQuery = query => setStateByPath('searchQuery', query ? query.trim().toLowerCase() : '');

export const setQueryResults = () => {
    const [query, lookupList] = getState(['searchQuery', 'wasteLookupList']);

    let queryResults = query
        ? lookupList.filter(item => item.title.toLowerCase().includes(query) || item.keywords.toLowerCase().includes(query))
        : [];

    setStateByPath('queryResults', queryResults);
}

export const updateWasteLookupList = (isChecked, title) => {
    const lookupList = cloneDeep(getState('wasteLookupList'));
    const itemIndex = lookupList.findIndex((item => item.title === title));
    lookupList[itemIndex].isChecked = isChecked;
    setStateByPath('wasteLookupList', lookupList);
};

export const updateFavourites = (isChecked, item) => {
    let favourites = getState('favouritesList') ? cloneDeep(getState('favouritesList')) : [];
    item = cloneDeep(item);
    if (isChecked) {
        item.isChecked = isChecked;
        favourites.push(item);
    } else {
        favourites = favourites.filter(fav => fav.title !== item.title);
    }

    setStateByPath('favouritesList', favourites);
};