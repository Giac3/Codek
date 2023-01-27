const express = require('express')
const router = express.Router();
const url = require('url');
const apiCache = require('apicache')



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
        const apiRes = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `${prompt}`,
            temperature: 0.0,
            max_tokens: 1000,
          })

          const data = apiRes.data.choices[0].text
          res.header("Access-Control-Allow-Origin", "*");

          res.status(200).json(decodeURIComponent(data))

    } catch (error) {
        res.status(500).json({ error })
    }

})



module.exports = router