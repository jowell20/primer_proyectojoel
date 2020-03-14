$(function(){
agregarpropietario();

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
