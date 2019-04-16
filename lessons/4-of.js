import { of } from 'rxjs'

const source = of(1, 'a', {}, null)

source.subscribe(console.log)
