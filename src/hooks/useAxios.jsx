import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = (param) => {
  const [response, setResponse] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const result = await axios(param);
      setResponse(result.data);
      console.log(result.data)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    
    fetchData(param).then(param => setSearchResults(param));
  }, []);

  //setInterval( ()=> (fetchData(), 5000));

  return {
    response, loading, error
  }
}

export default useAxios