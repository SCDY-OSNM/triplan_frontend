import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={800}
      hideProgressBar
      closeOnClick
      draggable
      pauseOnFocusLoss
      pauseOnHover={false}
      theme="light"
      transition={Flip}
      // style={{ marginTop: '50px' }}
    />
  );
};

export default CustomToastContainer;
