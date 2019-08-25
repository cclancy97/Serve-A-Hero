const store = require('./store')
const heroTemplate = require('./templates/hero-list.handlebars')
const villainTemplate = require('./templates/villains.handlebars')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  // Clear getFormFields
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  // Clear getFormFields
  $('form').trigger('reset')
}
const hideMessaging = function () {
  setTimeout(function () {
    $('#message').html('')
  }, 5000)
}
const signUpSuccess = responseData => {
  successMessage('You signed up!')
  hideMessaging()
}
const signUpFailure = responseData => {
  failureMessage('Sign up failed!')
  hideMessaging()
}
const signInSuccess = responseData => {
  successMessage('You signed in!')
  store.user = responseData.user
  console.log(store.user)
  $('#change-password').show()
  $('#create-hero').show()
  $('#create-villain').show()
  $('#sign-out').show()
  $('#get-hero').show()
  $('#get-villain').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#login').text(' Logout/Change-Password ')
  $('#myModal').modal('hide')
  hideMessaging()
}
const signInFailure = () => {
  failureMessage('Sign in failed!')
  hideMessaging()
}
const signOutSuccess = responseData => {
  successMessage('You signed out!')
  $('#change-password').hide()
  $('#create-hero').hide()
  $('#create-villain').hide()
  $('#sign-out').hide()
  $('#content').html('')
  $('#get-hero').hide()
  $('#update-hero').hide()
  $('#get-villain').hide()
  $('#update-villain').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#login').text('Sign-Up/Login')
  $('#heros').hide()
  $('#villains').hide()
  $('#myModal').modal('hide')
  hideMessaging()
}
const signOutFailure = responseData => {
  failureMessage('Sign out failed!')
  hideMessaging()
}
const changePasswordSuccess = responseData => {
  successMessage('You changed your password!')
  hideMessaging()
}
const changePasswordFailure = responseData => {
  failureMessage('Password not changed!')
  hideMessaging()
}
const createHeroSuccess = responseData => {
  successMessage('Hero created!')
  $('form').trigger('reset')
  hideMessaging()
}
const createHeroFailure = responseData => {
  failureMessage('Error not created!')
  hideMessaging()
}
const getHeroSuccess = data => {
  const showHeroesHtml = heroTemplate({
    heros: data.heros
  })
  $('.content').html(showHeroesHtml)
  if (data.heros.length === 0) {
    $('#heros').text('You have no heroes :( Create some!')
    $('#update-hero').hide()
    hideMessaging()
  } if (data.heros.length !== 0) {
    $('#heros').text('Here are your heroes!')
    $('#update-hero').show()
  }
}
const getHeroFailure = responseData => {
  failureMessage('Error!')
  hideMessaging()
}
const deleteHeroSuccess = responseData => {
  successMessage('Hero deleted!')
  hideMessaging()
}
const deleteHeroFailure = responseData => {
  failureMessage('Error! Not Deleted')
  hideMessaging()
}
const updateHeroSuccess = responseData => {
  successMessage('Hero changed!')
  hideMessaging()
}
const updateHeroFailure = responseData => {
  failureMessage('Error! Not updated')
  hideMessaging()
}
const createVillainSuccess = responseData => {
  successMessage('Villain created!')
  $('form').trigger('reset')
  hideMessaging()
}
const createVillainFailure = responseData => {
  failureMessage('Error not created!')
  hideMessaging()
}
const getVillainSuccess = data => {
  console.log(data)
  const showVillainsHtml = villainTemplate({
    villains: data.villains
  })
  $('.villain-content').html(showVillainsHtml)
  if (data.villains.length === 0) {
    $('#villains').text('You have no villains :( Create some!')
    $('#update-villain').hide()
    hideMessaging()
  } if (data.villains.length !== 0) {
    $('#villains').text('Here are your villains!')
    $('#update-villain').show()
  }
}
const getVillainFailure = responseData => {
  failureMessage('Error!')
  hideMessaging()
}
const deleteVillainSuccess = responseData => {
  successMessage('Villain deleted!')
  hideMessaging()
}
const deleteVillainFailure = responseData => {
  failureMessage('Error! Not Deleted')
  hideMessaging()
}
const updateVillainSuccess = responseData => {
  successMessage('Villain changed!')
  hideMessaging()
}
const updateVillainFailure = responseData => {
  failureMessage('Error! Not updated')
  hideMessaging()
}

module.exports = {
  successMessage,
  failureMessage,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createHeroSuccess,
  createHeroFailure,
  getHeroSuccess,
  getHeroFailure,
  deleteHeroSuccess,
  deleteHeroFailure,
  updateHeroSuccess,
  updateHeroFailure,
  createVillainSuccess,
  createVillainFailure,
  getVillainSuccess,
  getVillainFailure,
  deleteVillainSuccess,
  deleteVillainFailure,
  updateVillainSuccess,
  updateVillainFailure,
  hideMessaging
}
