import { db } from '../utilities/firebase';

const READ_DB = 'READ_DB';

const defaultState = {};

const readDB = (field, data) => ({ type: READ_DB, data, field });

export const willReadDB = field => async dispatch => {
  try {
    console.log(field);

    const collection = db.collection('properties');
    const collection2 = db.collection('development');
    const data = await collection.get().then(snapshots => {
      const dataArr = [];
      snapshots.forEach(snapshot => dataArr.push(snapshot.data()));
      return dataArr;
    });
    const data2 = await collection2.get().then(snapshots => {
      const dataArr = [];
      snapshots.forEach(snapshot => dataArr.push(snapshot.data()));
      return dataArr;
    });
    dispatch(readDB('holdings', { properties: data, developments: data2 }));
  } catch (err) {
    console.error(err);
  }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case READ_DB:
      return { ...state, [action.field]: action.data };
    default:
      return state;
  }
}
