import { asyncHandler } from '../utils/asyncHandler.js';

const registerUser = asyncHandler(async (req, res) => {


    const {fullName, username,  email, password} = req.body
    console.log("email:", email)    

});


//get user details
//validation - not empty
//check for images
//upload


export { registerUser };