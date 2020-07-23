/* eslint-disable prettier/prettier */
import {db} from '../config/db';

export const addItem = (name,email,mobile) => {
  db.ref('/Users').push({
    name: name,
    email:email,
    mobile:mobile,
  });
};
