import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderItem.module.scss";

interface HeaderItemProps {
    label: string;
    path: string;
    onClick?: MouseEventHandler;
}

export const HeaderItem = (props: HeaderItemProps) => {
    
    return (
        <li>
            <Link className={styles.headerItem} to={props.path} onClick={props.onClick}>
                {props.label}
            </Link>
        </li>
    )
}