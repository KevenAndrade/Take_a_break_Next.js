import React from "react";
import Head from 'next/head';
import { CompletedChalenge } from "../components/CompletedChalenge";
import { CountDown } from "../components/CountDown";
import Experiencebar from "../components/Experiencebar";
import { Perfil } from "../components/Perfil";
import styles from '../styles/components/Home.module.css';
import { ChalengeBox } from "../components/ChalengeBox";
import { CountDownProvider } from "../context/CountDownContext";



export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Take a Break</title>
      </Head>
      <Experiencebar />
      <CountDownProvider>
        <section>
          <div>
            <Perfil />
            <CompletedChalenge />
            <CountDown />
          </div>

          <div>
            <ChalengeBox/>
          </div>
        </section>
      </CountDownProvider>
    </div>
  )
}
