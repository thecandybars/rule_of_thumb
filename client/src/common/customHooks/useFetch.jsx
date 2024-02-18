import { useEffect, useState } from "react";

export default function useFetch(service) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [load, setLoad] = useState(true); // Used for forcing data load or reloading

  useEffect(() => {
    (async function () {
      try {
        if (load) {
          setIsLoading(true);
          const response = await service();
          if (response.response) navigate("*");
          setData(response);
          setLoad(false);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [load]);

  const reload = () => setLoad(true);

  return [data, error, isLoading, reload];
}
