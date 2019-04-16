import { from, fromEvent, of } from 'rxjs'
import {
  concatMap,
  delay,
  mergeMap,
  shareReplay,
  tap
} from 'rxjs/operators'
import axios from 'axios'

const content = document.querySelector('.content')
const btn = document.querySelector('.get-joke')
content.textContent = ''

// const source = fromEvent(btn, 'click')
const source = fromEvent(btn, 'click').pipe(shareReplay())
source
  .pipe(
    tap(() => (content.textContent = 'Loading...')),
    mergeMap(() =>
      from(axios('https://icanhazdadjoke.com/'))
    ),
    tap(() => (content.textContent = '')),
    concatMap(res => from(res.data.joke)),
    concatMap(joke => of(joke).pipe(delay(20)))
  )
  .subscribe(
    res => (content.textContent += res),
    console.error,
    () => console.log('✅ Complete')
  )

const countElem = document.querySelector('.count')
let count = 0
setTimeout(
  () =>
    source.subscribe(
      res => (countElem.textContent = ++count)
    ),
  10000 // 10 seconds
)
