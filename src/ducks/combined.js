import { combineReducers } from 'redux';

import { ContentsReducer } from './contents';
import { CommentsReducer } from './comments';

export default combineReducers({ contents: ContentsReducer, comments: CommentsReducer });
