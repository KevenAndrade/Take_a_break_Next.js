import '../styles/global.css';
import { ChallengeProvider } from '../context/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  ) 
}

export default MyApp
