const axios = require('axios')

let communityId = [];

for(let h = 0; h < communityId.length; h++){
axios.get(`https://api.layers.digital/v1/tags`, {
    headers:{

        'content-type' : 'application/json',
        'community-id' : `${communityId[h]}`,    
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjYzY2U0MjViMDhhM2E4NTMxNjM4YWJhIiwic3ViIjoiNjRjYTY2NzIzMGJkMzkwMDE3NzgyYmVkIiwiaXNzIjoiaHR0cHM6Ly9pZC5sYXllcnMuZGlnaXRhbCIsImlhdCI6MTcxNTI2NjU5NzU0MH0.QuHl8KxrkPTV1QPvGBajbUl4mMslazm8jNSQJx4m20M' ,
        //'secure' : true,

    }
})
.then(response =>{
    const valor = response.data;
    let tagId = [];
    

    for(let i = 0; i < valor.length; i++){
    let a = valor[i]._id;
    tagId.push(a);

        axios.delete(`https://api.layers.digital/v1/tags/${tagId[i]}`,{
            headers:{

            'content-type' : 'application/json',
            'community-id' : `${communityId[h]}`,    
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjYzY2U0MjViMDhhM2E4NTMxNjM4YWJhIiwic3ViIjoiNjRjYTY2NzIzMGJkMzkwMDE3NzgyYmVkIiwiaXNzIjoiaHR0cHM6Ly9pZC5sYXllcnMuZGlnaXRhbCIsImlhdCI6MTcxNTI2NjU5NzU0MH0.QuHl8KxrkPTV1QPvGBajbUl4mMslazm8jNSQJx4m20M' ,
            //'secure' : true,
        
            }
        })

    };

    console.log(tagId);
    
    })
}
