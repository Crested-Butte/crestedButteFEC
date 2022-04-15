const axios = require('axios');
const TOKEN = require('../config.js');
axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/';
axios.defaults.headers.common['Authorization'] = TOKEN.TOKEN;

module.exports = {
  get:  async (req, res) => {

    var url = req.originalUrl
    console.log(url)
    const response = await axios.get(url)
    //console.log(response)
    res.send(response.data)
  },
  post: async (req, res) => {

    var url = req.originalUrl
    console.log(req.body)
    const response = await axios({
      method: 'post',
      url: url,
      data: req.body
      })
    //console.log(response)
    res.send(req.body)
  },
  put: async (req, res) => {

    var url = req.originalUrl
    console.log(url)
    const response = await axios.put(url)
    //console.log(response)
    res.send(response.data)
  }
  // getRelated =  (str) => {
  //   var str = "/products/" + str + "/related"
  //   return axios.get(str).then( (response) => {
  //     setRelated(response.data.slice(0, 4))
  //   })
  // }


}