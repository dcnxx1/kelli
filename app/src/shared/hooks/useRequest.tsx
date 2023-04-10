import axios from "axios";
import { useState, useCallback, useEffect } from "react";

type APIRequest = {
  response: string;
  status: number;
  error: KelliError;
  loading: boolean;
};

interface KelliError {
  status: number;
  message: string;
}

export default function useRequest(path: string, request?: any) {
    console.log("hook renders")
  const [response, setResponse] = useState<string>();
  const [status, setStatus] = useState();
  const [error, setError] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const api = axios.create({
    baseURL: "http://192.168.2.20:3030/tts/",
  });

 

  useEffect(() => {
    try {
        api
         .get(path)
         .then((res) => {
           setLoading(true);
           if(!!res.data){
            setResponse(res.data);
           }
           setLoading(false);
         })
         .catch((err) => {
           if (err) {
             setError(err);
           }
         });
     } catch (err) {
       if (err) {
         setError(err);
       }
     }
  }, []);

 

  const data = {
    response,
    status,
    error,
    isLoading,
  };

  return {
    setData: data,
  };
}
