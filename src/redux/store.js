import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth/auth-slice";
import phonebook from "./phonebook/phonebook-slice";

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: "token",
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    phonebook,
    auth: persistReducer(authPersistConfig, auth),
  },
  middleware,
});

export const persistor = persistStore(store);
