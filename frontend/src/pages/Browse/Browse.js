import React,{useState,useEffect} from 'react'
import Empty from '../Create/empty.svg'
import CreateRecipe from '../../components/CreateRecipeModal/CreateRecipe'
import isLoggedIn from "../../functions/isLoggedIn";
import axios from 'axios';
import cogoToast from "cogo-toast";
import NoPostsImage from '../../assets/noposts.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
const Browse = () => {
  if(!isLoggedIn()){
    
    window.location.href = "/"
  }

  const DeletePost = (id) =>{
   
    axios({
      method: 'delete',
      url: "receipe/food",
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      },
      data: { 
        id
       }
    }).then((data) => {
      cogoToast.success(data.data.message);
      reRender();
    })
    .catch(err=>{
      cogoToast.error("Some error occured !");
    })
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
  const [render,setRender] = useState(false);

  const reRender = () =>{
    
    setRender(!render);
  }

  useEffect(()=>{
    axios({
      method: 'get',
      url: "receipe",
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    }).then((data) => {
     
      setPosts(data.data.data);
      console.log(data.data.data)
    })
    .catch(err=>{
      cogoToast.error("Some error occured !");
    })
  },[render])
  
  return (

    <div className='browse p-4'>
      
      <div className='flex justify-center'>

        <div className='blog w-[600px] space-y-4'>

          <CreateRecipe reRender = {reRender}/>
          {(posts.length)?(
            posts
            .sort(compareDescending)
            .map(post =>{

              return (
                <div className='card w-full border border-gray-300 rounded-md' key={post.post._id}>
                <div className='title m-3 text-left text-lg flex justify-between items-center'>
                  
                  <h4 style = {{fontWeight:"bold",fontSize:"1.8rem"}}>{post.post.title}</h4>
                  {(post.self)?(
                    <span onClick = {()=>{DeletePost(post.post._id)}}><FontAwesomeIcon icon={faTrashCan} /></span>
                  ):""}
                
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
                    <span>{(post.self)?(
                   <p>Posted By : You</p>
                  ):(<p> Posted By :{post.Userdata.firstName} {post.Userdata.lastName}</p>)} 
                  </span>
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
