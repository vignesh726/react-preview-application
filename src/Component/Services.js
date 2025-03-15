

export const getFileFromSharepoint= async (accessToken)=>{
  const folderUrl = '/sites/ColdStorageGreenhouse/Shared Documents/TestFolder';
  const response = await fetch(`https://dealvps.sharepoint.com/sites/ColdStorageGreenhouse/_api/web/GetFolderByServerRelativeUrl('${folderUrl}')/Files`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json',
    },
  });
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

export const postFileFromData = async (accessToken, url) => {
  console.log(url)
  try {
    const response = await fetch(url + "/ListItemAllFields?$select=ServerRedirectedEmbedUri&$expand=ServerRedirectedEmbedUri", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const contentType = response.headers.get("Content-Type");
    let data;
    // Check if the response content is XML
    if (contentType && contentType.includes("xml")) {
      const xmlText = await response.text();
      console.log("XML Response:", xmlText);  // Log raw XML response
      const parser = new DOMParser();
      // Parse the XML text into a DOM object
      const xmlDoc = parser.parseFromString(xmlText, "application/xml");
      // Check for parsing errors
      if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
        throw new Error("Error parsing XML");
      }
      // Extract the 'ServerRedirectedEmbedUri' attribute value
      const embedUriElement = xmlDoc?.querySelector('ServerRedirectedEmbedUri');
      if (embedUriElement) {        
        // Assuming 'ServerRedirectedEmbedUri' is an attribute, get its value
        data = embedUriElement.textContent || embedUriElement?.getAttribute('ServerRedirectedEmbedUri');
      } else {
        throw new Error("ServerRedirectedEmbedUri not found in the XML response.");
      }
    } else {
      data = await response?.json(); // Parse JSON if the response is already in JSON format
    }


    return data;
  } catch (error) {
    console.error("Error fetching file data:", error);
    throw error;
  }
}


