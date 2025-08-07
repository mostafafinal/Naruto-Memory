import { useMainData } from '../../context/MainContext';
import Modal from '../../components/Modal';
import Button from '../../components/Button';

const GameStatus = ({ onQuit }) => {
  const { data, rinnegan, sharingan } = useMainData();

  return (
    <>
      {data.status == 'lose' && (
        <Modal message={'USE YOUR RINNEGAN!'} status={'lose'}>
          <Button name={'Replay'} onClick={rinnegan} />
          <Button name={'Home'} onClick={onQuit} />
        </Modal>
      )}
      {data.status == 'win' && (
        <Modal message={'EYES OF GOD!'} status={'win'}>
          <Button name={'New Game'} onClick={rinnegan} />
          <Button name={'Home'} onClick={onQuit} />
        </Modal>
      )}
      {data.status == 'rinnegan' && (
        <Modal status={'lose'} message={'RINNEGAN!'}>
          <Button name={'Continue..'} onClick={sharingan} />
          <Button name={'New Game'} onClick={rinnegan} />
          <Button name={'Quit'} onClick={onQuit} />
        </Modal>
      )}
    </>
  );
};

export default GameStatus;
