import { useSearchParams } from 'react-router-dom';
import { usePokedex } from '../../hooks/pokedex.js';
import PokemonList from './PokemonList.jsx';
import Search from './Search.js';
import styles from './Pokedex.css';

export default function Pokedex() {
  const [searchParams] = useSearchParams();
  const { pokedex, addPage } = usePokedex(searchParams);

  if (!pokedex) return null;

  return (
    <section className={styles.Pokedex}>
      <Search />
      <PokemonList pokedex={pokedex} onLoadNext={addPage} />
    </section>
  );
}
