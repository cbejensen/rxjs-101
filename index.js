import { Observable } from 'rxjs'

const source = new Observable(subscriber => {
  subscriber.next('Hello world!')
  subscriber.complete()
})

source.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('complete')
)
