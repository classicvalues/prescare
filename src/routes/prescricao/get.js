const Sequelize = require('sequelize')
module.exports = Prescricao => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.id
    }
  }).then(prescricao => {
    if (!prescricao) return res.redirect('/404')
    res.render('pages/prescricao', { prescricao })
  }).catch(err => console.log(err))
}
