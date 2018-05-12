import {promisify} from 'util'
import {readFile} from 'fs'
import {resolve as r} from 'path'
export const name ='Luck';
export const getName = () => {
    return name
}

const age = 19

export {
    name as name2,
    getName as getName2,
    age
}

const readAsync = promisify(readFile)

async function ini() {
    let data = await readAsync(r(__dirname, '../package.json'))
    data = JSON.parse(data)
    console.log(data);
    
}

ini()