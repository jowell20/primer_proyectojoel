$(function(){
  $('.contenedor_derecha2').hide();
  $('#tablam').hide();
agregarpropietario();
addmascota();
listarmascota();
});


function agregarpropietario(){
$("#bot").on('click', function(e){

  e.preventDefault();
  var nombrep = $("#namep");
  var apellidop = $("#last_name");
  var direccionp = $("#address");
  var telefonop = $("#phone");
  if(nombrep.val()=="" || apellidop.val() == "" || direccionp.val()=="" || telefonop.val()=="")
  {
    alert("Debe llenar todos los campos")
  }else
  {
    $('#tablep').append("<tr>" +
    "<td>" + nombrep.val() + "</td>" +
    "<td>" + apellidop.val() + "</td>" +
    "<td>" + direccionp.val() + "</td>" +
    "<td>" + telefonop.val() + "</td>" +
   "<td><a> <button type='submit' class='btn btn-primary AgregarMascota' id='et' > Agregar Mascota</button></a></td>" +   "</tr>")
    }
}  )
}
function addmascota(){

$('#tablep').on('click' , '.AgregarMascota' , function(e)
{
e.preventDefault();
alert('entro');
$('.contenedor_derecha2').show();

var tr = $(this).closest('tr');

var tdpropietario = tr.children("td:nth-child(1)").html();
  $('#labelPropietario').html(tdpropietario);


});
}
 function listarmascota(){
  $('#botMascota').on('click' ,function(e){
    e.preventDefault();
   $('#tablam').show();
   e.preventDefault();
     var nombrem = $("#mascota1");
    var tipom = $("#mascota2");
    var fecham = $("#mascota3");
    if( nombrem.val()=="" || tipom.val()==""||fecham.val()==""){
      alert("debe de llenar todos los espacios vacios");

    }else{
      $('#tablam').append("<tr>" +
      "<td>" + nombrem.val() + "</td>" +
      "<td>" + tipom.val() + "</td>" +
      "<td>" + fecham.val() + "</td>")
    }
  });
}
