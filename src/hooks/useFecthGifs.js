import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs = (category) => {
    const [imgs, setImgs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      getGifs(category).then((res) => {
        setImgs(res);
        setIsLoading(false)
      });
    }, []);

    return {
       imgs,
        isLoading 
    }
  
}
