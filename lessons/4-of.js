import { of } from 'rxjs'

const source = of(1, 'a', {}, null)

source.subscribe(res => console.log(res))
