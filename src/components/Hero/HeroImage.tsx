import logoImage from "../../assets/heroImage.png";
import styles from "./HeroImage.module.scss";

export const HeroImage = () => {
    return (
        <div className={styles.heroImage}>
            <img src={logoImage} alt="hero"/>
        </div>
    );
};

