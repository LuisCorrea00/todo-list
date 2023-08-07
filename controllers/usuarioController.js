function login(req,res) {
    res.render('login');
};

function auth(req,res){
    usuarioModel.auth(req.body.email, req.body.senha);
};

module.exports = {login,auth};