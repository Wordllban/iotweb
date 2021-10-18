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
                        Built on the Arduino Nano 3.0 or Arduino Nano 2.x microcontroller,
                        is small in size and can be used in laboratory work.
                        It has similar functionality to the Arduino Duemilanove, but differs in assembly.
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

