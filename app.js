import { Observable, of } from 'rxjs'

// Standard observable
const obs = new Observable(subscriber => {
  subscriber.next('hello world!')
  subscriber.complete()
})

console.group('observable')
obs.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('complete')
)
console.groupEnd()

// Custom observable
const myObservable = () => ({
  subscribe: (subscriber, errorFunc, completeFunc) => {
    subscriber('hello world!')
    // errorFunc('error!')
    completeFunc() // will not send value
    return () => console.log('unsubscribed!')
  }
})

console.group('my observable')
myObservable().subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('complete')
)
console.groupEnd()

// Standard of - emits values passed in, then emits complete
console.group('of')
of(1, 2, 3).subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('complete')
)
console.groupEnd()

// Custom of
const myOf = (...args) => ({
  subscribe: (subscriber, onError, onComplete) => {
    args.forEach(item => subscriber(item))
    // onError('error!')
    onComplete() // will not send value
    return () => console.log('unsubscribed!')
  }
})

console.group('my of')
myOf(1, 2, 3).subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('complete')
)
console.groupEnd()
