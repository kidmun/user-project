
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Users from './components/Users';
import AddUser from './components/AddUser';
import { sendUserData, fetchUserData } from './store/user-actions';


let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const changed =  useSelector((state) => state.changed);
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (changed) {
      dispatch(sendUserData(users));
    }
  }, [users, changed,  dispatch]);

  return (
    <div>
      <Users/>
      <AddUser/>
      
   
    </div>
  );
}

export default App;
