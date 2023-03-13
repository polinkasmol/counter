import styles from "./styles.module.scss";

const Header = () =>{
    return (
        <div className={styles.wrapper}>
          <button>Home Page</button>
          <button>Counter Page</button>
        </div>
    );
};
export default Header;