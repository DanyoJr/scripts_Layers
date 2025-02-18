const fs = require('fs');
const axios = require('axios');

//O Json é para casos onde há várias comunidades, então é feito um JSON com apenas os ids
const Json = fs.readFileSync('/Users/danielyoneshigejunior/Desktop/scripts/batista.json', 'utf-8')

//O Json é passado para Array
const array = JSON.parse(Json);

//Aqui é usado um MAP para filtrar tirar as {} e deixar apenas os id das comunidades, se não ficaria {'community' : 'ID'}
const finalArr = array.map(teste => teste.community)

//Aqui é feito o tratamento de exceções com Try/Catch
try{
    let cmt = finalArr;
    let app = ['brighteduc'];

    //Aqui existe esse LOOP para repetir o processo de instalar o app em todas as comunidades que tiverem no array cmt
    for(let i = 0; i < cmt.length; i++){
        axios.post(`https://api.layers.digital/v1/apps/${app[0]}/install`, {

        },{
            headers:{
        
                'Content-Type' : 'application/json',
                'community-id' : `${cmt[i]}`,    
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJraW5kIjoiYXV0aDphY2NvdW50IiwianRpIjoiNjc4ZmU5NzMwMTg2ZjI0NDVmOWE2ZmFmIiwic3ViIjoiNjRjYTY2NzIzMGJkMzkwMDE3NzgyYmVkIiwiaXNzIjoiaHR0cHM6Ly9pZC5sYXllcnMuZGlnaXRhbCIsImlhdCI6MTczNzQ4NDY1OTI3MH0.FuqZ7L5hMpvoO4V2CgPyN3X9pCEAA5RE6pP8Gy8IUgk' ,
                //'secure' : true,
        
            }
        })
        
   }
}catch(err){
    console.log(err);
}


