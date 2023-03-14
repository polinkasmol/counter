import styles from "./styles.module.css";
import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <div className={styles.wrapper}>
          <Link to="/">Home Page</Link>
          <Link to="/counter">Counter Page</Link>
            <Link to="/control_panel">Control Panel</Link>
        </div>
    );
};
export default Header;