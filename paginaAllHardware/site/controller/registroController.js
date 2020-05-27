
let registroController = {
    'registro': (req, res) => {
        res.render('registro')
    },
    'login': (req, res) => {
        res.render('login')

    },
    'carga': (req, res) => {
        res.render('carga')
    }
}
module.exports = registroController;