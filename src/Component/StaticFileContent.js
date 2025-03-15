
import React, { useState} from 'react';
 import {postFileFromData} from "./Services"
import './StaticFileContent.css';

const StaticFileContent = (props) => {
  const [scrFile,setscrFile]=useState(null);
  const [isPreView,setisPreView]=useState(false);  

const LoadPreview=(url)=>{
    setisPreView(true);
    postFileFromData(props.accessToken,url).then(data => {
        if (data.error) {
        console.log('Error:', data.error);
        } else {
        setscrFile(data);
        }
    }).catch(error=>{
      setscrFile(null)
    });    
}
    return(<>
    <div style={{display:"flex"}}>
    <div style={{width:"40%"}}>
    {((props.files)&&props.files?.length>0)?
      <table>
  <thead>
    <tr>
    <th>File Name</th>
    <th>File Type</th>
    <th>Click Privew </th>
    </tr>
  </thead>
  <tbody>    
    {
      props.files?.map((x,index)=><tr key={index}><td>{x.Name} </td><td>{x.Name.split('.')[1]}</td> <td><button type="button" onClick={()=>LoadPreview(x["odata.id"])}>Click to Preview</button></td></tr>
    )}    
   </tbody>
  <tfoot>   
  </tfoot>
</table>:<>No Document Found</>}
    </div>
    <div style={{width:"60%", height:"70vh"}}>
    {isPreView &&<iframe width={"100%"} height={"100%"} src={scrFile&&scrFile}></iframe>}
    </div>
    </div>
    </>);
}
export default StaticFileContent