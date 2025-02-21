const axios = require('axios');

try{
axios.get(`https://api.layers.digital/v1/users`, {
        headers: {
          'Content-Type': 'application/json',
          'community-id': 'junao-school',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjc4ZmU5NzMwMTg2ZjI0NDVmOWE2ZmFmIiwic3ViIjoiNjRjYTY2NzIzMGJkMzkwMDE3NzgyYmVkIiwiaXNzIjoiaHR0cHM6Ly9pZC5sYXllcnMuZGlnaXRhbCIsImlhdCI6MTczNzQ4NDY1OTI3MH0.FuqZ7L5hMpvoO4V2CgPyN3X9pCEAA5RE6pP8Gy8IUgk',
        },
        params: {
          page: 0, // Parâmetro de paginação
          limit: 10, // Ajuste o número de itens por página conforme necessário
        },
      }).then(response => { 
        let a = response.data

        for(let i = 0; i < a.length; i++){


            if(a[i].status == 'INACTIVE'){
                console.log(a.name)
            }
            console.log(a)
        }
        
    })

axios.post(`https://api.layers.digital/v1/users/674e163365c461486e557b04/activate`,{

},{
            headers:{
        
                'Content-Type' : 'application/json',
                'community-id' : `junao-school`,    
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjc4ZmU5NzMwMTg2ZjI0NDVmOWE2ZmFmIiwic3ViIjoiNjRjYTY2NzIzMGJkMzkwMDE3NzgyYmVkIiwiaXNzIjoiaHR0cHM6Ly9pZC5sYXllcnMuZGlnaXRhbCIsImlhdCI6MTczNzQ4NDY1OTI3MH0.FuqZ7L5hMpvoO4V2CgPyN3X9pCEAA5RE6pP8Gy8IUgk' ,
                //'secure' : true,
        
            }
        })


}catch(err){
    console.log(err)
}
