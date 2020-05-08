var usuario = document.getElementById('usuario');
var contraseña = document.getElementById('contraseña');
var dni = document.getElementById('DNI');
var direccion = document.getElementById('direccion');
var correo = document.getElementById('correo');
var boton = document.getElementById('boton');
var cuadro = document.getElementById('cuadro');

var expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


boton.onclick=function(){


   if( usuario. value === null || usuario.value === '') {
   alert("coloque su usuario");}

   if( contraseña. value === null || contraseña.value === '') {
   alert("coloque su contraseña");}

   if((dni. value. length !=7)||(isNaN(dni.value))) {
   alert("ingrese un dni válido");}

   if( direccion. value === null || usuario.value === '') {
   alert("coloque su direccion");}

   if (!expresion.test(correo.value)) {
   alert("ingrese un correo correcto");
   }







  else {(alert("ingreso correcto"))||(cuadro.style.display="none");}

}
