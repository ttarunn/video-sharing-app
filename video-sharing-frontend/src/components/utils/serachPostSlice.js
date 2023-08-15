const searchPostsSlice = createSlice({
    name:"searchPosts",
    initialState: {
        searchPosts: []
    },
    reducers: {
        addPosts: (state, action) => {
            state.searchPosts = []
            state.searchPosts.push(action.payload)
        }
    }
});

export const { addPosts } = searchSlice.actions


export default searchPostsSlice.reducer;