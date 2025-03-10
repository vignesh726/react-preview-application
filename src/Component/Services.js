

export const getFileFromOneDrive= async (accessToken)=>{
    const response=await fetch("https://graph.microsoft.com/v1.0/me/drive/root/children", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }})
        return await response?.json();
}

export const postFileFromOneDrive= async (accessToken,id)=>{
    const response= await fetch(`https://graph.microsoft.com/v1.0/me/drive/items/${id}/createlink`, {
        method: 'POST',
        headers: {
        'Content-Type' : 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            type : "embed",
            scope : "anonymous"
            })
      })
      return await response.json();
}