'use strict'

const Subject = require('./lib/Subject')

const prod = new Subject()

const sub = prod.subscribe(x => console.log(x))
const sub2 = prod.subscribe(console.log)

prod.next('foo')

// sub.unsubscribe()
sub2.unsubscribe()

prod.next('var')

client.input.subscribe(el => {
  console.log(el)
})

client.output.next('foobar')

// 'use strict'

// const Observable = require('zen-observable')
// // Observable.of(1, 2, 3).subscribe(x => console.log(x))

// // let observable = new Observable(observer => {
// //   // Emit a single value after 1 second
// //   let timer = setTimeout(_ => {
// //     observer.next('hello', 'foo')
// //     observer.complete()
// //   }, 1000)

// //   // On unsubscription, cancel the timer
// //   return _ => clearTimeout(timer)
// // })

// // observable.subscribe((...args) => console.log(...args))
// // observable.subscribe((...args) => console.log(...args))

// class Test extends Observable {
//   constructor() {
//     super(observer => {
//       this.observer = observer
//       // const timer = setTimeout(_ => {
//       //   observer.next(['status', 'online'])
//       //   observer.complete()
//       // }, 1000)

//       // // On unsubscription, cancel the timer
//       // return _ => clearTimeout(timer)
//       // this.observer = observer
//     })
//   }

//   emit(...args) {
//     this.observer.next([...args])
//   }

//   on(event, listener) {
//     return this.subscribe(([_event, ...args]) => {
//       if (_event !== event) return
//       listener(...args)
//     })
//   }

//   observe('')
// }

// const foo = new Test()
// console.log(foo)

// foo.subscribe(([event, data]) => {
//   console.log('truc')
//   console.log(event, data)
// })

// foo.on('foo', console.log)

// foo.emit('foo')
