import {List, Map} from 'immutable';

const setState = (state, newState) => {
  return state.merge(newState);
}

const changeFilter = (state, action) => {
  const indexFilter = state.get('filters').findIndex(
      (filter) => filter.get('value') == action.value && filter.get('group') == action.group);

  if(indexFilter != -1){
    const updatedFilter = Map(state.get('filters')
      .get(indexFilter))
      .update('status', status => status === true ? false : true)
    return state.update('filters', (filters) => filters.set(indexFilter, updatedFilter));
  }else{
    return state.update('filters', (filters) => filters.push(Map(action)));
  }

}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action);
    case 'GET_RECORDS_SUCCESS':
      return setState(state, action);
    case 'CHANGE_FILTER':
      return changeFilter(state, action);
  }
  return state;
}