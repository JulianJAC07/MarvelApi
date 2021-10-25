//alert(' funcionaaaa!!!')

const form= document.querySelector('form');
const input= document.querySelector('input[name="heroe"] ');
const container= document.querySelector('#marvel-row');
const span=document.querySelector('.descripcion');


// Input => lo que teclea el usuario
// Enviar => capturar el click
// form => 'submit'


form.addEventListener('submit', (event)=>{
    event.preventDefault();//
    console.log(input.value);
    fetch(`http://localhost:3000/marvel?&name=${encodeURIComponent(input.value)}`).then((response)=>{ 
        response.json().then(data=>{console.log(data);
            
            for(let i=0;i<data.results.length;i++){
                console.log(data.results[i]);
                Character=data.results[i];
                for(let description in Character){
                    console.log(Character[description]);
                    span.innerHTML=Character.description;

                    for(let thumbnail in Character){

                   
                     container.innerHTML=`<div class="col"><img class="imagen" src="${Character.thumbnail.path}.${Character.thumbnail.extension} " alt="${Character.name} "></img></div>`
                    }
                   if(input.value != Character.name){
                       alert("No se de que antro sacaste ese nombre, aqui no pertenece");
                   }
                }
               
                
                
                
                 /*for(let  i=0;i<Character.lenght;i++){
                     
                 }*/
           }




         })
       
    })
})