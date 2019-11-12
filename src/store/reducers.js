import {combineReducers} from 'redux';
import user from '../loginPage/reducer';
import news from '../newsPage/reducer';
import profile from '../profilePage/reducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  user,
  news,
  profile,
  formReducer
});

export default rootReducer;