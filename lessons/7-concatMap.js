import { from, of } from 'rxjs'
import { concatMap, delay, map } from 'rxjs/operators'
import axios from 'axios'

const source = from(axios('https://icanhazdadjoke.com/'))

const content = document.querySelector('.content')
content.textContent = ''

source
  .pipe(
    map(res => res.data.joke), // get actual joke from API response
    concatMap(joke => from(joke)), // emit letters one by one
    concatMap(joke => of(joke).pipe(delay(50))) // delay each letter
  )
  .subscribe(res => {
    console.log(res)
    content.textContent += res
  })
