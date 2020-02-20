import uuidv4 from 'uuid/v4';
import {IUser} from 'src/types';

export const panayiotis: IUser = {
  id: '9b2ba367-08ec-4b49-8334-7dc28bcce0c0',
  createdAt: new Date().toISOString(),
  firstName: 'Panayiotis',
  lastName: 'Nicolaou',
  email: 'p.nicolaou.13@gmail.com',
  cookbooks: [
    {
      id: uuidv4(),
      name: 'Default',
      recipes: ['2a72fea6-8379-4a8f-8178-f5f5d3d67194'],
    },
  ],
};
