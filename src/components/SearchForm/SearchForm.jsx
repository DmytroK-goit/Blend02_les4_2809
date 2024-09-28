import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ handleChooseCountry }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const country = form.elements.region.value;

    handleChooseCountry(country);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(({ id, value, name }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </form>
  );
};
