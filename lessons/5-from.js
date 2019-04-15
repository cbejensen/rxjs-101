import { from } from 'rxjs'
import axios from 'axios'

const nums = from([1, 2, 3])
nums.subscribe(console.log)

const promise = from(axios('https://icanhazdadjoke.com/'))
promise.subscribe(res => console.log(res.data.joke))
