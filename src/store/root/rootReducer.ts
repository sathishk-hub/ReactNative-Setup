import { type Action, combineReducers } from '@reduxjs/toolkit';
import photosReducer from '../photo/slice';

const appReducer = combineReducers({
    photos: photosReducer,
});

const rootReducer = (
    state: any,
    action: Action,
): ReturnType<typeof appReducer> => {
    return appReducer(state, action);
};

export default rootReducer;
