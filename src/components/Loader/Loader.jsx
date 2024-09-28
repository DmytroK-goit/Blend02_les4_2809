import { HashLoader } from 'react-spinners';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.backdrop}>
      <HashLoader />
    </div>
  );
};
