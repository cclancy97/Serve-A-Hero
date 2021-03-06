
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onCreateHero = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  store.hero = formData.hero
  api.createHero(formData)
    .then(() => onGetHeroes(event))
    .then(ui.createHeroSuccess)
    .catch(ui.createHeroFailure)
}
const onGetHeroes = (event) => {
  event.preventDefault()
  api.getHero()
    .then(ui.getHeroSuccess)
    .catch(ui.getHeroFailure)
}
const onDeleteHero = event => {
  const heroId = $(event.target).closest('div').data('id')
  event.preventDefault()
  api.deleteHero(heroId)
    .then(() => onGetHeroes(event))
    .then(ui.deleteHeroSuccess)
    .catch(ui.deleteHeroFailure)
}
const onUpdateHero = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateHero(formData)
    .then(ui.updateHeroSuccess)
    .then($('form').trigger('reset'))
    .then(() => onGetHeroes(event))
    .catch(ui.updateHeroFailure)
}
const onCreateVillain = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  store.villain = formData.villain
  api.createVillain(formData)
    .then(() => onGetVillains(event))
    .then(ui.createVillainSuccess)
    .catch(ui.createVillainFailure)
}
const onGetVillains = (event) => {
  event.preventDefault()
  api.getVillain()
    .then(ui.getVillainSuccess)
    .catch(ui.getVillainFailure)
}
const onDeleteVillain = event => {
  const villainId = $(event.target).closest('div').data('id')
  event.preventDefault()
  api.deleteVillain(villainId)
    .then(() => onGetVillains(event))
    .then(ui.deleteVillainSuccess)
    .catch(ui.deleteVillainFailure)
}
const onUpdateVillain = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateVillain(formData)
    .then(ui.updateVillainSuccess)
    .then($('form').trigger('reset'))
    .then(() => onGetVillains(event))
    .catch(ui.updateVillainFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  onCreateHero,
  onGetHeroes,
  onDeleteHero,
  onUpdateHero,
  onCreateVillain,
  onGetVillains,
  onDeleteVillain,
  onUpdateVillain
}
