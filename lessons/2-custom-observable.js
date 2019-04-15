import { Observable } from 'rxjs'

const source = new Observable(subscriber => {
  subscriber.next('Hello')
  subscriber.next('world')
  subscriber.complete()
})

source.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('✅ Complete')
)

const customSource = () => ({
  subscribe: (next, err, complete) => {
    next('Custom')
    next('observable')
    complete()
    // return () => console.log('🚪 Unsubscribed')
  }
})

customSource().subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('✅ Complete')
)
