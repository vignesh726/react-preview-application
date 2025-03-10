

export const getFileFromOneDrive= async ()=>{
    const response=await fetch("https://graph.microsoft.com/v1.0/me/drive/root/children", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer EwBoBMl6BAAUBKgm8k1UswUNwklmy2v7U/S+1fEAAev7M5Oldak2gR9wM9WcTnCX/8/7XBnrkWm72buKlhSc7mWq9rGaEC919unw9LJClrzgW1lc9euYglEKXjsk5DKcR1oLdVUgrUz1suY5h4te4kcmgS15dg6RoR5MfxnviMH7LyAPL5ENVjW2asmSk+7FgEFasDZxELSrR8Lvvs59A8lzu8d9h53vGYBuG9ZYXloqIbr+/0s6TbGQsNq1X0b7TomhHyXlZobBqdWyeB4Sgi6rsxhooF1EIHOW+K5aabC0H0KbYqIITCcp5wzykcj37mEVaA3l9Y1p2R9ybEFjkn6pnV8gD3lAMSwOANcfwSPwKWuL4IgeiS9SeZVvD74QZgAAELEg3QY4tm1Wz6ss6cK4nQ0wA0wEbcYsOaE7FDb+ksFLfwcO0bDGLgrrz+nvg6yOP3c2v7GXXDaPkeLrtXDvHySKkZpLaDBTQC67XwpEiuqO8BeYfqwKGNfKfht2FoabNQA6G3nFb2vtGSqMTIYeMd+8KRhr3R4zpWBc98fuGRU/FB0D4O9zKF7IiuvzomWBOAL28jFsTRsfWMGOR+x5lQTx+gNLBvk/eV0bhTU5F5xpnO1tGGSo62l9vVHOr7FDqqxG9mdZRvSKfneeqy2sa1o+Y6XaRJNA8H1GIwHWmleHdSG8LryRn4b518+1ivQx1IfQV/EG2+/Jc3TNh8sG+gFA4HlVqw815eefRimQAf655mO5TEYtXFxmOLdds0tNOeCBUhDdA7KyQgadM/2OQ+wb+xHxdAGzR3H4Vlr9j5ir771RBkUDJH/oVDw3nxM/M0id5szvx2B4g47A79dJX5xbMOlazm398ZvtIjIxj9WUNORMvJu1HYwm6xECxc/CY467LiB52HAB6qe60lncbwU19w+ZuEsdTN+ebITtiJTf5vZg3h6V+wrE9VFnK87n/xmlOehEVxpfoPcBopxVNFSAeqocvpnVSPG95UsRAPKr1jO+vCotWN+xaYs4HNL9psajxTn8r28NtCJ5xBV4ySrXL38kUcfwhWU3VQJadDHA5GhVhnsIPeJwJZRkioOa40Y3BZ6sLMXrwLiLSG2kO+PbwMOUihKV348MB2L0OyWw+RTNXlle99Q4KJNlRJf41lGGwM0z1n4TQ4rN2JHihzOSRLKNtdscrg4fZsVvWEhrvF7bsaotPZiGArXn+7ei1kZsqJXxMvvWvXrLpo253z9eJDYcSYtmbZ2QSTquXeMoVjWbQObym+Fmu1nI7B3IqmIawlgnUQ7KZ5Fy31biVGmZA4a04JTLSRUTg3e3LBbqO/Y+kkfRVPk75mGIiTh2z/T/BvayNy5pwbiuV4CelsU6XHBlaDixEnHlzrvPJiIgC+fGYI3kEe1qElGaJpFMe/EV97tnq2emC/PG1bR5E/mUXdBUJFMLZ5lerNZvRbBzkC02eLTqD7zcP6PjrZYjh8Z+S+cLivM+rOO0X8rqlPz6Y3gD`
        }})
        return await response?.json();
}

export const postFileFromOneDrive= async (id)=>{
    const response= await fetch(`https://graph.microsoft.com/v1.0/me/drive/items/${id}/createlink`, {
        method: 'POST',
        headers: {
        'Content-Type' : 'application/json',
          'Authorization': `Bearer EwBoBMl6BAAUBKgm8k1UswUNwklmy2v7U/S+1fEAAev7M5Oldak2gR9wM9WcTnCX/8/7XBnrkWm72buKlhSc7mWq9rGaEC919unw9LJClrzgW1lc9euYglEKXjsk5DKcR1oLdVUgrUz1suY5h4te4kcmgS15dg6RoR5MfxnviMH7LyAPL5ENVjW2asmSk+7FgEFasDZxELSrR8Lvvs59A8lzu8d9h53vGYBuG9ZYXloqIbr+/0s6TbGQsNq1X0b7TomhHyXlZobBqdWyeB4Sgi6rsxhooF1EIHOW+K5aabC0H0KbYqIITCcp5wzykcj37mEVaA3l9Y1p2R9ybEFjkn6pnV8gD3lAMSwOANcfwSPwKWuL4IgeiS9SeZVvD74QZgAAELEg3QY4tm1Wz6ss6cK4nQ0wA0wEbcYsOaE7FDb+ksFLfwcO0bDGLgrrz+nvg6yOP3c2v7GXXDaPkeLrtXDvHySKkZpLaDBTQC67XwpEiuqO8BeYfqwKGNfKfht2FoabNQA6G3nFb2vtGSqMTIYeMd+8KRhr3R4zpWBc98fuGRU/FB0D4O9zKF7IiuvzomWBOAL28jFsTRsfWMGOR+x5lQTx+gNLBvk/eV0bhTU5F5xpnO1tGGSo62l9vVHOr7FDqqxG9mdZRvSKfneeqy2sa1o+Y6XaRJNA8H1GIwHWmleHdSG8LryRn4b518+1ivQx1IfQV/EG2+/Jc3TNh8sG+gFA4HlVqw815eefRimQAf655mO5TEYtXFxmOLdds0tNOeCBUhDdA7KyQgadM/2OQ+wb+xHxdAGzR3H4Vlr9j5ir771RBkUDJH/oVDw3nxM/M0id5szvx2B4g47A79dJX5xbMOlazm398ZvtIjIxj9WUNORMvJu1HYwm6xECxc/CY467LiB52HAB6qe60lncbwU19w+ZuEsdTN+ebITtiJTf5vZg3h6V+wrE9VFnK87n/xmlOehEVxpfoPcBopxVNFSAeqocvpnVSPG95UsRAPKr1jO+vCotWN+xaYs4HNL9psajxTn8r28NtCJ5xBV4ySrXL38kUcfwhWU3VQJadDHA5GhVhnsIPeJwJZRkioOa40Y3BZ6sLMXrwLiLSG2kO+PbwMOUihKV348MB2L0OyWw+RTNXlle99Q4KJNlRJf41lGGwM0z1n4TQ4rN2JHihzOSRLKNtdscrg4fZsVvWEhrvF7bsaotPZiGArXn+7ei1kZsqJXxMvvWvXrLpo253z9eJDYcSYtmbZ2QSTquXeMoVjWbQObym+Fmu1nI7B3IqmIawlgnUQ7KZ5Fy31biVGmZA4a04JTLSRUTg3e3LBbqO/Y+kkfRVPk75mGIiTh2z/T/BvayNy5pwbiuV4CelsU6XHBlaDixEnHlzrvPJiIgC+fGYI3kEe1qElGaJpFMe/EV97tnq2emC/PG1bR5E/mUXdBUJFMLZ5lerNZvRbBzkC02eLTqD7zcP6PjrZYjh8Z+S+cLivM+rOO0X8rqlPz6Y3gD`
        },
        body: JSON.stringify({
            type : "embed",
            scope : "anonymous"
            })
      })
      return await response.json();
}