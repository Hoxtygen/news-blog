import { Status, StorySample } from './../../../../interfaces/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from '../../store';
import { getStories } from 'src/api/blogAPI';


interface StoryState {
    isLoading: boolean
    error: string | null
    stories: StorySample[],
    status: Status
}

const storiesInitialState: StoryState = {
    isLoading: false,
    error: null,
    stories: [],
    status: 'idle' 
}



function startLoading(state: StoryState) {
    state.isLoading = true;
    state.status = "pending"
}

function loadingFailed(state: StoryState, action: PayloadAction<string>) {
    state.isLoading = false;
    state.error = action.payload;
    state.status = "rejected"
    console.log("state Eror:", state.error)
}



const stories = createSlice({
    name: 'stories',
    initialState: storiesInitialState,
    reducers: {
        getStoryStart: startLoading,
        getStoryFailed: loadingFailed,
        getStorySuccess: (state, { payload }: PayloadAction<StorySample[]>) => {
            state.stories = payload;
            state.isLoading = false
            state.error = null
            state.status = "resolved"
        }
    }
});

export const { getStoryStart, getStoryFailed, getStorySuccess } = stories.actions
export default stories.reducer;

export const fetchStories = (): AppThunk => async (dispatch) => {
    try {
        dispatch(getStoryStart());
        const stories = await getStories();
        dispatch(getStorySuccess(stories))
    } catch (error) {

    }
}