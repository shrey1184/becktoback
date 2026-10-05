import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';

const registerUser = asyncHandler(async (req, res) => {


    const {fullName, username,  email, password} = req.body
    console.log("email:", email);
    
    if(fullName == ""){
        throw new Error("Full name is required")
    }

});


//get user details
//validation - not empty
//check for images
//upload


export { registerUser };
//Commented coz of pause