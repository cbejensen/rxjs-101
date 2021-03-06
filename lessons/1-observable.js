import { Observable } from 'rxjs'

const source = new Observable(observer => {
  observer.next('hello')
  observer.next('world')
  // observer.error('error')
  // observer.complete()
  // observer.error('error')
  return () => console.log('unsubscribed')
})

const subscription = source.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('✅ complete')
)

subscription.unsubscribe()
