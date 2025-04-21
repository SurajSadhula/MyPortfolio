import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" style={{paddingRight: '10px'}}/>
            <div>
              <h3>Backend Developer</h3>
              <p>
                I specialize in building scalable and efficient backend systems
                using Java and Spring Boot, delivering solutions that power
                seamless operations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" style={{paddingRight: '10px'}}/>
            <div>
              <h3>Frontend Developer</h3>
              <p>
                Experienced in developing responsive and optimized interfaces
                using React, ensuring exceptional user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
