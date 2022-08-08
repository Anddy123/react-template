import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import FuzzyBunnyProvider from './state/context/fuzzybunnycontext.jsx';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Router>
      <Toaster />
      <FuzzyBunnyProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pokedex" element={<Pokedex />} />
            <Route path="fuzzybunny" element={<FuzzyBunny />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </FuzzyBunnyProvider>
    </Router>
  );
}
