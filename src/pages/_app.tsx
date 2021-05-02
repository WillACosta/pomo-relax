import { PomodoroProvider } from '../contexts/PomodoroContext';

import '../styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <PomodoroProvider>
      <Component {...pageProps} />
    </PomodoroProvider>
  )
}

export default App;
