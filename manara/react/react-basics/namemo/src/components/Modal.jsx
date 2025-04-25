import Button from "./Button";
import "../styles/Modal.css";
import Layout from "./Layout";

const Modal = () => {
  return (
    <>
      <Layout />
      <div className="modal">
        <h2 className="modal-name">EYES OF SHARINGAN!</h2>
        <div className="modal-cta">
          <Button />
          <Button />
        </div>
      </div>
    </>
  );
};

export default Modal;
