import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Challengecontext } from './ChallengeContext';

interface CountDownContextProps {
    children: ReactNode;
}


interface CountDownContextData{
    minutes:number;
    seconds:number;
    hasFinished:boolean;
    isactive:boolean;
    resetCount:() =>void;
    startCount:() =>void;
}
let countdownTimeout: NodeJS.Timeout;

export const CountDownContext = createContext({} as CountDownContextData);

export function CountDownProvider ({children}: CountDownContextProps){
    const { startNewChallenge } = useContext(Challengecontext);


    const [time,setTime] = useState(30*60);
    const [isactive,setActive] = useState(false);
    const [hasFinished,sethasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    function startCount(){
        setActive(true);
     }
 
     function resetCount(){
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime(30*60);
        sethasFinished(false);
     }
 
     useEffect(() =>{
        /* console.log(active); */
         if (isactive && time >0){
             countdownTimeout = setTimeout(() =>{
                 setTime( time - 1 );
             },1000);
         } else if (isactive  && time == 0) {
             /* console.log('finalisou.'); */
             setActive(false);
             sethasFinished(true);
             startNewChallenge()
         }
     }, [isactive, time])

 return(
     <CountDownContext.Provider 
        value= {{
            minutes,
            seconds,
            hasFinished,
            isactive,
            resetCount,
            startCount
        }}
     >
         {children}
     </CountDownContext.Provider>
 )
}