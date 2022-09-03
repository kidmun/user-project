import Card from './UI/Card';
import './Users.css';


const Users = () => {
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
     
      </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Malcolm</td>
      <td>Mal, Cap'n</td>
      <td>Reynolds</td>
      <td>Mal, Cap'n</td>
      <td>M</td>
      
      
      </tr>
    <tr>
    
      <td>Zoe</td>
      <td>Washburn</td>
      <td>Zoe</td>
      <td>F</td>
      <td>First Mate</td>
      
      </tr>
    <tr class="disabled">
  
      <td>Hoban</td>
      <td>Washburn</td>
      <td>Wash</td>
      <td>M</td>
      <td>Pilot</td>
      
   </tr>
  </tbody>
</table>
    </Card>
  );
};

export default Users;