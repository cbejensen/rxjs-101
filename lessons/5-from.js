import { from } from 'rxjs'
import axios from 'axios'

// accepts an array, iteratable, or promise

const nums = from([1, 2, 3])
nums.subscribe(console.log)

// const string = from('hello world')
// string.subscribe(console.log)

// const promise = from(axios('https://icanhazdadjoke.com/'))
// promise.subscribe(res => console.log(res.data.joke))
