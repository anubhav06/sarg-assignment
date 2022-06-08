import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import {TolgeeProvider} from "@tolgee/react";

function App() {
  return (
    <div className="App">
      <Router>
      <TolgeeProvider
          staticData={{
            en: () => import('./i18n/en.json'),
            es: () => import('./i18n/es-ES.json'),
            fr: () => import('./i18n/fr-FR.json'),
          }}
          filesUrlPrefix="i18n/"
          apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
          apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
          loadingFallback={<>Loading...</>} //content to show when localization data is loading
      >
        <Routes>
          <Route element={<LandingPage/>} path="/"/>
        </Routes>

      </TolgeeProvider>
      </Router>
    </div>
  );
}

export default App;
