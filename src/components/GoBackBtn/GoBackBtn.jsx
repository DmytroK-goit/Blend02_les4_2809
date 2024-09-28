import { Link } from 'react-router-dom';

export const GoBackBtn = ({ backRef }) => {
  return <Link to={backRef}>Go back</Link>;
};
