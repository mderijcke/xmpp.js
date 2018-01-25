'use strict'

const Observable = require('any-observable')

module.exports = class Subject extends Observable {
  constructor() {
    super(() => {})
    this.observers = new Set()
  }

  subscribe(observer) {
    const {observers} = this
    if (typeof observer === 'function') {
      observer = {
        next: observer,
      }
    }
    observers.add(observer)

    return {
      unsubscribe() {
        observers.delete(observer)
      },
    }
  }

  next(value) {
    this.observers.forEach(observer => observer.next(value))
  }

  error(error) {
    this.observers.forEach(observer => observer.error(error))
  }

  complete() {
    this.observers.forEach(observer => observer.complete())
  }
}
