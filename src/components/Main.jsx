function Main  ({ data })  {
    return (
      <div>  
          {data.map((ele) => (
            <div key={ele.id}>
              <p>{ele.id}</p>
              <p>{ele.email}</p>
              <p>{ele.title}</p>
         </div> ))}
      </div>
    );
  }

  export default Main;
  


// import React from 'react'

// const Main = ({data}) => {
//   return (
//     // <div style={{width:"200px",height:"250px",border:"1px solid black"}}>
//     <div>  
//         {data.length===0 ?"": data.map((ele)=>(
//             <p>{ele.id}</p>
//         ))}
//     </div>
//   )
// }

// export default Main