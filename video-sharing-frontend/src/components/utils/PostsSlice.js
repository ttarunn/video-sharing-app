import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name:"posts",
    initialState: {
        videos: [],
        searchResultVideo : [],
        textLength : 0,
        myVideos: []
    },
    reducers: {
        addVideo: (state, action) => {
            state.videos.push(action.payload)
        },
        addSearchResultVideos: (state, action) => {
            state.searchResultVideo = []
            state.searchResultVideo.push(action.payload)
        },
        addTextLength: (state, action) => {
            state.textLength = action.payload
        },
        addMyVideos: (state, action) => {
            state.myVideos = []
            state.myVideos.push(action.payload)
        }
    }
});

export const { addVideo, addSearchResultVideos, addTextLength, addMyVideos } = postsSlice.actions

export default postsSlice.reducer;