import React from "react";
import { CompletedChalenge } from "../components/CompletedChalenge";
import { CountDown } from "../components/CountDown";
import Experiencebar from "../components/Experiencebar";
import { Perfil } from "../components/Perfil";
import styles from '../styles/components/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <Experiencebar />
      <section>
        <div>
          <Perfil />
          <CompletedChalenge />
          <CountDown />
        </div>

        <div>

        </div>
      </section>
    </div>
  )
}
