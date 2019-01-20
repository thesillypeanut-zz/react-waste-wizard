import set from 'lodash-es/set';
import unset from 'lodash-es/unset';
import { action } from 'statezero';


export const clearState = action(({ commit }) => {
  commit({});
});

export const setStateByPath = action(({ commit, state }, path, value) => {
  set(state, path, value);
  commit(state);
});

export const unsetStateByPath = action(({ commit, state }, ...paths) => {
  for (const path of paths) {
    unset(state, path);
  }
  commit(state);
});
