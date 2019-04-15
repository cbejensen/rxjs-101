import { Observable } from 'rxjs'

const source = new Observable(subscriber => {
  subscriber.next('Hello')
  subscriber.next('world')
  // subscriber.error('Error')
  subscriber.complete()
  // subscriber.error('Unseen error')
})

source.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('✅ Complete')
)
