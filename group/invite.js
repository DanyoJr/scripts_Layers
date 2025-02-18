const axios = require('axios')

try{
axios.get(`https://api.layers.digital/v1/groups`,{
    headers:{

        'content-type' : 'application/json',
        'community-id' : 'sophia-2786-4',    
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjYzY2U0MjViMDhhM2E4NTMxNjM4YWJhIiwic3ViIjoiNjRjYTY2NzIzMGJkMzkwMDE3NzgyYmVkIiwiaXNzIjoiaHR0cHM6Ly9pZC5sYXllcnMuZGlnaXRhbCIsImlhdCI6MTcxNTI2NjU5NzU0MH0.QuHl8KxrkPTV1QPvGBajbUl4mMslazm8jNSQJx4m20M' ,
        //'secure' : true,

    }
})
.then(response => {
    const valor = response.data
    for(let i = 0; i < valor.length; i++ ){

        let val = valor[i].id;
        let val2 = valor[i].name;

        if(val2 == '602 - C4'){

        console.log(`deu certo, ${val}`)
        axios.post(`https://api.layers.digital/v1/groups/${val}/invite`,{

        },{
            headers:{

                'content-type' : 'application/json',
                'community-id' : 'sophia-2786-4',    
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjYzY2U0MjViMDhhM2E4NTMxNjM4YWJhIiwic3ViIjoiNjRjYTY2NzIzMGJkMzkwMDE3NzgyYmVkIiwiaXNzIjoiaHR0cHM6Ly9pZC5sYXllcnMuZGlnaXRhbCIsImlhdCI6MTcxNTI2NjU5NzU0MH0.QuHl8KxrkPTV1QPvGBajbUl4mMslazm8jNSQJx4m20M' ,
                //'secure' : true,
        
            }
        })
        }
    }


})
}catch(err){
    console.log(err);
}
