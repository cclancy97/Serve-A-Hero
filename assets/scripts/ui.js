const store = require('./store')
const heroTemplate = require('./templates/hero-list.handlebars')

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
}
const signUpFailure = responseData => {
  failureMessage('Sign up failed!')
}
const signInSuccess = responseData => {
  successMessage('You signed in!')
  console.log(responseData)
  store.user = responseData.user
  console.log(store.user.heros)
  $('#change-password').show()
  $('#create-hero').show()
  $('#sign-out').show()
  $('#get-hero').show()
  $('#update-hero').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#login').text(' Logout/Change-Password ')
  $('#myModal').modal('hide')
  hideMessaging()
}
const signInFailure = () => {
  failureMessage('Sign in failed!')
}
const signOutSuccess = responseData => {
  successMessage('You signed out!')
  $('#change-password').hide()
  $('#create-hero').hide()
  $('#sign-out').hide()
  $('#content').html('')
  $('#get-hero').hide()
  $('#update-hero').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#login').text('Sign-Up/Login')
  $('#heros').hide()
  $('#myModal').modal('hide')
  hideMessaging()
}
const signOutFailure = responseData => {
  failureMessage('Sign out failed!')
}
const changePasswordSuccess = responseData => {
  successMessage('You changed your password!')
}
const changePasswordFailure = responseData => {
  failureMessage('Password not changed!')
}
const createHeroSuccess = responseData => {
  successMessage('Hero created!')
  $('form').trigger('reset')
}
const createHeroFailure = responseData => {
  failureMessage('Error not created!')
}
const getHeroSuccess = data => {
  const showHeroesHtml = heroTemplate({
    heros: data.heros
  })
  $('.content').html(showHeroesHtml)
  if (data.heros.length === 0) {
    $('#heros').text('You have no heroes :( Create some!')
    hideMessaging()
  } if (data.heros.length !== 0) {
    $('#heros').text('Here are your heroes!')
  }
}
const getHeroFailure = responseData => {
  failureMessage('Error!')
}
const deleteHeroSuccess = responseData => {
  successMessage('Hero deleted!')
}
const deleteHeroFailure = responseData => {
  failureMessage('Error!')
}
const updateHeroSuccess = responseData => {
  successMessage('Hero changed!')
}
const updateHeroFailure = responseData => {
  failureMessage('Error!')
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
  hideMessaging
}
