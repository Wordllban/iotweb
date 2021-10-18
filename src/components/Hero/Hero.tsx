import { Button } from "../Button/Button";
import styles from "./Hero.module.scss";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <HeroImage />
            <div>
                <h1>BEST DEVICE</h1>
                <h2 className={styles.heroName}>Arduino Nano</h2>
                <p className={styles.about}>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat eaque vero adipisci accusamus ea sapiente repellat dicta temporibus officiis. 
                        Necessitatibus vero odio tenetur modi maiores libero a earum quaerat veritatis.
                    </span>
                    <br />
                    <span className={styles.more}>
                        <Button label="More"/>
                    </span>
                </p>
            </div>
        </div>
    );
};

