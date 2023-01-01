

// const vailiMidileware = function(req, res, next){
//    // todo: header validation, return error if absent
// let appHeader = req.headers["isFreeAppUser"]
// if (!appHeader) appHeader = req.headers["isfreeappuser"]
// // agr ye appHeader camel me nhi h toh lower me check kro agr nhi h toh aage...
// if(!appHeader) return res.send({status:false, msg:" headers is mandatory"})
// //todo: use the header value to assign isFreeAppUser property in user document been created


// let OrderData = req.body

// if(appHeader =="true"){

//     OrderData.isFreeAppUser = true
// }else {
//     OrderData.isFreeAppUser = false
// } 
// next()
// }

// module.exports.middl = vailiMidileware