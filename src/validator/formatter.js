
// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch 
//name, week#, Day#, the topic being taught today is ….. 
//For example - Californium, W3D4, the topic for today is Nodejs module system’



const dateDetails = function(){
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
console.log(`Californium, Date ${day} Month ${month}, W3D4,the topic for today is Nodejs module system`)

}

module.exports.today = dateDetails