import React , { useState, useEffect } from 'react';
export default function Api() {

const [PosttData,setPosttData]= useState([]);
const [currentPage,setcurrentPage]= useState(1);
const [perPage,setperPage]= useState(20);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((reponse)=>{
      return reponse.json();
    }).then((data)=>{
      setPosttData(data)
      console.log(data);
    })
},[])

// ..................devide data ......................
const indexlast=currentPage * perPage;
const firtindex=indexlast-perPage;
const showper = PosttData.slice(firtindex,indexlast)
// ...................................................

// ..............make pagination.................
const pagenumber=[]
for(var i=1; i<=Math.ceil(PosttData.length/perPage); i++){
pagenumber.push(i)
}
console.log(pagenumber)
// ............make end pagination

const Cextpage=(num)=>{
  setcurrentPage(num);
}

const Nextpage=()=>{
  setcurrentPage(currentPage+1);


}
const Prepage=()=>{
  setcurrentPage(currentPage-1);
}

  return (
    <>
      {/* <div className='container mt-5'>
        <div className='row'>
          {showper.map(post=>(
            <div className='col-lg-3 border' key={post.id}>
              <p>id : {post.id}</p>
              <p> title : {post.title}</p>
              <p>body : {post.body}</p>
            </div>
          ))}
      </div>
      </div> */}
      <table>
        <thead class="table">
            <tr>
                <th  >First</th>
                <th  >Handle</th>
                <th  >Action</th>
            </tr>
        </thead>
        <tbody>
            {showper.map(post=>(
                <tr key={post.id}>
                <th >{post.id}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>
                </tr>
            ))}
        </tbody>
      </table>

            {/* pagination start */}

            <div className='container mt-5'>
              <div className='row'>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a onClick={Prepage} class="page-link" href="#">Previous</a></li>

                  {pagenumber.map(number=>(
                          <li class="page-item" key={number}>
                            <a onClick={()=>Cextpage(number)} class="page-link" href="#">{number}</a>
                          </li>
                  ))}

                  <li class="page-item"><a onClick={Nextpage}  class="page-link" href="#">Next</a></li>
                </ul>
              </nav>
              </div>
            </div>

    </>
  )
}
