import { Link } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <Link to="/">Home</Link>
      <Link to="contact">Contact</Link>
      <Link to="about">About</Link>
      <Link to="pokedex">Pokedex</Link>
    </nav>
  );
}
