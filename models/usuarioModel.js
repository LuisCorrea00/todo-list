class UsuarioModel{
    constructor(id_usuario, nome, email, senha){
        this.id_usuario = id_usuario;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    static auth(email,senha){
        let sql = `SELECT * FROM usuario WHERE email='${email}' AND senha='${senha}'`
        
    }
} 