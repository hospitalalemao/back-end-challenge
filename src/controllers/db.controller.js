const mysql = require('mysql');
const Debug = require('debug')('bootstrap');

module.exports = class Crud{
  constructor() {
    const connection = mysql.createConnection({
      host     : process.env.DBHOST || 'localhost',
      port     : process.env.DBPORT || '3306',
      user     : process.env.DBUSER || 'root',
      password : process.env.DBPASS || '',
      database : process.env.DBNAME || 'challenge_joubert'
    });
    
    connection.connect((err)=>{
      if(err) return console.log(err);
      console.log('conectou!');
      this.checkTables(connection);
    });
  }

  checkTables(conn){
    const querys = 
    [
      `CREATE TABLE IF NOT EXISTS Client (
        id          int NOT NULL AUTO_INCREMENT
        ,nome       VARCHAR(200) NOT NULL
        ,dataNascimento DATE  NOT NULL
        ,email      VARCHAR(250) NOT NULL
        ,cpf        INTEGER NOT NULL
        ,address_id int NOT NULL
        ,PRIMARY KEY (id) 
      );`,
      
      `CREATE TABLE IF NOT EXISTS Address(
        id      int NOT NULL AUTO_INCREMENT
        ,rua    VARCHAR(250) NOT NULL
        ,numero INTEGER NOT NULL
        ,bairro VARCHAR(250) NOT NULL
        ,cidade VARCHAR(250) NOT NULL
        ,estado VARCHAR(100) NOT NULL
        ,cep    INTEGER NOT NULL
        ,PRIMARY KEY (id)
      );`,

      `CREATE TABLE IF NOT EXISTS Transactions(
        id              int NOT NULL AUTO_INCREMENT
        ,valor INTEGER  NOT NULL
        ,cpf INTEGER  NOT NULL
        ,card_id      int NOT NULL
        ,PRIMARY KEY (id)
      );`,

      `CREATE TABLE IF NOT EXISTS Card(
        id              int NOT NULL AUTO_INCREMENT
        ,titular        VARCHAR(250) NOT NULL
        ,numero         INTEGER NOT NULL
        ,data_expiracao DATE NOT NULL
        ,bandeira       VARCHAR(50) NOT NULL
        ,cvv            INTEGER NOT NULL
        ,PRIMARY KEY (id)
      );`
    ];

    querys.forEach(sql => {
      this.run(conn, sql);      
    });
  }

  run(conn, sql){
    conn.query(sql, function (error, results, fields){
      if(error) return console.log(error);
    });
  }
}