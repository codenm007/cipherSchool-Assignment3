//importing packages 


//importing models
let receipesModel = require("../../models/receipes");
let userModel = require("../../models/user"); 

/******************************************** */
//This method is for fetchis all receipes 
/******************************************** */

exports.getAllReceipes = async (req, res) => {
    receipesModel.find()
    .then(async data =>{
        let result = [];
       
        data.forEach(async post =>{
            let UserDetails = await userModel.findById(post.userId);
            let self = false;
            let Userdata = {
                firstName:UserDetails.firstName,
                lastName:UserDetails.lastName,
                profilePic:UserDetails.profilePic
            }
            if(req.user.userId ==post.userId ){
                self = true;
            }
           
            let resultData = {
                post,
                self,
                Userdata
            }
            result.push(resultData)
            
            if(result.length == data.length){
                return res.status(200).json({
                    success:true,
                    message:"All receipes fetched successfully !",
                    data:result
                })
            }
        })


    }).catch(err => {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Something gone wrong",
            err
        })
    })


}


/******************************************** */
//This function is used to get all the links of the user
/******************************************** */
exports.getMyReceipes = async (req, res) => {
    const {user_id} = req.user;

        let query = {user_id:user_id}
        receipesModel.find(query)
        .then((myreceipes)=>{

                return res.status(200).json({
                    success: true,
                    message: "Apka post !",
                    data: myreceipes
                })
            
        })
        .catch(err => {
            return res.status(500).json({
                success: false,
                message: "Something gone wrong",
                err
            })
        })
    
}



/******************************************** */
//This method is for adding receipes by registered users
/******************************************** */

exports.addReceipe = async (req, res) => {
    let { title, body, pic } = req.body;


    const newReceipes = new receipesModel({
        title,
        body,
        pic,
        userId:req.user.userId
    });


    newReceipes.save().then(data => {

        return res.status(200).json({
            success: true,
            message: "Apka receipe added hogaya ji !",
            data
        })
    }).catch(err => {
        return res.status(500).json({
            success: false,
            message: "Something gone wrong",
            err
        })
    })


}


/******************************************** */
//This method is for deleting the receipes
/******************************************** */

exports.DeleteReceipe = async (req, res) => {
    let { id } = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Please pass the post id !",
            data: null
        })
    }
    let query = {
        _id:id,
        userId:req.user.userId
    }
    receipesModel.findOneAndDelete(query)
    .then((data) => {

            return res.status(200).json({
                success: true,
                message: "Receipe remove hogaya ji !",
                data: data
            })

    }).catch(err => {
        return res.status(500).json({
            success: false,
            message: "Something gone wrong",
            err
        })
    })

}


/******************************************** */
//This method is for updating the receipes
/******************************************** */

exports.updateReceipe = async (req, res) => {
    let { id,title,body,pic } = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Please pass the post id !",
            data: null
        })
    }
    let query = {
        _id:id,
        userId:req.user.userId
    }
    receipesModel.findOneAndUpdate( 
        query,
        {title,body,pic},
        {new:true}
        ).then((data) => {

            return res.status(200).json({
                success: true,
                message: "Receipe update hogaya ji !",
                data: data
            })

    }).catch(err => {
        return res.status(500).json({
            success: false,
            message: "Something gone wrong",
            err
        })
    })

}





