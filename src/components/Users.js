import Card from './UI/Card';

import { useSelector  } from 'react-redux';
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import './Users.css';


const Users = () => {
  const dispatch = useDispatch();
  const deleteHandler = (event) => {
    console.log(event.target.value)
dispatch(userActions.removeUser({userId: event.target.value}));
  };
  const users = useSelector(state => state.users);
 

  return (
    <Card>
      <h1>List of Users</h1>
      <table>
  <thead>
    <tr>
      
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Height</th>
      <th>Delete</th>
      <th>Edit</th>
     
      </tr>
  </thead>
  <tbody>
    {users.map(user => (<tr key={user.id}>
      
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.height}</td>
      <td><button onClick={deleteHandler} value={user.id}>Delete</button></td>
      <td><button>Edit</button></td>
      
      
      </tr>))}
    
    
   
  </tbody>
</table>
    </Card>
  );
};

export default Users;