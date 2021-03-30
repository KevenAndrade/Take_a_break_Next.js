import { createContext, ReactNode, useEffect, useState } from 'react';
import challeges from '../../challenges.json';

interface ChallengecontextProps {
    children: ReactNode;
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
    levelUp: ()=>void;
    startNewChallenge:()=>void;
    resetChalenge:()=>void;
    completeChalenge:()=>void;
}

export const Challengecontext = createContext({} as ChallengesContextData);

export function ChallengeProvider ({children}: ChallengecontextProps){
    const [level, setlevel] = useState(1);
    const [current, setexperience] = useState(0);
    const [challengecompeted, setchallengecompeted] = useState(0);
    const [activeChallenge, setactiveChallenge] = useState(null);

    const experiencetonetxtlevel = Math.pow((level + 1 ) * 4, 2)

    useEffect(()=>{
        Notification.requestPermission();
    }, [])

    function levelUp(){
        setlevel(level+1);
    }

    function startNewChallenge(){
        const ramdonIndex = Math.floor(Math.random() * challeges.length);
        const challenge = challeges[ramdonIndex];

        setactiveChallenge(challenge);

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
            completeChalenge
         }}
        >
            {children}
        </Challengecontext.Provider>
    )
}