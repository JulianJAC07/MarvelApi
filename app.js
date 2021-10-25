const express = require('express');
const app = express();
const hbs =require('hbs');
const path = require('path');
const marvel= require('./servicio')
const {response}= require('express');

const partialPath= path.join(__dirname,'templates/partials');
const publicPath= path.join(__dirname,'public');// linekamos ell css y js sestaticos a los hbs
const ViewsPath = path.join(__dirname, 'templates/views');//creamos el path para que vaya a views


hbs.registerPartials(partialPath);
app.use(express.static(publicPath));
app.set('view engine', 'hbs');// con esto ke decimos que utilice hbs
app.set('views',ViewsPath);


app.get('',(req,res)=>{
   res.render('index');
    console.log('alguien entro')
   // res.send({heroe: 'iron man' }) //creamos la ruta principal
    
})
//})

app.get('/marvel',(req,res)=>{ // creamos ruta de pag contacto
    const heroe=req.query.name;
  //  res.render('contacto')
  
  marvel.conexion(heroe,(error,data)=>{
      if (error){
          res.send({error: "algo ocurrio"});
      }else{
          res.send(data);
        }
  })
   console.log(heroe);
  
  

})


app.listen(3000, () => { console.log('La conexión fue exitosa')  })