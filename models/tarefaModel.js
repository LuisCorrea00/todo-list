class Tarefa {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    static ListarTarefas() {
        const Database = require("Database");
        let tarefas = Database.query("SELECT * FROM tarefas");
        return tarefas;
    }
    save() {
        const sql =
            "INSERT INTO tarefas (id, title, description) VALUES (?, ?, ?)";
        const values = [this.id, this.title, this.description];
        Database.query(sql, values);
    }
}
module.exports = Tarefa;
