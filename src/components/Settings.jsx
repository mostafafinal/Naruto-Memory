import "../styles/Settings.css";

const Settings = ({ onClick }) => (
  <>
    <button role="settings" className="settings-btn" onClick={onClick}>
      <img src="/src/assets/settings.png" alt="" />
    </button>
  </>
);

export default Settings;
