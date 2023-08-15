import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./PostsSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
    reducer: {
       posts: PostsSlice,
       search:SearchSlice,
    }
});


export default store;