import {
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import FuzzyBunnyProvider from '../state/context/funzzyBcontext.jsx';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Router>
      <FuzzyBunnyProvider>
        <Toaster />
        <Routes />
      </FuzzyBunnyProvider>
    </Router>
  );
}
