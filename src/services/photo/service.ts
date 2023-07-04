import { useCallback } from 'react';

import { photoActions, selectPhotos } from '../../store/photo/slice';

import { useAppDispatch, useAppSelector } from '../../store/root/hooks';
import { type Photo } from '../../types/photos';

interface PhotoServiceOperators {
    photos: Photo[];
    fetchAllPhotos: () => void;
}

const usePhotoService = (): Readonly<PhotoServiceOperators> => {
    const dispatch = useAppDispatch();

    return {
        photos: useAppSelector(selectPhotos),

        fetchAllPhotos: useCallback(() => {
            dispatch(photoActions.fetchAllisLoading());
            dispatch(photoActions.fetchAll());
        }, [dispatch]),
    };
};

export default usePhotoService;
