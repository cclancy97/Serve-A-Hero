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
  console.log(store.user)
  $('#change-password').show()
  $('#create-hero').show()
  $('#sign-out').show()
  $('#get-hero').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}
const signInFailure = () => {
  failureMessage('Sign in failed!')
}
const signOutSuccess = responseData => {
  successMessage('You signed out!')
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
  const showHeroesHtml = heroTemplate({ heros: data.heros })
  $('.content').html(showHeroesHtml)
  successMessage('Here are your heroes!')
}
const getHeroFailure = responseData => {
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
  getHeroFailure
}
