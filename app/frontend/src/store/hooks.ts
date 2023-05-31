import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import type {RootState, AppDispatch} from './';

export const useStoreDispatch = () => useDispatch<AppDispatch>();
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
