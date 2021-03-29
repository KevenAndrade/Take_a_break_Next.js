import { createContext, ReactNode, useState } from 'react';

interface ChallengecontextProps {
    children: ReactNode;
}

interface ChallengesContextData {
    level:number;
    current:number;
    challengecompeted:number;
    levelUp: ()=>void;
    startNewChallenge:()=>void;
}

export const Challengecontext = createContext({} as ChallengesContextData);

export function ChallengeProvider ({children}: ChallengecontextProps){
    const [level,setlevel] = useState(1);
    const [current,serexperience] = useState(0);
    const [challengecompeted,setchallengecompeted] = useState(0);

    function levelUp(){
        setlevel(level+1);
    }

    function startNewChallenge(){
        console.log('New Challenge');
    }

    return(
        <Challengecontext.Provider
         value={{
            level, 
            current, 
            challengecompeted, 
            levelUp,
            startNewChallenge
         }}
        >
            {children}
        </Challengecontext.Provider>
    )
}