import React,{useState,useEffect} from 'react'
import Empty from '../Create/empty.svg'
import CreateRecipe from '../../components/CreateRecipeModal/CreateRecipe'
import isLoggedIn from "../../functions/isLoggedIn";
import axios from 'axios';
import cogoToast from "cogo-toast";
import NoPostsImage from '../../assets/noposts.png';
const Browse = () => {
  if(!isLoggedIn()){
    
    window.location.href = "/"
  }

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    axios({
      method: 'get',
      url: "receipe",
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    }).then((data) => {
      cogoToast.success(data.data.message);
      setPosts(data.data.data);
      console.log(data);
    })
    .catch(err=>{
      cogoToast.error("Some error occured !");
    })
  },[])
  
  return (

    <div className='browse p-4'>
      
      <div className='flex justify-center'>

        <div className='blog w-[600px] space-y-4'>

          <CreateRecipe />
          {(posts.length)?(
          <div className='card w-full border border-gray-300 rounded-md'>
          <div className='title m-3 text-left text-lg'>
            <h4>Title</h4>
          </div>
          <div className='body m-3 text-left text-lg'>
            <h4>Body</h4>
          </div>
          <div className='image mb-6'>
            <img className='w-full h-[400px]' src={Empty} alt="" />
          </div>
        </div>
          ):(
            <div>
            <div class="container my-auto p-4" style ={{marginTop:"100px"}}>
            <p class="text-sky-400" style ={{textAlign:"center",fontSize:"2.5rem",fontWeight:"bold"}}>
              No posts yet !
            </p>
            <img src = {NoPostsImage} />
            </div>
            </div>
          )}


        </div>

      </div>

    </div>
  )
}

export default Browse
