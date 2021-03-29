import { createContext, ReactNode, useState } from 'react';
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
}

export const Challengecontext = createContext({} as ChallengesContextData);

export function ChallengeProvider ({children}: ChallengecontextProps){
    const [level, setlevel] = useState(1);
    const [current, setexperience] = useState(10);
    const [challengecompeted, setchallengecompeted] = useState(0);
    const [activeChallenge, setactiveChallenge] = useState(null);

    const experiencetonetxtlevel = Math.pow((level + 1 ) * 4, 2)

    function levelUp(){
        setlevel(level+1);
    }

    function startNewChallenge(){
        const ramdonIndex = Math.floor(Math.random() * challeges.length);
        const challenge = challeges[ramdonIndex];

        setactiveChallenge(challenge);
    }

    function resetChalenge(){
        setactiveChallenge(null);
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
            
         }}
        >
            {children}
        </Challengecontext.Provider>
    )
}