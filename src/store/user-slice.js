import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        notification: null,
        statusChange: false,
        changed: false
    }, 
    reducers: {
        replaceUsers (state, action){
            state.users = action.payload.users;
          },
        addUser(state, action) {
            state.changed = true;
            state.users.push(action.payload);
        },
        removeUser(state, action) {
            state.changed = true;
            const id = action.payload.userId;
            console.log(id, state.users)

            state.users = state.users.filter(user => user.id.toString() !== id.toString());
            console.log(id, state.users)
        },
        showNotification(state, action) {
            state.notification = {
              status: action.payload.status,
              title: action.payload.title,
              message: action.payload.message
            };
    },
    statusChanged(state) {
        state.statusChange = true;
    },
    statusDefault(state) {
        state.statusChange = false;
    }

}
});

export const userActions = userSlice.actions;
export default userSlice;