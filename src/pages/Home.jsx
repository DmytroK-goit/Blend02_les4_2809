import { Container, Heading, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from '../service/countryApi';
import { CountryList } from '../components/CountryList/CountryList';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const searchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    };
    searchCountries();
  }, []);
  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
