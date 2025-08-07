import Button from '../components/Button';
import Modal from '../components/Modal';

const HomeLayout = ({ onPlay }) => {
  return (
    <>
      <Modal message={'Naruto Memory'}>
        <Button name={'Play'} onClick={onPlay} />
      </Modal>
    </>
  );
};

export default HomeLayout;
