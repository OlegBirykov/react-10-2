import nanoid from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICES } from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000, isVisible: true },
  {id: nanoid(), name: 'Замена дисплея', price: 25000, isVisible: true }
];

export default function serviceListReducer(state = initialState, action) { 
  switch (action.type) {
    case ADD_SERVICE:
      const { id, name, price } = action.payload; 
      return id 
        ? state.map(item => item.id === id ? { id, name, price: Number(price), isVisible: true } : item) 
        : [...state, { id: nanoid(), name, price: Number(price), isVisible: true }];
    case REMOVE_SERVICE: 
      return state.filter(service => service.id !== action.payload.id);
    case FILTER_SERVICES:
      const { filter } = action.payload;
      return state.map(item => ({ ...item, isVisible: item.name.toLowerCase().includes(filter) }));
    default:
      return state;
  }
}
