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
        /*Aunque se probo un conjunto de palabras no se observaron fallos          se ordenaron las encriptaciones con el fin de que una no pise a la otra como pasaba
         con los reemplazos de a por ai y luego la i por imes          y el proceso inverso se realizo en el orden inverso al de encriptar
         Aun asi no se descarta que existan palabras sensibles          que no se comporten adecuadamente al desencriptarla por la palabra original*/

function verificar_tarea(operacion){
          var tex=document.getElementById('var_texto').value;
          var aux='';
    if(tex.trim()==""){ mensaje_flotante('mensaje_vacio');
      }else{
          aux=encriptar_texto(operacion);
          document.getElementById('mensaje').innerText=aux;
         visibilidad_elemC('rectangle_mensaje','none');
         visibilidad_elemC('rectangle_img','none');
         visibilidad_elemC('cifrado','flex');
          }}

function volver(){
  document.getElementById('mensaje').innerText=" ";
  visibilidad_elemC('rectangle_mensaje','flex');
  visibilidad_elemC('rectangle_img','flex');
  visibilidad_elemC('cifrado','none');
  vaciarTextarea();
}

function mensaje_flotante(id) {
      const mensajeFlotante = document.getElementById(id);
    mensajeFlotante.style.display = 'flex';
    setTimeout(() => {
      mensajeFlotante.style.display = 'none';
    }, 500);}   


          function copiar_texto() {
            const texto = document.getElementById('mensaje').innerText;
            navigator.clipboard.writeText(texto).then(() => {
              mensaje_flotante('mensajeFlotante')}).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
            vaciarTextarea();
            }
            function vaciarTextarea(){
              const textarea = document.getElementById('var_texto');
              textarea.value = '';
              textarea.placeholder = 'ingrese el mensaje a encriptar';}
            function visibilidad_elemC(cl,vis){
          let elements = document.getElementsByClassName(cl);
          for (let i = 0; i < elements.length; i++) {
              elements[i].style.display = vis;
          }
      }
/*-----------------------------------*/
function applyResponsiveStyles() {
  const zoomLevel = window.devicePixelRatio;
  const mediaQuery = window.matchMedia('(max-width: 600px)');

  if ((zoomLevel > 1) && (zoomLevel<=1.75)) {
    document.documentElement.style.fontSize = '12px';}
    else{
      if (zoomLevel > 1.75) {
        document.documentElement.style.fontSize = '10px';}
        else{
          if (zoomLevel >= 2) {
            document.documentElement.style.fontSize = '8px';}
          
        }
    }
   }
  detectZoom();
  function detectZoom() {
    const zoomLevel = Math.round(window.devicePixelRatio * 100);
    console.log(`Zoom actual: ${zoomLevel}%`);}
    window.addEventListener('resize', applyResponsiveStyles);