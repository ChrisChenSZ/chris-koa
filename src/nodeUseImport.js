import { promisify } from 'util'
import {resolve as r} from 'path'
import {readFile, writeFileSync as wfs} from 'fs'
import * as qs from 'querystring'
console.log(111111)
promisify(readFile)(r(__dirname, '../package.json')).then(data => {
    data = JSON.parse(data)
    console.log(data.name)
})