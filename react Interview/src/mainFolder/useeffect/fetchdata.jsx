//Create a component that fetches data from an API using the useEffect hook.
//Display the fetched data once it's loaded, and handle loading and error states.
import React, { useState } from 'react';
import { useEffect } from 'react';

export const FetchdataUseeffect=()=>{
const[comments,setComments]=useState();
const[fetStatus,setFetchStatus]=useState();

useEffect(()=>{
const fetchData=async()=>{
   
    try {
        setFetchStatus('loading...')
       let response=await fetch('https://jsonplaceholder.typicode.com/comments');
let data=await response.json()
console.log('c',data)

if(response.ok){
    setComments(data);
    setFetchStatus(null)
}
else{

    throw "errorssss"
}

// setFetchStatus(null)
    } catch (error) {
     setFetchStatus(error)
    }



}
fetchData()


},[])




return(
    <>
    data: <br />
 {fetStatus}

    {comments&& comments.map(item=><li>{item.name}</li>)}
    
    </>
)

}
