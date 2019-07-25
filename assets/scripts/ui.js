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
}
const createHeroFailure = responseData => {
  failureMessage('Error not created!')
}
const getHeroSuccess = data => {
  const showHeroesHtml = heroTemplate({
    heros: data.heros
  })
  $('.content').html(showHeroesHtml)
  if (store.user.heros.length === 0) {
    $('#message').text('You have no heroes :( Create some!')
  } else if (store.user.heros.length !== 0) {
    successMessage('Here are your heroes!')
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
  successMessage('Hero deleted!')
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
  updateHeroFailure
}
