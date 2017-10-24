import * as types from '../actionTypes'

const homeActionCreator = {
  loadAllProperties() {
    return dispatch => {
      const url = '/properties/';
      const options = {
        headers: {accept: 'application/json'}
      }

      fetch(url, options)
          .then((payloadObj) => {
              return payloadObj.json()
          })
          .then(data => {
            dispatch({
            type: types.LOAD_PROPERTIES,
            data,
          });
          })
          .catch((err) => {
             console.log(`Http Error`, err)
          });

    }
  },
  loadAllOwners() {
    return dispatch => {
      const url = '/owners/';
      const options = {
        headers: {accept: 'application/json'}
      }

      fetch(url, options)
          .then((payloadObj) => {
              return payloadObj.json()
          })
          .then(data => {
            dispatch({
            type: types.LOAD_OWNERS,
            data,
          });
          })
          .catch((err) => {
             console.log(`Http Error`, err)
          });

    }
  },
}

export default homeActionCreator;
