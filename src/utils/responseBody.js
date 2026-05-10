
const errorResponseBody ={
    err:{},
    data :{},
    message : "Something went wrong, we cannot process the request",
    success:false
}

const successResponseBody ={
    err:{},
    data :{},
    message:"Successfully fetch the details",
    success:true
}

module.exports = {

    successResponseBody,
    errorResponseBody
}