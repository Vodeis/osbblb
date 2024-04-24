import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./authSlice";

const persistConfig = {
  key: "osbblb",
  storage,
};

const persistedAuth = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    auth: persistedAuth,
  },
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
