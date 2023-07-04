// DUCKS pattern
import {
    createAction,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import type { RootState } from '../root/config.store';
import { type Photo } from '../../types/photos';

export interface PhotoState {
    data: Photo[];
    loading: boolean;
    error: string;
}

const initialState: PhotoState = {
    data: [],
    loading: false,
    error: '',
};

// slice
export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        fetchAllisLoading(state) {
            state.loading = true;
        },
        fetchAllSucceeded(state, action: PayloadAction<Photo[]>) {
            // it's okay to do this here, because immer makes it immutable under the hood😊
            state.data = action.payload;
            state.loading = false;
        },
        fetchAllFailure(state, action: PayloadAction<string>) {
            // it's okay to do this here, because immer makes it immutable under the hood😊
            state.error = action.payload;
            state.loading = false;
        },
    },
});

// Actions
export const photoActions = {
    fetchAll: createAction(`${photosSlice.name}`),
    fetchAllisLoading: photosSlice.actions.fetchAllisLoading,
    fetchAllSucceeded: photosSlice.actions.fetchAllSucceeded,
    fetchAllFailure: photosSlice.actions.fetchAllFailure,
};

// Selectors
export const selectPhotos = (state: RootState): Photo[] => state.photos.data;

// Reducer
export default photosSlice.reducer;
