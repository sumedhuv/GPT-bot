import { config } from "dotenv"
config()
import {Configuration,OpenAIApi} from "openai"
//console.log(process.env.API_KEY)
import readline from "readline"
const openai = new OpenAIApi(new Configuration({
    apiKey:process.env.API_KEY
}))
const userInterface = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})
userInterface.prompt()
userInterface.on("line", async input => {
    const res= await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages:[{role:"user",content:input}],
    })
    console.log(res.data.choices[0].message.content)
    //     .then(res => {
    //     console.log(res.data.choices[0].message.content)
    // })
})
openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages:[{role:"user",content:"Hello ChatGPT"}],
})
    .then(res => {
    console.log(res.data.choices[0].message.content)
})