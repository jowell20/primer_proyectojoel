$(function(){
editar_dos();
guardar_editado2();
$('#bote').hide();


});

function editar_dos(){

  $("#tablap").on('click' , '.ver_detalle' ,function(e) {

    e.preventDefault();
  var tr = $(this).closest('tr');
    var nombrep = tr.children("td:nth-child(1)");
    var apellidop = tr.children("td:nth-child(2)");
    var direccionp = tr.children("td:nth-child(3)");
    var telefonop = tr.children("td:nth-child(4)");
var tdOpciones = tr.children("td:nth-child(5)");

    var vnombre = nombrep.html();
    var vapellido = apellidop.html();
    var vdireccion = direccionp.html();
    var vtelefono = telefonop.html();


    document.getElementById("textnombre").value= vnombre;
    document.getElementById("textapellido").value=vapellido;
    document.getElementById("textdireccion").value=vdireccion;
    document.getElementById("texttelefono").value=vtelefono;
      tdOpciones.html("<button class='btn btn-primary guardar' id='but' >Guardar </button>");


});
}
function limpiar (){

  document.getElementById("textnombre").value="";
  document.getElementById("textapellido").value=""  ;
  document.getElementById("textdireccion").value="";
  document.getElementById("texttelefono").value="";
}

function guardar_editado2(){
  var dd = 'dd';
  $('#bote').on('click',function(e){

e.preventDefault();
  });
$('#tablap').on('click' , '#but' , function(e){
   e.preventDefault();
var nnombre = document.getElementById("textnombre").value;

var napellido = document.getElementById("textapellido").value;
var ndireccion = document.getElementById("textdireccion").value;
var ntelefono = document.getElementById("texttelefono").value;

  var tr = $(this).closest('tr');
  var tdnombre = tr.children("td:nth-child(1)");
  var tdapellido = tr.children("td:nth-child(2)");
  var tddireccion = tr.children("td:nth-child(3)");
  var tdtelefono = tr.children("td:nth-child(4)");
  var tdOpciones = tr.children("td:nth-child(5)");
      tdOpciones.html("<button class='btn btn-primary ver_detalle' id='bet' > ver detalle </button>");

     tdnombre.html(nnombre);
      tdapellido.html(napellido);
       tddireccion.html(ndireccion);
        tdtelefono.html(ntelefono);
limpiar();

});
}
