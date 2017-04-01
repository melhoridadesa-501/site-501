/**
 * Created by raphael on 01/04/17.
 */

$(document).ready(function() {
    $('form').on('submit', function(e){
        // validation code here
        e.preventDefault();
        var formularioEnviar = 1;
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
        if(formularioEnviar)
        {

        }
        console.log(formularioEnviar);
    });
});



/*
$(document).ready(function () {

    //Açao para o botao submit
    $('#contatoSubmit').submit(function(e){
        e.preventDefault(); // prevents default
        var formularioEnviar = 1;
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
        if(formularioEnviar)
        {

        }
        console.log(formularioEnviar);

    });

});
*/