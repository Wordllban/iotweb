import logoImage from "../../assets/logo.svg";
import styles from "./Logo.module.scss";

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logoImage} alt="logo"/>
        </div>
    );
};
