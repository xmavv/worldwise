import Sidebar from "../components/Sidebar.tsx";
import Map from "../components/Map.tsx";
import styles from "./AppLayout.module.css";
import User from "../components/User.tsx";
import { useAuth } from "../contexts/FakeAuthContext.tsx";
function AppLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {isAuthenticated && <User />}
    </div>
  );
}

export default AppLayout;
