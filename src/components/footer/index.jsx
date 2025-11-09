import React from "react";
import styles from "./styles.module.css";

// change these paths if your icons live elsewhere
import linkedin from "../../assets/social/linkedin.svg";
import github from "../../assets/social/github.svg";
import twitter from "../../assets/social/twitter.svg";
import facebook from "../../assets/social/facebook.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* top row: cities (left) + social (right) */}
        <div className={styles.top}>
          <div className={styles.cities}>
            <p className={styles.citiesTitle}>Популярные города</p>

            {/* one horizontal row with manual spacing */}
            <ul className={styles.citiesList}>
              <li className={styles.city}>Осака</li>
              <li className={styles.city}>Кобэ</li>
              <li className={styles.city}>Токио</li>
              <li className={styles.city}>Ханой</li>
              <li className={styles.city}>Назва</li>
              <li className={styles.city}>Томаму</li>
              <li className={styles.city}>Йокогама</li>
              <li className={styles.city}>Нагоя</li>
              <li className={styles.city}>Саппоро</li>
              <li className={styles.city}>Кобе</li>
            </ul>
          </div>

          <div className={styles.social}>
            <img src={linkedin} alt="LinkedIn" />
            <img src={github} alt="GitHub" />
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
          </div>
        </div>

        {/* exact Figma line under the cities row */}
        <div className={styles.cityLine}></div>

        {/* bottom row: brand on the left */}
        <div className={styles.bottom}>
          <span className={styles.brand}>Cooljob</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
