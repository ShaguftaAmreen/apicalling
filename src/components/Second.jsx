import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Main from './Main';

const Second = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        //console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); 

  return (
    <div>
      <Main data={data} />
    </div>
  );
};

export default Second;






// const Second = () => {
//     useEffect(()=>{
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
//     },[])
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default Second
