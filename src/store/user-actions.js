import { userActions } from './user-slice';


export const fetchUsers = () => {
    return async (dispatch) => {


        const fetchData = async () => {
            const response = await fetch('https://test-c11fd-default-rtdb.firebaseio.com/users.json');
            if (!response.ok){
              throw new Error('Fetching failed');   
            }
            const responseData = await response.json();

            return responseData;
        }
        try {
            const users = await fetchUsers();
            dispatch(userActions.replaceUsers({users}));
        }
        catch (err){
            dispatch(userActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'fetching data failed'
              
              }))
        }

    }
};

export const sendUser = (user) => {
    return async (dispatch) => {
      dispatch(userActions.showNotification({
        status: 'pending', 
        title: 'sending', 
        message: 'sending user data'
      }));
      const sendRequest = async () => {
        const response = await fetch('https://test-c11fd-default-rtdb.firebaseio.com/users.json', {
          method: 'PUT',
          body: JSON.stringify(users)
        });
  
        if (!response.ok){
          throw new Error('sending user data failed');
        }
       
      }
  
      try {
        await sendRequest();
      }
      catch (Error){
        dispatch(userActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'sendind data failed'
        
        }))
      }
      
      
        dispatch(userActions.showNotification({
          status: 'success',
          title: 'success',
          message: 'sent user data successfully'
        
        }))
    }
    
  }