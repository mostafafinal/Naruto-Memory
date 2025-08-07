import Score from '../../components/Score';
import RinneganGear from '../../components/RinneganGear';
import { useMainData } from '../../context/MainContext';

const Settings = () => {
  const { openSettings } = useMainData();

  return (
    <>
      <Score />
      <RinneganGear onClick={openSettings} />
    </>
  );
};

export default Settings;
