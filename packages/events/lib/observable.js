'use strict'

const Observable = require('any-observable')

module.exports = function observable(
  EE,
  event,
  completeEvent,
  errorEvent = 'error'
) {
  return new Observable(observer => {
    const listeners = {
      [event](value) {
        observer.next(value)
      },
    }

    if (completeEvent) {
      listeners[completeEvent] = () => {
        clean()
        observer.complete()
      }
    }

    if (errorEvent) {
      listeners[errorEvent] = err => {
        clean()
        observer.error(err)
      }
    }

    Object.entries(listeners).forEach(([k, v]) => {
      EE.addListener(k, v)
    })

    function clean() {
      Object.entries(listeners).forEach(([k, v]) => {
        EE.removeListener(k, v)
      })
    }

    return clean
  })
}
