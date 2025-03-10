import {useEffect, useState} from "react";
import {getFileFromOneDrive,postFileFromOneDrive} from "./Services"
import './StaticFileContent.css';

const StaticFileContent = () => {
    const [scrFile,setscrFile]=useState(null);
    const [isPreView,setisPreView]=useState(false);
    const [onedriveFile,setonedriveFile]=useState(null);

useEffect(()=>{
    getFileFromOneDrive().then(data => {
        if (data.error) {
          console.log('Error:', data.error);
        } else {
            const filteredFiles = data.value.filter(file =>
                file.name.endsWith('.xlsx') || file.name.endsWith('.pdf') || file.name.endsWith('.docx')
              );
              setonedriveFile(filteredFiles)
        }
      });
},[])

const LoadPreview=(id)=>{
    setisPreView(true);
    postFileFromOneDrive(id).then(data => {
        if (data.error) {
        console.log('Error:', data.error);
        } else {
        console.log(data)
        setscrFile(data?.link?.webUrl);
        }
    });
}

  
    return(<>
    <div style={{display:"flex"}}>
    <div style={{width:"40%"}}>
    <table >
    <th>File Name</th>
    <th>File Type</th>
    <th>Click Privew </th>
    {onedriveFile?.map((x)=><tr><td>{x.name} </td><td>{x.name.split('.')[1]}</td> <td><button type="button" onClick={()=>LoadPreview(x.id)}>Click to Preview</button></td></tr>)}
    </table>
    </div>
    <div style={{width:"60%", height:"70vh"}}>
    {isPreView &&<iframe width={"100%"} height={"100%"} src={scrFile}/>}
    </div>
    </div>
    </>);
}
export default StaticFileContent