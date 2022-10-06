import {useCallback, useState} from "react";

const useHttp = () => {

  const [sending, setSending] = useState(false);
  const [error, setError] = useState();
  const [fetchResponse, setFetchResponse] = useState({});

  const httpRequest = useCallback((action) => {
    setSending(true);

    const params = {
      method: action.method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(action.body)
    };

    fetch(action.url, params).then((response) => {
      return response.json();
    }).then((data) => {
      setSending(false);
      setFetchResponse({data: data, action: action});
     }
    ).catch((error) => {
      setSending(false);
      setError(error.message);
    });
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, [])

  return {sending, error, fetchResponse, httpRequest, resetError};
}

export default useHttp;