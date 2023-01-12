import React,{useState,useEffect} from "react";
import { AiFillBank,AiFillBulb} from  "react-icons/ai"
import { FiArrowRight } from "react-icons/fi";
export default function Apii(){
// const [PostData ,setPostData]= useState([]);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        return response.json();
}).then((data)=>{
    setPostData(data)
    console.log(data);
})
},[])

const [PostData,setPostData]= useState([]);
const [currentPage,setcurrentPage]= useState(1);
const [perPage,setperPage]= useState(20);

////slice data 
const indexlast=currentPage * perPage;
const firtindex=indexlast-perPage;
const showper = PostData.slice(firtindex,indexlast)

// ..............make pagination.................
const pagenumber=[]
for(var i=1; i<=Math.ceil(PostData.length/perPage); i++){
pagenumber.push(i)
}
console.log(pagenumber)
// ...........make end pagination

const Cextpage=(num)=>{
    setcurrentPage(num);
  }
  
  const Nextpage=()=>{
    
    if (currentPage >= 5) {
      setcurrentPage(currentPage);
    }else{
      setcurrentPage(currentPage+1);
    }
  }
  const Prepage=()=>{
    if (currentPage >1){
    setcurrentPage(currentPage-1);
  }else{
    currentPage = 1
  }
  }

console.log(PostData)


return (
    <>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">user id</th>
      <th scope="col">user title</th>
      <th scope="col">user body</th>
      <th scope="col">Action </th>
    </tr>
  </thead>
  <tbody>
  {showper.map(item=>(
    <tr key={item.id}>
      <th scope="row">{item.id}</th>
      <td scope="row">{item.title}</td>
      <td scope="row">{item.body}</td>
      <td>
        <span><button ><FiArrowRight/></button></span>
        <span><button><AiFillBank/></button></span>
        <span><button><AiFillBulb/></button></span>
      </td>
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
                          <li class="page-item" key={number}>  <a onClick={()=>Cextpage(number)} class="page-link" href="#">{number}</a>
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