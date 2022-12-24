

const vailiMidileware = function(req, res, next){
    let header = req.headers
    console.log(header)
    if(header.isfreeappuser) 
    next() 
   else res.send({msg: "Request is missing a mandatory header."})
}
module.exports.middl = vailiMidileware