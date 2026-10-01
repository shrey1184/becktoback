// const asyncHandler = () => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(errr))
//     }
// }



export { asyncHandler }

//const asyncHandler = () => {}
//const asyncHandler = (func) => () => {}
//const asyncHandler = (func) => async () => {}

const asyncHandler = (fn) => async (res, req, next) => {
    try {
        await fn(res, req, next)
    }
    catch (error) {
        res.status(error.code || 500).json({ 
            success: false, 
            message: err.message 
        });
    }
}


