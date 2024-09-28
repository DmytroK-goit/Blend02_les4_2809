import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const location = useLocation();

  const { countryId } = useParams();

  const goBackRef = location.state?.from ?? '/';

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <GoBackBtn backRef={goBackRef} />
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
