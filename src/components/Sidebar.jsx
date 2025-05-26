import styles from "./Sidebar.module.css";
import Logo from "./Logo.jsx";
import AppNav from "./AppNav.jsx";
import Footer from "./Footer.jsx";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cites</p>
      {/*<footer className={styles.footer}>*/}
      {/*  <p className={styles.copyright}>*/}
      {/*    &copy; Copyright {new Date().getFullYear()} by WorldWise inc.*/}
      {/*  </p>*/}
      {/*</footer>*/}
      <Footer />
    </div>
  );
}

export default Sidebar;
