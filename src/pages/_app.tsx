import '../styles/global.css';
import { Challengecontext } from '../context/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return (
    <Challengecontext.Provider value={'teste'}>
      <Component {...pageProps} />
    </Challengecontext.Provider>
  ) 
}

export default MyApp
