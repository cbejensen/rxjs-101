import { Observable } from 'rxjs'

const source = new Observable(subscriber => {
  subscriber.next('Hello world!')
  subscriber.complete()
})

source.subscribe(res => console.log(res))

const customSource = () => ({
  subscribe: (subscriber, errorFunc, completeFunc) => {
    subscriber('hello world!')
    // errorFunc('error!')
    completeFunc() // will not send value
    return () => console.log('unsubscribed!')
  }
})

customSource.subscribe(res => console.log(res))
