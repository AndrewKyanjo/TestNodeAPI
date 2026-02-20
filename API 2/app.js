import path from 'node:path'

console.log(import.meta)

const __dirname = import.meta.dirname
console.log(__dirname)

const __filename = import.meta.filename
console.log(__filename)
