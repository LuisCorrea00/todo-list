const mysql = require("mysql2");

class Database {
    static connect() {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "todo-list",
        });

        connection.connect((err) => {
            if (err) {
                console.error("Erro ao conectar ao MySQL:", err);
                return;
            }
            console.log("Conexão ao MySQL estabelecida com sucesso!");
        });

        return connection;
    }

    static query(sql, values) {
        return new Promise((resolve, reject) => {
            const connection = this.connect();
            connection.query(sql, values, (err, results) => {
                connection.end(); // Encerrar a conexão após a consulta

                if (err) {
                    console.error("Erro ao executar consulta:", err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Database;
