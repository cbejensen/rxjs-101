import { from } from 'rxjs'
import { map } from 'rxjs/operators'
import axios from 'axios'

const source = from(axios('https://icanhazdadjoke.com/'))

source
  .pipe(map(res => res.data.joke))
  .subscribe(console.log)
