import styles from "./AppLayout.module.css";
import Sidebar from "@/components/Sidebar.jsx";
import Map from "@/components/Map.jsx";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
