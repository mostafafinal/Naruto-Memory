import Button from "./Button";
import "../styles/Modal.css";
import Layout from "./Layout";

const Modal = ({ message, status, children }) => {
  return (
    <>
      <Layout />
      <div role="modal" className={`modal ${status}`}>
        <h2 className="modal-name">{message}</h2>
        <div className="modal-cta">{children}</div>
      </div>
    </>
  );
};

export default Modal;
