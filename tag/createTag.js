const axios = require('axios')

try{
    for(let h = 0; h < 150; h++){
        axios.post(`http://localhost:8009/v1/tags`,{
            'name' : `tagTeste${h}`
        }, {
            headers:{

                'content-type' : 'application/json',
                'community-id' : `test`,    
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjdhYTc2ZDhjNWE0NzAwNDA0MGY3MGJlIiwic3ViIjoiNjc5MzE4MDMzMDgxMjhiNWRhZWIzNDM3IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDkwIiwiaWF0IjoxNzM5MjI0NzkyOTQ2fQ.9nzfUgX7nOBLuL_ZXLZS_ZZ3-fKl6BjKBJj2K5_Hkec' ,
                //'secure' : true,

            }
        })
    }
}catch(err){
    console.log(err);
}
