function encriptar_texto(encriptar){
    var texto= document.getElementById('var_texto').value;
    var text_copy=' ';
    if(encriptar=='Encriptar'){
      text_copy= texto
      .replace(/i/g, 'imes')        .replace(/a/g, 'ai') 
      .replace(/e/g, 'enter')        .replace(/o/g, 'ober') 
      .replace(/u/g, 'ufat') ;
      console.log('clave: '+texto+ ' encriptacion: ' + text_copy);}
    else{
      if(encriptar=='Desencriptar'){
        text_copy= texto
        .replace(/ufat/g, 'u')         .replace(/ober/g, 'o') 
        .replace(/enter/g, 'e')         .replace(/ai/g, 'a') 
        .replace(/imes/g, 'i');
        console.log('clave: '+texto+ ' desencriptacion: ' + text_copy);}
      }
    return          text_copy;}

function verificar_tarea(operacion){
          var tex=document.getElementById('var_texto').value;
          var aux='';
    if(tex.trim()==""){   
          alert('El contenido esta vacio');        }
          else{
          aux=encriptar_texto(operacion);
          document.getElementById('mensaje').innerText=aux;
          ocultar_elemC('rectangle_mensaje');
          ocultar_elemC('rectangle_img');
          mostrar_elemC('cifrado');
          }}


        /*Aunque se probo un conjunto de palabras no se observaron fallos 
        se ordenaron las encriptaciones con el fin de que una no pise a la otra como pasaba
         con los reemplazos de a por ai y luego la i por imes 
         y el proceso inverso se realizo en el orden inverso al de encriptar
         Aun asi no se descarta que existan palabras sensibles 
         que no se comporten adecuadamente al desencriptarla por la palabra original*/
         function copiar_texto(){
          var texto= document.getElementById('var_texto').value;
         }
        function mostrar_elemC(cl){
          let elements = document.getElementsByClassName(cl);
          for (let i = 0; i < elements.length; i++) {
              elements[i].style.display = "inline-block";
          }
      }
         function ocultar_elemC(cl){
          let elements = document.getElementsByClassName(cl);
          for (let i = 0; i < elements.length; i++) {
              elements[i].style.display = "none";
          }
      }
     