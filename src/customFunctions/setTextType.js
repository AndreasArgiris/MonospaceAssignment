//text types custom function
const setTextType=(text)=>{
    switch(text){
        case "Guest":{
            return "GU"
          }
          case "Employee":{
            return "EM"
          }
          case "Stakeholder":{
            return "SH"
          }
          case "Supervisor":{
            return "SV"
          }
          default:{
            return ("")}
       }
}
export default setTextType;