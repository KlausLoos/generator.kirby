export function setState(){
  return {
    type: 'SET_STATE',
    filters: []
  }
}

export function getRecordsSuccess(records) {
  return {
    type: 'GET_RECORDS_SUCCESS',
    records
  };
}

export function changeFilter(group, value, status) {
  console.log(group, value, status);
  return {
    type: 'CHANGE_FILTER',
    group,
    value,
    status
  }
}