 

/*const
const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=730cb3e2c1ba6fc931249fa5cad4589a&hash=3F5AABD3FAD20C87C70AE91F2784FCE7 ';
const getPosts = () => {
 request({ url, json: true }, (error, response) => {
 if (error) {
 console.log('Ocurrió un error', error);
 } else {
 console.log(response.body);
 }
 });
};
module.exports = {
 getPosts
}

getPosts();
*/  
const request = require('postman-request');
const privatekey="0338fd927930882ae3b9fe2627d770fc7b59b30e";
const publickey='730cb3e2c1ba6fc931249fa5cad4589a'

const conexion=(heroe,callback)=>{
    const hash='3F5AABD3FAD20C87C70AE91F2784FCE7';
   const url= `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=730cb3e2c1ba6fc931249fa5cad4589a&hash=3f5aabd3fad20c87c70ae91f2784fce7&name=${encodeURIComponent(heroe)}`;
    request(/*{*/url,/*json:true }, */function (error, response) {
        
 
        if (error) {
        callback('Ocurrió un error', undefined);
        } else {
        const data=JSON.parse(response.body);
        //console.log(response.body);
        console.log(data.data.results);
        if(data.error){
            callback(data.error.info,undefined);
        }else{
            callback(undefined,data.data);
        }
    }
       
        
});
        
      

}

module.exports = { conexion
}

