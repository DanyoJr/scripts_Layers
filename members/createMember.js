const axios = require('axios')

try{
    for(let i = 14; i < 25; i++){
        axios.post(`https://api.layers.digital/v1/members`,{
                'name': `aluninho${i}`,
                'alias': `naoepode${i}`,

        },{
            headers:{
        
                'content-type' : 'application/json',
                'community-id' : 'demo-escola',    
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjZmNmY0MzI5YzljZDA0ZjY3YjBiMDI2Iiwic3ViIjoiNjRjYTY2NzIzMGJkMzkwMDE3NzgyYmVkIiwiaXNzIjoiaHR0cHM6Ly9pZC5sYXllcnMuZGlnaXRhbCIsImlhdCI6MTcyNzQ2MDQwMjIwM30.KdBnJk_5wEm3wvdWkNoPyHn0CTQEIfWwaWUhyYFWoqo' ,
                //'secure' : true,
        
            }
        })
    }
}catch(err){
    console.log(err);
}
