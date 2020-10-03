const mysql = require('mysql');
const Debug = require('debug')('bootstrap');

module.exports = class Crud{
  constructor() {
    this.checkTables();
  }

  checkTables(){
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
      this.run(sql);      
    });
    // this.insert('client', ['nome, dataNascimento, email, cpf'], [['Joubert Saquett', '2020-07-10', 'email@gmail.com', '123.456.789.10']])
    // this.update('client', [{nome: 'jou', email: 'jou@gmail.com'}], 'id=12')
    this.delete('client', 12)
  }

  /**
   * Select.
   * @param {string} table Nome da tabela.
   * @param {string} where String contendo as condições, ex: id=1.
  */
  select(table, where){
    const sql = `SELECT * FROM ${table} WHERE ${where}`
    this.run(sql);
  }

  /**
   * Insert in Table.
   * @param {string} table Nome da tabela.
   * @param {array} cols Array contendo o nome das colunas.
   * @param {array} values Array multidimensional para inserir vários registros.
  */
  insert(table, cols, values){
    cols.concat(',');
    const sql = `INSERT INTO ${table} ( ${cols} ) VALUES ?`
    this.run(sql, values);
  }

  /**
   * Update register.
   * @param {string} table Nome da tabela.
   * @param {array} values Array contendo json com os campos e seus valores.
   * @param {string} where String contendo as condições, ex: cpf=''.
  */
  update(table, values, where){
    var queries = [];
    
    // Percorre cada objeto para construir a query
    for (let index = 0; index < values.length; index++) {
      const value = values[index];

      // separa as chaves dos valores
      const columns = Object.keys(value);
      const val = Object.values(value);

      // prepara a query já setando as colunas e a condição
      let sql = "UPDATE " + table + " SET " + columns.join(" = ? ,") +" = ?  WHERE " + where;

      // preenche os parametros da query e acrescenta ao array de querys pera execução
      queries.push(mysql.format(sql, val))
    }

    // executa query por query
    queries.forEach(sql => {
      this.run(sql);
    });
  }

  /**
   * Delete register.
   * @param {string} table Nome da tabela.
   * @param {integer} values String contendo o id da do registro.
  */
  delete(table, id){
    const sql = `DELETE FROM ${table} WHERE id = ${id}`
    this.run(sql);
  }

  /**
   * RUN QUERY
   * @param {string} sql query para execução.
   * @param {array} values array contendo os parametros para preenchimento.
  */
  run(sql, values){
    // Cria a coneção do MySQL
    let connection = mysql.createConnection({
      host     : process.env.DBHOST || 'localhost',
      port     : process.env.DBPORT || '3306',
      user     : process.env.DBUSER || 'root',
      password : process.env.DBPASS || '',
      database : process.env.DBNAME || 'challenge_joubert'
    });
    
    // Conecta no banco
    connection.connect((err)=>{
      if(err) return console.log(err);
    });

    // Executa a query
    connection.query(sql, [values], function (error, results, fields){
      if(error) return console.log(error);
    });

    // Encerra conexão com banco
    connection.end();    
  }
}