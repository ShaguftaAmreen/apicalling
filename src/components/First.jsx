import React, { useEffect, useState } from 'react'
 import axios from "axios"
 import Main from './Main'
const First = () => {
    let [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
       // console.log(res)
       setData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  },[])


    // useEffect(() => {
    //   axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => {
    //       console.log(response);
    //       setData(response.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []); 
    
   // console.log(data);
    return (
      <div>
        <Main data={data} />
      </div>
    );
  }

  export default First;



 
// const First = () => {
//     let [data,setData]=useState([])
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>{
//          console.log(response);
//          setData(response.data)
//         })
//         .catch((err)=>{
//             console.log(err);
//         })

//     },[])
//     console.log(data)
//   return (
//     <div>
//       <Main data={data} />
//     </div>
//   )
// }

// export default First
