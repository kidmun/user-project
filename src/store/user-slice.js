import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        notification: null
    }, 
    reducers: {
        replaceUsers (state, action){
            state.users = action.payload;
          },
        addUser(state, action) {
            state.users = action.payload;
        },
        removeUser(state, action) {
            const id = action.payload;
            state.users = state.users.filter(user => user.id !== id);
        },
        showNotification(state, action) {
            state.notification = {
              status: action.payload.status,
              title: action.payload.title,
              message: action.payload.message
            };
    }
}
});

export const userActions = userSlice.actions;
export default userSlice;