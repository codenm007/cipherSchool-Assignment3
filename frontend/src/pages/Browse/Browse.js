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

  const DeletePost = (id) =>{
    
  }

  const compareDescending  = (a,b) =>{
    if(new Date(b.post.createdAt) > new Date(a.post.createdAt)){
      return +1
    }else if (new Date(b.post.createdAt) < new Date(a.post.createdAt)){
      return -1
    }else{
      return 0;
    }
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
            posts
            .sort(compareDescending)
            .map(post =>{

              return (
                <div className='card w-full border border-gray-300 rounded-md'>
                <div className='title m-3 text-left text-lg'>
                  <h4 style = {{fontWeight:"bold",fontSize:"1.8rem"}}>{post.post.title}</h4>
                </div>
                <div className='body m-3 text-left text-lg'>
                  <h4 style = {{fontSize:"1rem"}}>{post.post.body}</h4>
                </div>
                <div className='image mb-6'>
                  <img className='w-full h-[400px]' src={post.post.pic} alt="" />
                </div>
                <div className='body m-3 text-left text-lg'>
                  <div>
                    <span><img src = {post.Userdata.profilePic} alt="Avatar" style = {{borderRadius:"50%",width:"30px"}} /></span>
                    <span>Posted By : {post.Userdata.firstName} {post.Userdata.lastName}</span>
                  </div>
                
                  <h6 style = {{fontSize:"0.86rem" , color:"blue"}}>Posted at : {`${new Date(post.post.createdAt).toString('YYYY-MM-dd')}`}  </h6>
                </div>
              </div>
              )
            })

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
