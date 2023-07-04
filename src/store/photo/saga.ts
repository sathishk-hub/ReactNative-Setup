import { type SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import getPhotos from '../../services/photo/photos.api';
import { type Photo } from '../../types/photos';
import { photoActions } from './slice';

// Worker Sagas
export function* onGetPhotos(): SagaIterator {
    try {
        const posts: Photo[] = yield call(getPhotos);
        yield put(photoActions.fetchAllSucceeded(posts));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(photoActions.fetchAllFailure(e.message.toString()));
        }
    }
}

// Watcher Saga
function* photosWatcherSaga(): SagaIterator {
    yield takeEvery(photoActions.fetchAll.type, onGetPhotos);
}

export default photosWatcherSaga;
