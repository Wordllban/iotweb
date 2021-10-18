import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <div>
                <HeaderItem label="Home" path="/home"/>
                <HeaderItem label="Catalog" path="/catalog"/>
                <HeaderItem label="Cart" path="/cart"/>
            </div>
        </header>
    );
};
