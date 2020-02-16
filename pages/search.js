import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();

  return (
    <h2>{router.query.query}</h2>
  );
};

export default Search;