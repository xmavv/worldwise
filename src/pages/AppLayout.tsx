import Sidebar from "../components/Sidebar.tsx";
import Map from "../components/Map.tsx";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
