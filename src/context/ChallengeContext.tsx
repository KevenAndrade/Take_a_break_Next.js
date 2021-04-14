import React, { createContext, ReactNode, useEffect, useState } from 'react';

import api from '../services/api';
import Cookies from 'js-cookie';
import challeges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import { LogIn } from '../components/LogIn';

interface ChallengecontextProps {
    children: ReactNode;
    level:number,
    current:number,
    challengecompeted:number
}

interface chalenge {
    type: string;
    description: string;
    amount: number
}

interface ChallengesContextData {
    level:number;
    current:number;
    challengecompeted:number;
    activeChallenge: chalenge;
    experiencetonetxtlevel:number;
    InputError: string;
    user: user;
    levelUp: ()=>void;
    startNewChallenge:()=>void;
    resetChalenge:()=>void;
    completeChalenge:()=>void;
    closemodalup:()=>void;
    login:()=>void;
    Gitname: string;
    GetgitName:(name: string)=>void;
}

interface user {
    name: string;
    login: string;
    avatar_url: string;
}

export const Challengecontext = createContext({} as ChallengesContextData);

export function ChallengeProvider ({children, ...rest }: ChallengecontextProps){
    const [level, setlevel] = useState(rest.level ?? 1);
    const [current, setexperience] = useState(rest.current ?? 0);
    const [challengecompeted, setchallengecompeted] = useState(rest.challengecompeted ?? 0);
    const [activeChallenge, setactiveChallenge] = useState(null);
    const [ismodalup, setmodalup] = useState(false);
    const [isloged, setisloged] = useState(false);
    const [Gitname, SetGitname] = useState('');
    const [InputError, setInputError] = useState('');
    const [user, setuser] = useState<user | null>(null);



    function GetgitName(name: string){
        SetGitname(name);
        console.log(name);
    }

    const experiencetonetxtlevel = Math.pow((level + 1 ) * 4, 2)

    async function login() {
        if (!Gitname) {
            setInputError('Preencha o campo');
            return;
        }

        /* because um using NEXT.JS in this progect i cant maca api calls in here, but yh nice try Keven
         try {
            api.get<user>(`users/${Gitname}`).then(response => {
                setuser(response.data);
                console.log(user.name);
            })
            
        } catch (error) {
            setInputError('Usuario não existe');
        } */
        setisloged(true);
    }

    useEffect(()=>{
        Notification.requestPermission();
    }, [])

    useEffect(()=>{
        Cookies.set('level',level.toString());
        Cookies.set('current',current.toString());
        Cookies.set('challengecompeted',challengecompeted.toString());
    }, [level, current, challengecompeted])

    function levelUp(){
        setlevel(level+1);
        setmodalup(true);
    }

    function closemodalup(){
        setmodalup(false);
    }

    function startNewChallenge(){
        const ramdonIndex = Math.floor(Math.random() * challeges.length);
        const challenge = challeges[ramdonIndex];

        setactiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission ==='granted'){
            console.log('entrou');
            new Notification('Novo desafio', {
                body: `Ganhe ${challenge.amount} xp!`
            })
        }
    }

    function resetChalenge(){
        setactiveChallenge(null);
    }

    function completeChalenge(){
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge;
        let finalexperience = current + amount;

        if( finalexperience >= experiencetonetxtlevel){
            finalexperience = finalexperience - experiencetonetxtlevel;
            levelUp();
        }

        setexperience(finalexperience);
        setactiveChallenge(null);
        setchallengecompeted(challengecompeted + 1);
    }

    return(
        <Challengecontext.Provider
         value={{
            level, 
            current, 
            challengecompeted, 
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChalenge,
            experiencetonetxtlevel,
            completeChalenge,
            closemodalup,
            login,
            Gitname,
            GetgitName,
            InputError,
            user
         }}
        >
            {children}

            {ismodalup && <LevelUpModal/>}
            {!isloged && <LogIn/> }
        </Challengecontext.Provider>
    )
}