import { all, fork } from 'redux-saga/effects';

import photosWatcherSaga from '../photo/saga';

export function* rootSaga(): any {
    yield all([fork(photosWatcherSaga)]);
}

export default rootSaga;
