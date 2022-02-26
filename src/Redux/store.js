import { configureStore } from '@reduxjs/toolkit';
import signUpFormReducerFunction from './reducers';

export default configureStore({
  reducer: {
      formReducer:signUpFormReducerFunction
    },
})


