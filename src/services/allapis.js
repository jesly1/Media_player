import {serverurl} from './serverurl'
import{commonapi} from './commonapi'
//upload videos
 export const uploadvideo=async(reqbody)=>{
    return await commonapi('POST',`${serverurl}/videos`,reqbody)
}
//get all videos(new api created)
export const getallvideos=async()=>{
    return await commonapi('GET',`${serverurl}/videos`,"")
}
//to delete videos

export const deletevideo=async(id)=>{
    return await commonapi('DELETE',`${serverurl}/videos/${id}`,{})
}
//to add to watch history

export const addtohistory=async(videodetails)=>{
    return await commonapi('POST',`${serverurl}/history/`,videodetails)
}

// get all  watch history

export const getallwatchhistory=async()=>{
    return await commonapi('GET',`${serverurl}/history/`,"")
}
//to delete watch history

export const deletewatchistory=async(id)=>{
    return await commonapi('DELETE',`${serverurl}/history/${id}`,{})
}
//Add category
export const addcategory=async(reqbody)=>{
    return await commonapi('POST',`${serverurl}/category`,reqbody)
}
// get all  category

export const getallcategories=async()=>{
    return await commonapi('GET',`${serverurl}/category`,"")
}
//to delete all category

export const deleteallcat=async(id)=>{
    return await commonapi('DELETE',`${serverurl}/category/${id}`,{})
}
