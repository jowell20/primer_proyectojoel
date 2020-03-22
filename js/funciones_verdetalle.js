$(function(){

  $('#tablaMascota').hide();


$("#cdere").hide();
ver_detalle();
guardarEditado();
});

function ver_detalle(){

  $('#tablap').on('click', '.ver_detalle', function(e) {
    alert(" aqui si");
    $('.conte_derecho').show();
    var tr = $(this).closest('tr');
      var nombrep = tr.children("td:nth-child(1)");
      var apellidop = tr.children("td:nth-child(2)");
      var direccionp = tr.children("td:nth-child(3)");
      var telefonop = tr.children("td:nth-child(4)");

    var tdOpciones = tr.children("td:nth-child(5)");

      var vnombre = nombrep.html();
      nombrep.html("<input type='text' id='txtnombres' value='" + vnombre + "'/>");

      var vapellido = apellidop.html();
      apellidop.html("<input type='text' id='txtapellidos' value='" + vapellido + "'/>");

      var vdireccion = direccionp.html();
      direccionp.html("<input type='text' id='txtdireccions' value='" + vdireccion + "'/>");

      var vtelefono = telefonop.html();
      telefonop.html("<input type='text' id='txttelefonos' value='"+ vtelefono + "'/>");


      tdOpciones.html("<button class='btn btn-primary guardar' id='bet' >Guardar </button>");


});
}





function guardarEditado(){
    $('#tablap').on('click', '#bet', function(e){

        e.preventDefault();
          alert('sddsda');
        var tr = $(this).closest('tr');
        var tdnombre = tr.children("td:nth-child(1)");
        var tdapellido = tr.children("td:nth-child(2)");
        var tddireccion = tr.children("td:nth-child(3)");
        var tdtelefono = tr.children("td:nth-child(4)");
        //var tdOpciones = tr.children("td:nth-child(6)");

        nuevonombre = tdnombre.children("#txtnombres").val();
        tdnombre.html(nuevonombre);
        nuevoapellido = tdapellido.children("#txtapellidos").val();
        tdapellido.html(nuevoapellido);
        nuevodireccion = tddireccion.children("#txtdireccions").val();
        tddireccion.html(nuevodireccion);
        nuevotelefono= tdtelefono.children("#txttelefonos").val();
        tdtelefono.html(nuevotelefono);

          });
        }

/*      var tr = $("#tabladd").closest('tr');
  var nombrep = $("#textnombre");
  var apellidop = $("#textapellido");
  var direccionp = $("#textdireccion");
  var telefonop = $("#texttelefono");

var nombre = tdnombre.html();
      tdnombre.html(nombre );
      var apellido = tdapellido.html();
      tdapellido.html(apellido );
      var direccion = tddireccion.html();
      tddireccion.html(direccion );
      var telefono = tdtelefono.html();
      tdtelefono.html(telefono );*/

          /*  $('#tablap').append(
            "<td>" + nombrep.val() + "</td>" +
             "<td>" + apellidop.val() + "</td>" +
             "<td>" + direccionp.val() + "</td>" +
             "<td>" + telefonop.val() + "</td>" )
             nuevosocio = tdsocio.children("input[type=text]").val();
       tdsocio.html(nuevosocio);
*/
