

/*
 - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
 - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
 - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]
*/


const hard = function(){
let a = "  functionUp    "
console.log(a.trim())
let b =" I am AkhiLEsh SoNi "
console.log(b.toLowerCase())
let c = "hello my name is akhILesh sOni"
console.log(c.toUpperCase())
}

module.exports.hardcoded = hard