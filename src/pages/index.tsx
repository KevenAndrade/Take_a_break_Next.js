import React from "react";
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { CompletedChalenge } from "../components/CompletedChalenge";
import { CountDown } from "../components/CountDown";
import Experiencebar from "../components/Experiencebar";
import { Perfil } from "../components/Perfil";
import styles from '../styles/components/Home.module.css';
import { ChalengeBox } from "../components/ChalengeBox";
import { CountDownProvider } from "../context/CountDownContext";
import { ChallengeProvider } from "../context/ChallengeContext";
import { LogIn } from "../components/LogIn";

interface homeporps {
  level:number,
  current:number,
  challengecompeted:number
}


export default function Home(props: homeporps) {
  
  return (
    <ChallengeProvider 
      level ={props.level}
      current ={props.current} 
      challengecompeted={props.challengecompeted}
    >
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
    </ChallengeProvider>
  )
}

export const  getServerSideProps: GetServerSideProps = async (ctx) =>{

  const { level, current, challengecompeted } = ctx.req.cookies;

  return {
    props: { 
      level: Number(level), 
      current: Number(current), 
      challengecompeted: Number(challengecompeted),
    }
  }
}