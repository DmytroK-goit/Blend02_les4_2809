import { Container, CountryList, Heading, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCountries();
        console.log(data);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title={error ? error : 'Home'} bottom />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
