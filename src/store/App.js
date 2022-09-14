import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchUsers } from './user-actions';
import { useSelector } from 'react-redux';
import { sendCartData, fetchCartData} from './store/cart-actions';
// import { uiActions } from './store/ui-slice';

let isInitial = true;
function App() {
  
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    // const sendCartData = async () => {
    //   dispatch(uiActions.showNotification({
    //     status: 'pending', 
    //     title: 'sending', 
    //     message: 'sending cart data'
    //   }))
    //   const response = await fetch('https://test-c11fd-default-rtdb.firebaseio.com/cart.json', {
    //     method: 'PUT',
    //     body: JSON.stringify(cart)
    //   });

    //   if (!response.ok){
    //     throw new Error('sending cart data failed');
    //   }
    //   const responseData = await response.json();
    //   dispatch(uiActions.showNotification({
    //     status: 'success',
    //     title: 'success',
    //     message: 'sent cart data successfully'
      
    //   }))

    // }
    if (isInitial){
      isInitial = false;
      return ;
    }
    // sendCartData().catch(error => {
    //   dispatch(uiActions.showNotification({
    //     status: 'error',
    //     title: 'Error',
    //     message: 'sendind data failed'
      
    //   }))
    // });
    if (cart.changed){

      dispatch(sendCartData(cart))
    }

   
  }, [cart, dispatch]);
  return (
    <React.Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
    </React.Fragment>
  );
}

export default App;
