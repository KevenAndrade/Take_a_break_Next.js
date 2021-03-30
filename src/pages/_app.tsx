import '../styles/global.css';
import { ChallengeProvider } from '../context/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  ) 
}

export default MyApp
