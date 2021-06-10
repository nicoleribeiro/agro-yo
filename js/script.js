function mostrarForm() {
    var btn = document.getElementById('btn_form');
    var form = document.getElementById('form-login');
    var body = document.getElementById('escurecer');

    btn.addEventListener('click', function () {
        if (form.style.visibility != 'visible') {
            form.style.visibility = 'visible';
            body.style.opacity = '0.5';
            return;
        }
        form.style.visibility = 'hidden';
        body.style.opacity = '1';
    });
}
function validarLogin(){
    const users = [
        {
            name: 'AdrianaOliveira',
            password: '86860'
        },
        {
            name: 'AnaAugusto',
            password: '87820'
        },
        {
            name: "IsabellaRita",
            password: "87624"
        },
        {
            name: "LaísAlves",
            password: "86894"
        },
        {
            name: "NicoleNunes",
            password: "88386"
        }
    ];

    for (let user of users) {
        if (user.name == idUsuario.value && user.password == idSenha.value) {
            return window.location.href = 'todososprodutos.html';
        }
    }
    alert('Usuário não encontrado.');
}
function validarDadosCpf() {
    var nome = idTxtName.value;
    var cpf = idNumCpf.value;
    var email = idTxtEmail.value;
    var idade = idIdade.value;
    var telefone = idNumTelefone.value;
    var rua = idRua.value;
    var cep = idCep.value;
    var cidade = idCidade.value;
    var numero = idNumero.value;
    var bairro = idBairro.value;
    var estado = idSelEstados.value;
    var pais = idSelPaises.value;

    if (!nome) {
        alert('Por favor, preencha o campo nome.');
    }
    if (!email) {
        alert('Por favor, preencha o campo e-mail.');
    }
    if (!cpf) {
        alert('Por favor, preencha o campo CPF.');
    }
    if (!idade) {
        alert('Por favor, preencha o campo idade.');
    }
    if (!telefone) {
        alert('Por favor, preencha o campo telefone.');
    }
    if (!rua) {
        alert('Por favor, preencha o campo rua.');
    }
    if (!cep) {
        alert('Por favor, preencha o campo CEP.');
    }
    if (!cidade) {
        alert('Por favor, preencha o campo cidade.');
    }
    if (!numero) {
        alert('Por favor, preencha o campo número.');
    }
    if (!bairro) {
        alert('Por favor, preencha o campo bairro.');
    }
    if (!estado) {
        alert('Por favor, preencha o campo estado.');
    }
    if (!pais) {
        alert('Por favor, preencha o campo pais.');
    }
    if (nome && email && cpf && idade && telefone && rua && cep && cidade && numero && bairro && estado && pais) {
        alert("Cadastro realizado com sucesso!");
    }
}

function validarDadosCnpj() {
    var razaoSocial = idRazaoSocial.value;
    var cnpj = idNumCnpj.value;
    var nomeFantasia = idNomeFantasia.value;
    var email = idTxtEmail.value;
    var idade = idIdadeEmpresa.value;
    var telefone = idNumTelefone.value;
    var rua = idRua.value;
    var cep = idCep.value;
    var cidade = idCidade.value;
    var numero = idNumero.value;
    var bairro = idBairro.value;
    var estado = idSelEstados.value;
    var pais = idSelPaises.value;

    if (!razaoSocial) {
        alert('Por favor, preencha o campo razão social.');
    }
    if (!nomeFantasia) {
        alert('Por favor, preencha o campo nome fantasia.');
    }
    if (!cnpj) {
        alert('Por favor, preencha o campo CNPJ.');
    }
    if (!email) {
        alert('Por favor, preencha o campo e-mail.');
    }
    if (!idade) {
        alert('Por favor, preencha o campo idade.');
    }
    if (!telefone) {
        alert('Por favor, preencha o campo telefone.');
    }
    if (!rua) {
        alert('Por favor, preencha o campo rua.');
    }
    if (!cep) {
        alert('Por favor, preencha o campo CEP.');
    }
    if (!cidade) {
        alert('Por favor, preencha o campo cidade.');
    }
    if (!numero) {
        alert('Por favor, preencha o campo numero.');
    }
    if (!bairro) {
        alert('Por favor, preencha o campo bairro.');
    }
    if (!estado) {
        alert('Por favor, preencha o campo estado.');
    }
    if (!pais) {
        alert('Por favor, preencha o campo pais.');
    }

    if (razaoSocial && nomeFantasia && cnpj && email && idade && telefone && rua && cep && cidade && numero && bairro && estado && pais) {
        alert("Cadastro realizado com sucesso!")
    }
}

function validarCPF(idNumCpf) {

    var Soma;
    var Resto;
    Soma = 0;
    resultadoInvalido = "";
    if (idNumCpf == "00000000000") {
        Alert("CPF é inválido, pois está preenchido com 00000000000");
        resultadoInvalido = "inválido";
        exit();
    }

    for (i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(idNumCpf.substring(i - 1, i)) * (11 - i);

    }
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }

    if (Resto != parseInt(idNumCpf.substring(9, 10))) //return false;
    {
        alert("O número do CPF é inválido");
        resultadoInvalido = "inválido";
        exit();
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(idNumCpf.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }

    if (Resto != parseInt(idNumCpf.substring(10, 11))) //return false;
    {
        alert("O número do CPF é inválido");
        resultadoInvalido = "inválido";
        exit();
    }
    if (resultadoInvalido != "inválido") {
        alert("O número do CPF é VÁLIDO");//return true;
        exit();
    }
}

function validarDadosPagamento() {
    var bandeira = idSelBandeira.value;
    var nome = idTxtName.value;
    var numCartao = idNumCartao.value;
    var validade = idValidade.value;
    var codSeguranca = idCodSeg.value;
    var tipoPag = idSelTipoPag.value;
    var parcelas = idParcelas.value;

    if (bandeira == "Selecione:") {
        alert('Por favor, selecione o tipo de bandeira.');
    }
    if (!nome) {
        alert('Por favor, preencha o campo nome.');
    }
    if (!numCartao) {
        alert('Por favor, preencha o campo número do cartão.');
    }
    if (!validade) {
        alert('Por favor, preencha o campo validade.');
    }
    if (!codSeguranca) {
        alert('Por favor, preencha o campo codigo de segurança.');
    }
    if (tipoPag == "Selecione:") {
        alert('Por favor, selecione o tipo de pagamento.');
    }
    if (parcelas == "Selecione:") {
        alert('Por favor, selecione a quantidade de parcelas.');
    }
}

function validarDadosEndereco() {
    var nome = idTxtName.value;
    var sobrenome = idTxtSobrenome.value;
    var cep = idCEP.value;
    var tipoLog = idSelLogradouro.value;
    var logradouro = idLogradouro.value;
    var numero = idNum.value;
    var bairro = idBairro.value;
    var cidade = idCidade.value;
    var estado = idEstado.value;

    if (!nome) {
        alert('Por favor, preencha o campo nome.');
    }
    if (!sobrenome) {
        alert('Por favor, preencha o campo sobrenome.');
    }
    if (!cep) {
        alert('Por favor, preencha o campo CEP.');
    }
    if (tipoLog == "Selecione:") {
        alert('Por favor, selecione o tipo de logradouro.');
    }
    if (!logradouro) {
        alert('Por favor, preencha o campo logradouro.');
    }
    if (!numero) {
        alert('Por favor, preencha o campo número.');
    }
    if (!bairro) {
        alert('Por favor, preencha o campo bairro.');
    }
    if (!estado) {
        alert('Por favor, preencha o campo estado.');
    }
    if (!pais) {
        alert('Por favor, preencha o campo pais.');
    }
}