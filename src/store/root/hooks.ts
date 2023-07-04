import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux';

import { type AppDispatch, type RootState } from './config.store';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
