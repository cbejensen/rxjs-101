import { Observable } from 'rxjs'

const source = new Observable(subscriber => {
  subscriber.next('Hello')
  setTimeout(() => subscriber.next('...world'), 2000)
  subscriber.complete()
})

console.log('👇 Before subscribe')
source.subscribe(console.log, console.error, () =>
  console.log('✅ Complete')
)
console.log('👆 After subscribe')
