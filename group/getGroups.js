const axios = require('axios')

try{
    axios.get(`https://api.layers.digital/v1/groups`,{
        headers:{
    
            'content-type' : 'application/json',
            'community-id' : 'sophia-2786-3',    
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjZmNmY0MzI5YzljZDA0ZjY3YjBiMDI2Iiwic3ViIjoiNjRjYTY2NzIzMGJkMzkwMDE3NzgyYmVkIiwiaXNzIjoiaHR0cHM6Ly9pZC5sYXllcnMuZGlnaXRhbCIsImlhdCI6MTcyNzQ2MDQwMjIwM30.KdBnJk_5wEm3wvdWkNoPyHn0CTQEIfWwaWUhyYFWoqo' ,
            //'secure' : true,
    
        }
    })
    .then(response => {

        let test = response.data;

        console.log(test.length);
    })
}catch(err){
    console.log(err);
}
