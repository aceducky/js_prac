import { useEffect, useState } from "react";
import axios from "axios";

function useFetch({ url, timeout }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url, { timeout });
        setData(res.data);
      } catch (e) {
        setError(e);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url, timeout]);

  return [data, isLoading, error];
}

function App() {
  const [data, isLoading, error] = useFetch({
    url: "http://localhost:8000/todo",
    timeout: 5000,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {data && <p>{JSON.stringify(data)}</p>}
      {/* {error && <p>{JSON.stringify(error)}</p>} */}
      {error && <p>Error: {error?.message}</p>}
    </>
  );
}

export default App;
