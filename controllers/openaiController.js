const openai = require('../config/openaiConfig')

const generateMeta = async (title) => {
    const description = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { 
                role: "user", 
                content: `Write a description of the Video called ${title}` 
            }
        ],
        max_tokens: 100 
    })

    console.log(description.data.choices[0].message)

    const tags = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { 
                role: "user", 
                content: `write 10 keywords for a YouTube video titled ${title}` 
            }
        ],
        max_tokens: 100 
    })

    console.log(tags.data.choices[0].message)
}

module.exports = { generateMeta }