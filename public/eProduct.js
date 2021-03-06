const deleteProduct=(id)=>{
    const url=`/backend/editProduct/deleteProduct/${id}`;
    fetch(url, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': true
      },
    }).then((response)=>{window.location.href=response.url}).catch((err)=>{console.log(err)});
}

const updateProduct=(id)=>{
    const url=`/backend/editProduct/updateProduct/${id}`; 
    fetch(url, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': true
      },
    }).then((response)=>{window.location.href=response.url}).catch((err)=>{console.log(err)});
}
