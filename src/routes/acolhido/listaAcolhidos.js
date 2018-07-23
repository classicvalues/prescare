const moment = require('moment')

module.exports = (Acolhido, Prescricao) => (req, res, next) => {
  return Acolhido.findAll({
    order: [['nome', 'ASC'], [{ model: Prescricao }, 'validade', 'DESC']],
    include: [{
      model: Prescricao,
      required: false,
      attributes: ['validade', 'updated_at']
    }]
  }).then(acolhidos => {
    res.render('pages/listaAcolhidos', {
      acolhidos,
      moment,
      prescricaos: acolhidos.prescricaos,
      tipoDoUsuario: req.user.tipo
    })
  }).catch(next)
}
