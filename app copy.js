const express = require('express');
const app=express();
const path=require('path');
const hbs =require('hbs');
const weather=require('./Clase 17_weather');
const { response } = require('express');
const publipath= path.join(__dirname, '../public');//que use este directorio y muestre los archivos de manera estatica
const viewPath = path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');

console.log(publipath);


console.log(__dirname);
console.log(__filename);

app.use(express.static(publipath));
app.set('view engine', 'hbs');//le decimos que vamos a usar un motor template que es hbs,  hbs = handlebars
app.set('views',viewPath);
hbs.registerPartials(partialsPath); // le decimos a handlebars que vamos a usar partials

//app.get('',(req,res)=>{ 
//    res.send('pagina principal')
//})
app.get('',(req,res)=>{
    res.render('index',{
        h1: "creando un servido con express",
        p:"un servidor con expresss nos permite devolver archivos y tambien archivos mediante un motor de templates",
        autor: "juan perez"
    });// busca la carpeta views por defecto(se puede cambiar)
})


app.get('/nosotros',(req,res)=>{// req:lo que resivo --- res: lo que devuelvo // con get definimos rutas 
    res.render('pagina de nostros');
});
// hago las siguientes pruebas
app.get ('/prueba',(req,res)=>{res.send({nombre:"jucho"})});
app.get('/prueba1',(req,res)=>{res.send('<h1>titulo primcipal</h1>')});
app.get('/prueba2',(req,res)=>{res.send('[0,1,2,3] ')})

app.get("/productos",(req,res)=>{
    res.render('productos',{
        productos:["manteca", "celulares","extremidades del dueño del celular","harina","coca XD"],
     } );
})

/*app.get('/weather',(req, res)=>{
    console.log(req.query);// le mandamos variables y abre un objeto en req.query con los datos que le dimos en la url x ejem localhost3000/weather?nombre=juan&apellido=perez respoint=ruta (app.get)
    console.log(req.query.nombre);
    if(req.query.location){
        console.log(req.query.location);
        res.send({sucess:true, message:"usted envio una location"})
    }else{
        res.send({sucess:true,message: "tiene que enviar una location... gatin"})

    }
    res.send('pagina de weather')
})*/


//esto pertenece a clase 20
app. get('/consulta',(req,res)=>{
    res.render('consulta');
})


app.get('/weather',(req,res)=>{
    const location=req.query.location;
    weather.getWeatherData(location,(error,data)=>{
        if (error){
            res.send({error: "algo ocurrio"});
        }else{
            res.send(data);
        }
    })
    console.log("alguien entro a esta ruta")
    console.log(req.query.location);
   
  //res.send({temperatura:20})
})







app.listen(3000, ()=>{// 3000 puerto que muestra 
    console.log("la conexion fue exitosa")
} ) //localhost:3000/ .... (lo que escriba de nombre de la ruta)

//clase 19 repeticion conectada a la  18 repeticion ....





