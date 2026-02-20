import fs from 'node:fs/promises'
import path from 'node:path'

export async function getData() {

    try {
        const pathJSON = path.join('data', 'data.json')
        const data = await fs.readFile(pathJSON, 'utf8')
        return JSON.parse(data)

    } catch(err) {
        console.log(err)
        return []
    }
}