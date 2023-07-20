import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@rtk-incubator/rtk-query/dist';
import { fileApi } from './fileApi';
import { DrinksAdminApi } from './drinks-admin/DrinksAdmin';

export const store = configureStore({
    reducer: {
        [DrinksAdminApi.reducerPath]: DrinksAdminApi.reducer,
        [fileApi.reducerPath]: fileApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat([
            DrinksAdminApi.middleware,
            fileApi.middleware
        ])
});

setupListeners(store.dispatch);

/*
    middleware: (getDefaultMiddleware) =>{
        let defaultMiddleware = getDefaultMiddleware()
        
        defaultMiddleware.concat(rtkQueryErrorLogger),
        defaultMiddleware.concat(basketApi.middleware)

        return defaultMiddleware
    }
 */