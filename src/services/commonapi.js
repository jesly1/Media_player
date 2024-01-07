import axios from 'axios'


 export const commonapi=async(httpmethod,url,requestbody)=>{
    let reqconfig={
        method:httpmethod,
        url:url,
        data:requestbody,
        header:{
            "content-Type":"applixation/json"
        }
    }
    return await axios(reqconfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}
