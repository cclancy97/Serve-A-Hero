'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

$(() => {
  $('#create-hero').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#get-hero').hide()
  $('#update-hero').hide()
  $('#create-villain').hide()
  $('#get-villain').hide()
  $('#update-villain').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)
  $('#create-hero').on('submit', events.onCreateHero)
  $('#get-hero').on('click', events.onGetHeroes)
  $('.content').on('click', '.delete-hero', events.onDeleteHero)
  $('#update-hero').on('submit', events.onUpdateHero)
  $('#create-villain').on('submit', events.onCreateVillain)
  $('#get-villain').on('click', events.onGetVillains)
  $('.villain-content').on('click', '.delete-villain', events.onDeleteVillain)
  $('#update-villain').on('submit', events.onUpdateVillain)
})
