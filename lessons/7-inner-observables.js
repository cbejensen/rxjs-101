import { from, fromEvent, of } from 'rxjs'
import {
  concatMap,
  delay,
  mergeMap,
  tap
} from 'rxjs/operators'
import axios from 'axios'

const content = document.querySelector('.content')
const btn = document.querySelector('.get-joke')
content.textContent = ''

// btn.addEventListener('click', () => {
//   content.textContent = 'Loading...'
//   axios('https://icanhazdadjoke.com/').then(res => {
//     content.textContent = ''
//     res.data.joke.split('').forEach((letter, i) => {
//       setTimeout(
//         () => (content.textContent += letter),
//         20 * i
//       )
//     })
//   })
// })

// const source = fromEvent(btn, 'click')
// source
//   .pipe(
//     tap(() => (content.textContent = 'Loading...')),
//     mergeMap(() =>
//       from(axios('https://icanhazdadjoke.com/'))
//     ),
//     tap(() => (content.textContent = '')),
//     concatMap(res => from(res.data.joke)),
//     concatMap(letter => of(letter).pipe(delay(20)))
//   )
//   .subscribe(
//     res => (content.textContent += res),
//     console.error,
//     () => console.log('✅ Complete')
//   )

// mergeMap - subscribes to inner observable immediately
// concatMap - subscribes to inner observable after previous observable completes
