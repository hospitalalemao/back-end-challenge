const Debug = require('debug')('user:controller');
var response = require('../helpers/response.helpers');
var validation = require('../helpers/validation.helpers');
var Crud = require('../controllers/db.controller')

// Cadastra Cliente
exports.create = async function(req, res) {    
    // recebe todos os parametros do Body
    var { nome, dataNascimento, email, cpf, endereco } = req.body;
    
    // Valida se não estão vazios
    if((nome == undefined || nome == null) || 
        (dataNascimento == undefined || dataNascimento == null) || 
        (email == undefined || email == null) || 
        (cpf == undefined || cpf == null) || 
        (endereco == undefined || endereco == null))
    {
        Debug('Invalid params');
        return response.json(res,400,{
            success : false,
            errorNum : 0,
            error: "Invalid params"
        });
    }
    
    // Validação de email
    if(!validation.isEmail(email))
    {
        Debug('Invalid email');
        return response.json(res,400,{
            success : false,
            errorNum : 1,
            error: "Invalid email"
        });
    }

    let save = new Crud();
    // Insere no banco de dados o Endereço, e já recupera o ID do mesmo
    const address = await save.insert(
        'Address', 
        ['rua, numero, bairro, cidade, estado', 'cep'], 
        [[endereco.rua, endereco.numero, endereco.bairro, endereco.cidade, endereco.estado, endereco.cep]]
    );
    
    // Se o ID do Endereço estiver vazio retorna erro 400
    if(endereco == undefined || endereco == null){
        Debug('Erro to get Id Address');
        return response.json(res,400,{
            success : false,
            errorNum : 2,
            error: "Erro to get Id Address"
        });
    }

    // Cria o Cliente já passando o ID do Endereço
    const client = await save.insert(
        'Client', 
        ['nome, dataNascimento, email, cpf, address_id'], 
        [[nome, dataNascimento, email, cpf, address.insertId]]
    );

    // Retorna os 2 ID dos registros criados
    Debug('Success!!!');
    return response.json(res,200,{
        success : true,
        data : {
            address : address,
            client: client,            
        }
    });
},
exports.update = async function(req, res) {
    let address, client = null;
    
    // recebe todos os parametros do Body
    var { nome, dataNascimento, email, cpf, endereco } = req.body;

    // recebe o clienteId
    var clientId = req.params.clientId;

    if(!clientId)
    {
        return response.json(res,200,{
            success:false,
            errorNum : 10,
            error:"Invalid clientId"
        });
    }

    // Valida se não estão vazios
    if((nome == undefined || nome == null) && 
        (dataNascimento == undefined || dataNascimento == null) && 
        (email == undefined || email == null) && 
        (cpf == undefined || cpf == null) &&
        (endereco == undefined || endereco == null))
    {
        Debug('Invalid params');
        return response.json(res,400,{
            success : false,
            errorNum : 0,
            error: "Invalid params"
        });
    }

    // Preenche o Objecto
    let clienteUpdate = {
        nome: (nome ? nome : null),
        dataNascimento: (dataNascimento ? dataNascimento : null),
        email: (email ? email : null),
        cpf: (cpf ? cpf : null),
    }
    // Limpas os dados que estão null
    for(var el in clienteUpdate){
        if(clienteUpdate[el] == undefined || clienteUpdate[el] == null){
            delete(clienteUpdate[el])
        }
    }

    let crud = new Crud();
    // verifica se realmente o usuário existe
    const clientInfo = await crud.select('client', 'id=' + clientId);

    clientid = clientInfo.data[0].id;
    addressId = clientInfo.data[0].address_id;
    if(clientid == undefined || clientid == null)
    {
        Debug('Not found Client ');
        return response.json(res,400,{
            success : false,
            errorNum : 0,
            error: "Not found Client "
        });
    }

    // Realiza o update do Client
    if(Object.keys(clienteUpdate).length > 0){
        client = await crud.update('client', clienteUpdate, 'id=' + clientid)
    }
    
    // Prepara para realizar o Update de Endereço
    if(endereco != undefined && endereco != null && 
        addressId != undefined && addressId != null
    ){
        
        let AddressUpdate = {
            rua: (endereco.rua ? endereco.rua : null),
            numero: (endereco.numero ? endereco.numero : null),
            bairro: (endereco.bairro ? endereco.bairro : null),
            cidade: (endereco.cidade ? endereco.cidade : null),
            estado: (endereco.estado ? endereco.estado : null),
            cep: (endereco.cep ? endereco.cep : null),
        }
        
        // Limpas os dados que estão null
        for(var el in AddressUpdate){
            if(AddressUpdate[el] == undefined || AddressUpdate[el] == null){
                delete(AddressUpdate[el])
            }
        }
        address = await crud.update('address', AddressUpdate, 'id=' + addressId)
    }
        
    Debug('Successs!!! ');
    return response.json(res,200,{
        success : "success",
        data : {
            address : address,
            client: client,            
        }
    });
}

exports.listAll = async function(req, res) {
    let crud = new Crud();
    const select = await crud.select('client');
    
    return response.json(res,200,{
        success : "success",
        data: select.data
    });
}

exports.listById = async function(req, res) {
    // recebe o clienteId
    var clientId = req.params.clientId;

    let crud = new Crud();
    // Realiza o select
    const select = await crud.select('client', 'id=' + clientId);
    
    return response.json(res,200,{
        success : "success",
        data: select.data
    });
}


exports.listClientAddress = async function(req, res) {
    // recebe o clienteId
    var clientId = req.params.clientId;

    let crud = new Crud();
    // Realiza o select
    const select = await crud.selectCustom('SELECT * FROM client as C, address as A WHERE C.address_id = A.id AND C.id=' + clientId);
    
    return response.json(res,200,{
        success : "success",
        data: select.data
    });
}


exports.deleteClienteAddress = async function(req, res) {
    let deleteAddress, deleteClient = null;
    // recebe o clienteId
    let clientId = req.params.clientId;
    let crud = new Crud();

    try {
        // Realiza o select para verificar se o Cliente existe e tb o endereço
        const client = await crud.select('client', 'id=' + clientId);
        clientId = client.data[0].id;
        // Realiza o select
        const address = await crud.select('adress', 'id=' + client.data[0].address_id);
        addressId = address.data[0].id;

        // se existir o Cliente realiza o delete
        if(clientId != undefined && clientId != null){
            deleteClient = await crud.delete('client', clientId);
        }
    
        // se existir o Endereço realiza o delete
        if(clientId != undefined && clientId != null){
            deleteAddress = await crud.delete('address', client.data[0].address_id);
        }
        Debug('Deletado: Cliente e Endereço')
        return response.json(res,200,{
            success : "success",
        });
        
    } catch (error) {
        console.log(error)
        Debug('Not deleted!');
        return response.json(res,400,{
            success : false,
            errorNum : 3,
            error: "Not deleted!"
        });
    }
}

