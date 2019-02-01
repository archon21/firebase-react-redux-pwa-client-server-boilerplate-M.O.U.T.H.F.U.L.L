import { db } from '../utilities/firebase';

const READ_DB = 'READ_DB';

const defaultState = { menu: [], specials: [] };

const readDB = (field, data) => ({ type: READ_DB, data, field });

export const willReadDB = field => async dispatch => {
  try {
    console.log(field);
    const collection = db.collection(field);
    const data = await collection.get().then(snapshots => {
      const dataArr = [];
      snapshots.forEach(snapshot => dataArr.push(snapshot.data()));
      return dataArr;
    });
    if (field === 'menu') {
      const menu = [[], [], []];
      for (let i = 0; i < data.length; i++) {
        if (data[i].breakfast) menu[0].push(data[i]);
        if (data[i].lunch) menu[1].push(data[i]);
        if (data[i].dinner) menu[2].push(data[i]);
      }
      dispatch(readDB(field, menu));
    }
    if (field === 'specials') {
      const specials = data;
      dispatch(readDB(field, specials));
    }
    if (field === 'images') {
      const images = data
      dispatch(readDB(field, images))
    }
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
