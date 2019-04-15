import { Observable } from 'rxjs'

const source = new Observable(subscriber => {
  subscriber.next('Hello')
  subscriber.next('world')
  // subscriber.error('Error')
  subscriber.complete()
  // subscriber.error('Unseen error')

  // return should be an unsubscribe function
  // (not necessary to unsubscribe if complete() is called)
  // return () => console.log('🚪 Unsubscribed')
})

source.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log('✅ Complete')
)

// const customSource = () => ({
//   subscribe: (next, err, complete) => {
//     next('Custom observable!')
//     complete()
//   }
// })

// customSource().subscribe(
//   res => console.log(res),
//   err => console.error(err),
//   () => console.log('✅ Complete')
// )
