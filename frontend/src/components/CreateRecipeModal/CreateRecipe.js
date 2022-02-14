import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState,useRef } from "react";
import axios from 'axios';
import cogoToast from "cogo-toast";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera,faPaperPlane,faPizzaSlice} from '@fortawesome/free-solid-svg-icons';

export default function MyModal({reRender}) {
  let [isOpen, setIsOpen] = useState(false);
  const [title , setTitle] = useState('');
  const [desciption , setDesciption] = useState('');
  const [pic,setPic] = useState('https://res.cloudinary.com/dqpurfmpd/image/upload/v1644825815/receipe/d0e6a0a79d5f4197a51f4ca065393ffe_fnjwa5.jpg');
  

  const AddReceipe = () =>{
   
    if(title.length === 0){
      cogoToast.error("Post should have a title !")
    }else if(desciption.length === 0 ){
      cogoToast.error("Post should have a description !")
    }else {
      axios({
        method: 'post',
        url: "receipe/food",
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        data: { 
          title:title,
          body:desciption,
          pic:pic
         }
     }).then((res) => {
       
       cogoToast.success(res.data.message);
       setTitle('');
       setDesciption('');
       setPic('https://res.cloudinary.com/dqpurfmpd/image/upload/v1644825815/receipe/d0e6a0a79d5f4197a51f4ca065393ffe_fnjwa5.jpg')
        closeModal();
        reRender();
     }).catch((err) => {
        console.log(err,99);
      // throw new Error(err);
     })
    }
    

  }

  const ImageUpload = (e) =>{
      const [file] = e.target.files;
      cogoToast.info("Please wait while we upload the pic !")
      const formData = new FormData();
      formData.append("file",file);
      formData.append("upload_preset","jxcwuz7z");
      formData.append("cloud_name","dqpurfmpd");
  
      axios.post("https://api.cloudinary.com/v1_1/dqpurfmpd/image/upload",formData)
      .then(data =>{
       
        cogoToast.success("Looks yummy !");
        setPic(data.data.url);
       
      }).catch(err =>{
        console.log(err);
      } )
    
  }

  const fileRef = useRef();

  // const handleChange = (e) => {
    
  //   console.log(file);
  // };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div  className=" inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          style={{fontSize:"1.5rem"}}
          className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Add a new food <FontAwesomeIcon  icon={faPizzaSlice} className = 'px-2' />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block border border-indigo-500 w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Lets note , what we need !
                </Dialog.Title>
                <div className="mt-6 space-y-5">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    className="border border-gray-300 rounded-md w-full outline-none py-2 px-3 text-gray-600
               focus:border-indigo-500 transform duration-300"
               onChange={(event) => setTitle(event.target.value)}
                  />
                  <textarea
                    type="text"
                    name="body"
                    placeholder="It contains ..."
                    className="border border-gray-300 h-[100px] rounded-md w-full outline-none py-2 px-3 text-gray-600
               focus:border-indigo-500 transform duration-300"
               onChange={(event) => setDesciption(event.target.value)}
                  />
                  <img src = {pic} />


                  <div>
                  <button  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"  onClick={() => fileRef.current.click()}>
                  <p style = {{color:"blue",fontSize:"1rem" , paddingLeft:"10px"}}>Snap that yummy curry ! </p>
                  <FontAwesomeIcon icon={faCamera}  style = {{color:"blue",fontSize:"1.5rem" , paddingLeft:"10px"}}/> 
                  </button>
                  <input
                    ref={fileRef}
                    accept="image/png, image/gif, image/jpeg"
                    onChange={ImageUpload}
                    multiple={false}
                    type="file"
                    hidden
                  />
                  </div>

                </div>


                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={()=>{AddReceipe()}}
                  >
                    Post 
                    <FontAwesomeIcon className="px-2" icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
