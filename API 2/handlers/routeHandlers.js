import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'

export async function handleGet(res) {
    //Get the Data Parsed JSON data from the getData function
    const data = await getData() //stored object as data variable (JS Object)

    //This converts the JS Object into a string
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

export function handlePost(request, response) {
    const parsedBody = JSON.parse(request.body)
    console.log('POSED')
}

