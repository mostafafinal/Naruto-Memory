import "../styles/Settings.css";

const Settings = ({ onClick }) => (
  <>
    <button className="settings-btn" onClick={onClick}>
      <img src="/src/assets/settings.png" alt="" />
    </button>
  </>
);

export default Settings;
