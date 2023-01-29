const express = require('express')
const router = express.Router();
const url = require('url');
const apiCache = require('apicache')
const hljs = require('highlight.js');


const {OpenAIApi, Configuration } = require('openai')

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

let cache = apiCache.middleware

router.get('/', cache('2 minutes'), async (req,res) => {
    try {
        const param = new URLSearchParams({
            ...url.parse(req.url, true).query
        })
        
        let prompt = decodeURIComponent(param.get('q'))
        let splitted = prompt.split('\n');
        let finalN = splitted[splitted.length-1].toLowerCase();
        let language  = finalN.split(":")[0]
        const apiRes = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `${prompt}`,
            temperature: 0.0,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: "#",
          })
          const data = apiRes.data.choices[0].text
          let lines = data.split('\n');

          let i = 0;
          while (lines[i] === " "){
            lines.splice(i, 1)
            i++
          }
          let newtext = lines.join("\n")
          html  = hljs.highlight(newtext, {language:`${language}`}).value
          res.header("Access-Control-Allow-Origin", "*");
          res.status(200).json([decodeURIComponent(newtext), html])

    } catch (error) {
        res.status(500).json({ error })
    }

})



module.exports = router