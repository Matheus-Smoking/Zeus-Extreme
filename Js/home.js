function validar() {

    // Validar formulario 
    var nome = form1.nome.value;
    var sobrenome = form1.sobrenome.value;
    var email = form1.email.value;
    var tel = form1.tel.value;
    var sexo = form1.sexo.value;
    var nascimento = form1.nascimento.value;
    var cpf = form1.cpf.value;
    var cep = form1.cep.value;
    var numero = form1.numero.value;
    var complemento = form1.complemento.value;


    if (nome == "") {
        alert('Preencha o campo com seu nome');
        form1.nome.focus();
        return false;
    } else if (sobrenome == "") {
        alert('Preencha o campo com seu sobrenome');
        form1.sobrenome.focus();
        return false;
    } else if (email == "") {
        alert('Preencha o campo com seu email');
        form1.email.focus();
        return false;
    } else if (tel == "") {
        alert('Preencha o campo com seu Telefone');
        form1.tel.focus();
        return false;
    } else if (sexo == "") {
        alert('Preencha o campo com seu Sexo');
        form1.sexo.focus();
        return false;
    } else if (nascimento == "") {
        alert('Preencha o campo com seu nascimento');
        form1.nascimento.focus();
        return false;
    } else if (cpf == "") {
        alert('Preencha o campo com seu cpf');
        form1.cpf.focus();
        return false;
    } else if (cep == "") {
        alert('Preencha o campo com seu cep');
        form1.cep.focus();
        return false;
    } else if (numero == "") {
        alert('Preencha o campo com o Numero da sua residencia');
        form1.numero.focus();
        return false;
    } else {
        $(".enviar").addClass("active");
        $(".enviar").val("Enviado");
    }
}

function PriceChange() {
    var idx = document.querySelectorAll(".produtos").length;

    for (var i = 0; i < idx; i++) {
        document.querySelectorAll(".produtos")[i].addEventListener("click", function() {
            var price = this.querySelector(".produtos h3").innerHTML;
            document.querySelector(".conteudo .preco-parcela").innerHTML = price;

            // Parcelas
            var parcelas = "6x de R$";

            // Frete
            var frete = 2.48;

            // Preço
            var numPrice = Number(price.replace("6x", ""));

            // Preço total
            var valor_total = (numPrice + frete).toFixed(2);

            // Renderiza produto
            document.querySelector(".total strong").innerHTML = ' ' + parcelas + ' ' + valor_total;
        });
    }

    // Ofertas
    $('.ofertas').click(function() {
        $('h4').html('Selecionar essa oferta! ');
        $('h4', this).html('<p class="clicado">&#10003; OFERTA SELECIONADA!</p>');

    });
}

window.onload = function() {
    PriceChange();
};




$(document).ready(function() {

    //Tabs

    $(".boleto").hide();

    $(".tab-1").click(function() {
        $(".boleto").attr("style", "display:none");
        $(".cartao").attr("style", "display:block");
    });

    $(".tab-2").click(function() {
        $(".boleto").attr("style", "display:block");
        $(".cartao").attr("style", "display:none");
    });



    // colocar class active nos produtos
    $(".produtos").click(function(e) {
        e.preventDefault();

        var id = $(this).data("id");
        $(".produtos").removeClass("active");
        $(this).addClass("active");
    });

    // colocar class active nas tabs
    $(".tab").click(function(e) {
        e.preventDefault();

        var id = $(this).data("id");
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });
});


//Permirtir apenas numeros
function Numero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58)) return true;
    else {
        if (tecla == 8 || tecla == 0) return true;
        else return false;
    }
}

