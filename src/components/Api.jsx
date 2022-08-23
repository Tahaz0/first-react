import { useState } from "react";
import { useEffect } from "react";
import Watched from './Watched';


function Api() {

  const [valu, setValu] = useState([]);
  const getUser = () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setValu(json));
  };

  useEffect(() => {
    getUser();

  }, []);

  return (
    <>
      {valu.slice(0, 12)?.map((item) => <Watched item={item} />)}
    </>
  );
}
export default Api;