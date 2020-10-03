define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Authentication",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests *required</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "data.token",
            "description": "<p>JWT Token</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    auth : true,\n    token : \"adsadafsda123...\",\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 1,\n    error : \"Failed to authenticate token.\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/auth.routes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Logout",
    "name": "Logout",
    "group": "Authentication",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests *required</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Token</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "errorNum",
            "description": "<p>Error number (only if success is equal false)</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Description (only if success is equal false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    auth : false,\n    token : null,\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 1,\n    error : \"Failed to authenticate token.\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/auth.routes.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "delete",
    "url": "/client/delete/:clientId",
    "title": "Delete Client",
    "name": "DeleteClient",
    "group": "Client",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT Token (ex: Bearer token)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "url": [
          {
            "group": "url",
            "type": "String",
            "optional": false,
            "field": ":clientId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n  success: true\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/client.routes.js",
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/client",
    "title": "List All",
    "name": "List_All",
    "group": "Client",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests *required</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id Client</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Name Client</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>Client's date of birth</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Client's Email</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>Client's CPF</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>the record id (address) of the address table</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    data : [\n                {\n                    \"id\": 2,\n                    \"nome\": \"Nome da Pessoa\",\n                    \"dataNascimento\": \"0000-00-00\",\n                    \"email\": \"emailteste@12345.com.br\",\n                    \"cpf\": '123456',\n                    \"address_id\": 2\n                },\n     ],\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 1,\n    error : \"Description\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/client.routes.js",
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/client/:clientId",
    "title": "List by ID",
    "name": "List_by_ID",
    "group": "Client",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests *required</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id Client</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Name Client</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>Client's date of birth</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Client's Email</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>Client's CPF</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>the record id (address) of the address table</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    data : [\n                {\n                    \"id\": 2,\n                    \"nome\": \"Nome da Pessoa\",\n                    \"dataNascimento\": \"0000-00-00\",\n                    \"email\": \"emailteste@12345.com.br\",\n                    \"cpf\": '123456',\n                    \"address_id\": 2\n                }\n     ],\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 1,\n    error : \"Description\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/client.routes.js",
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/client/address/:clientId",
    "title": "List with address",
    "name": "List_with_address",
    "group": "Client",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests *required</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Id Client</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Name Client</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": "<p>Client's date of birth</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Client's Email</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>Client's CPF</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>The record id (address) of the address table</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "rua",
            "description": "<p>Street name</p>"
          },
          {
            "group": "Response: 200",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Street number home</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "bairro",
            "description": "<p>Neighborhood</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>City</p>"
          },
          {
            "group": "Response: 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>State</p>"
          },
          {
            "group": "Response: 200",
            "type": "Numer",
            "optional": false,
            "field": "cep",
            "description": "<p>CEP</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    \"data\": [\n                {\n                    \"id\": 1,\n                    \"nome\": \"Nome da Pessoa\",\n                    \"dataNascimento\": \"0000-00-00\",\n                    \"email\": \"emailteste@12345.com.br\",\n                    \"cpf\": 0,\n                    \"address_id\": 1,\n                    \"rua\": \"Rua Dom Jose\",\n                    \"numero\": 1234,\n                    \"bairro\": \"Bairro Jd Tatira\",\n                    \"cidade\": \"São Paulo\",\n                    \"estado\": \"SP\",\n                    \"cep\": 0\n                }\n            ]\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 1,\n    error : \"Description\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/client.routes.js",
    "groupTitle": "Client"
  },
  {
    "type": "patch",
    "url": "/client/update/:clientId",
    "title": "Alter Client",
    "name": "Update_Client",
    "group": "Client",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests *required</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "endereco",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.rua",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "endereco.numero",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.bairro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.cidade",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.estado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.cep",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>Object with data about the insert made in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n            \"success\": true,\n            \"data\": {\n                \"address\": {\n                    \"fieldCount\": 0,\n                    \"affectedRows\": 1,\n                    \"insertId\": 16,\n                    \"changedRows\": 0,\n                    \"data\": {\n                        \"fieldCount\": 0,\n                        \"affectedRows\": 1,\n                        \"insertId\": 16,\n                        \"serverStatus\": 2,\n                        \"warningCount\": 0,\n                        \"message\": \"\",\n                        \"protocol41\": true,\n                        \"changedRows\": 0\n                    }\n                },\n                \"client\": {\n                    \"fieldCount\": 0,\n                    \"affectedRows\": 1,\n                    \"insertId\": 29,\n                    \"changedRows\": 0,\n                    \"data\": {\n                        \"fieldCount\": 0,\n                        \"affectedRows\": 1,\n                        \"insertId\": 29,\n                        \"serverStatus\": 2,\n                        \"warningCount\": 1,\n                        \"message\": \"\",\n                        \"protocol41\": true,\n                        \"changedRows\": 0\n                    }\n                }\n            }\n        }",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 1,\n    error : \"Description\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/client.routes.js",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/client",
    "title": "Create Client",
    "name": "new_Client",
    "group": "Client",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-web-access-token",
            "description": "<p>Web Token to start requests *required</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>json *required</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dataNascimento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "endereco",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.rua",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "endereco.numero",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.bairro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.cidade",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.estado",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endereco.cep",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response: 200": [
          {
            "group": "Response: 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response Status</p>"
          },
          {
            "group": "Response: 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Response: 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>Object with data about the insert made in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n            \"success\": true,\n            \"data\": {\n                \"address\": {\n                    \"fieldCount\": 0,\n                    \"affectedRows\": 1,\n                    \"insertId\": 16,\n                    \"changedRows\": 0,\n                    \"data\": {\n                        \"fieldCount\": 0,\n                        \"affectedRows\": 1,\n                        \"insertId\": 16,\n                        \"serverStatus\": 2,\n                        \"warningCount\": 0,\n                        \"message\": \"\",\n                        \"protocol41\": true,\n                        \"changedRows\": 0\n                    }\n                },\n                \"client\": {\n                    \"fieldCount\": 0,\n                    \"affectedRows\": 1,\n                    \"insertId\": 29,\n                    \"changedRows\": 0,\n                    \"data\": {\n                        \"fieldCount\": 0,\n                        \"affectedRows\": 1,\n                        \"insertId\": 29,\n                        \"serverStatus\": 2,\n                        \"warningCount\": 1,\n                        \"message\": \"\",\n                        \"protocol41\": true,\n                        \"changedRows\": 0\n                    }\n                }\n            }\n        }",
          "type": "Object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200\n{\n    success : false,\n    errorNum : 1,\n    error : \"Description\",\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "src/routes/client.routes.js",
    "groupTitle": "Client"
  },
  {
    "type": "",
    "url": "/",
    "title": "1. Install",
    "name": "Install",
    "group": "Install",
    "version": "1.0.0",
    "description": "<p>Instalação</p>",
    "filename": "src/routes/routes.js",
    "groupTitle": "Install"
  }
] });
