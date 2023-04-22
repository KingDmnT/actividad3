<script>
var expr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

$(document).ready(function(){        
    $("#bEnviar").click(function(){
        var nombre = $("#itNombre").val();
        var correo= $("#itMail").val();
        var asunto = $("#itAsunto").val();
        var rut = $("#itRut").val();
        
        if(rut == ""){
            $("#mensaje4").fadeIn();
            return false;
        }else{
            $("#mensaje4").fadeOut();
        if(nombre == ""){
            $("#mensaje1").fadeIn();
            return false;
        }else{
            $("#mensaje1").fadeOut();
            if(correo == "" || !expr.test(correo)){
                $("#mensaje2").fadeIn("");
                return true;
            }else{
                $("#mensaje2").fadeOut();
                if(asunto == ""){
                    $("#mensaje3").fadeIn("");
                    return true;
                }else{
                    $("#mensaje3").fadeOut();
                }
            }
        }
    });
    });
</script>