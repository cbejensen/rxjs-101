import { Observable } from 'rxjs'

const source = new Observable(subscriber => {
  subscriber.next('Hello world!')
  // subscriber.error('There was an error!')
  subscriber.complete()
  // subscriber.error('Another error!')
})

source.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('complete')
)
