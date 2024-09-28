import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChooseCountry = value => {
    setError('');
    setValue(value);
  };

  useEffect(() => {
    if (!value) return;
    const getData = async () => {
      try {
        setLoading(true);

        const data = await fetchByRegion(value);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [value]);

  return (
    <Section>
      <Container>
        <Heading title={error ? error : 'SearchCountry'} bottom />
        <SearchForm handleChooseCountry={handleChooseCountry} />
        <CountryList countries={countries} />
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
