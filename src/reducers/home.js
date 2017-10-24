const initialState = {
  properties: [],
  owners: [],
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PROPERTIES':
     return Object.assign({}, state, {
        properties: action.data.properties,
      });
    case 'LOAD_OWNERS':
     return Object.assign({}, state, {
        owners: action.data.owners,
      });
    default:
      return state;
  }
}

export default home
