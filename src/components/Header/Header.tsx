import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { HeaderItem } from "./HeaderItem";
import { useLocation } from "react-router";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <nav>
                <ul className={styles.nav}>
                    <HeaderItem label="Home" path="/"/>
                    <HeaderItem label="Catalog" path="/catalog"/>
                    <HeaderItem label="Cart" path="/cart"/>
                </ul>
            </nav>
        </header>
    );
};
