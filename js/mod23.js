
function ajx_man(){

// guardare le funzioni submit e serializearray per recuperare i valori del form



    var man = $("form").serialize();
    console.log(x);


    $.ajax({
        type: "POST",
        url: "../api/man_script.php",
        data: man,
        dataType: "json",
        success: function(data)
        {
            console.log(data);
            switch(data.response_code)
            {
                case '200':
                    alert('Modello inserito correttamente!');
                    break;
                case '401':
                    alert("Errore nell'inserimento del modello!");
                    break;
                case '400':
                    alert("Credenziali inserite errate: utente non presente nel database.");
                    break;
                default:
                    alert(data.response_code);
                    break;
            }

        },

    });

}

