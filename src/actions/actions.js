import { getState } from 'statezero';

import { handleResponse, setStateByPath } from './helpers';


export const fetchWasteLookupJSON = () =>
    handleResponse(fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000'))
    .then(response =>  setStateByPath('wasteLookupList', response));

export const setSearchQuery = query => setStateByPath('searchQuery', query ? query.trim().toLowerCase(): '');

export const setQueryResults = () => {
    const [query, lookupList] = getState(['searchQuery', 'wasteLookupList']);

    let queryResults = query
    ? lookupList.filter(item => item.title.toLowerCase().includes(query) || item.keywords.toLowerCase().includes(query))
    : [];

    setStateByPath('queryResults', queryResults);
}