/**
 * Created by raphael on 01/04/17.
 */

//sinaliza os campos em branco
//formularioEnviar = 1 => envia a form
$(document).ready(function () {

    //Açao para o botao submit
    $('#contatoSubmit').click(function(e){
        var formularioEnviar = 1;
        e.preventDefault(); // prevents default
        $('form input, form select, form textarea').each(
            function(index){
                var input = $(this);
                $( this ).css({
                    "background-color": ""
                });
                //alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('id') + 'Value: ' + input.val() + 'Required' + input.attr('required'));
                if(input.val() == '' && input.attr('required') == 'required')
                {
                    formularioEnviar = 0;
                    $( this ).css({
                        "background-color": "red"
                    });
                }
            }
        );
        //console.log(formularioEnviar);

    });

});