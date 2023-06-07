import {ToastContainer, toast as Toast, Flip} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type IToastMethod = 'info' | 'warning' | 'error' | 'success';

const Toastify = () => {
  return (
    <ToastContainer
      position="bottom-center"
      transition={Flip}
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={4}
      theme="dark"
    />
  );
};

export const toast = (text: string, method: IToastMethod, time = 3000) => {
  Toast[method](text, {
    position: "bottom-center",
    autoClose: time,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

export default Toastify;
