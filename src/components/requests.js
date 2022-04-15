const axios = require('axios');
const TOKEN = require('../../config.js');
import {startingId} from '../index.js';
///axios.defaults.baseURL = 'http://localhost:3000';
//axios.defaults.headers.common['Authorization'] = TOKEN.TOKEN;
import React, {  createContext, useState, useEffect, useContext } from "react";




// export const reqs = (props) => {
//   const [some, setreqfuns] = useState('37313')
//   requests = {
//     product: getProduct(id),
//     styles: getStyles(id),
//     reviews: getReviews(id),
//     questions: getQuestions(id),
//     related: getRelated(id)
//     //getRelatedCard: getRelatedCard()
//   }
//   return


// export const newId = function (id) {
//   str = id
// }
//var str = startingId
// var strings = {
//   getProduct: ('/products/' + str + '/'),
//   getStyles: '/products/' + str + '/styles',
//   getRatings:`/reviews/meta?product_id=${str}`,
//   postAnswer: '/qa/questions/' + str + '/answers',
//   postQuestion: '/qa/questions',
//   getQuestions: '/qa/questions' + str,
//   increaseHelpful: '/qa/questions/' + str + '/helpful',
//   getReviews: '/reviews',
//   increaseReviewHelpful: '/reviews/' + str + '/helpful',
//   getRelated: "/products/" + str + "/related",
// }
//var getRelatedstr =  "/products/" + str + "/related"
var str = '37313'
const getProduct = async function(str) {
  var res = await axios.get('/products/' + str)
  return res.data
}
const getStyles = async (str) => {
  var res = await axios.get('/products/' + str + '/styles')
  return res.data
}
const getReviews = async (str) => {
  var res = await axios.get(`/reviews/meta?product_id=${str}`)
  return res.data
}
const getQuestions = async function (str) {
  var res = await axios.get(`/qa/questions?product_id=${str}`)
  return res.data
}
export const getReviewsList = async (sort = null) => {
  let paramsObj = { product_id: str};
  if (sort) {
    paramsObj['sort'] = sort;
  }
  var res = await axios({
    method: 'get',
    url: '/reviews/',
    params: paramsObj
  })
  return res
}
export const increaseHelpful = async function (id) {
  var res = axios({
    method: 'put',
    url: '/qa/questions/' + id + '/helpful',
  })
  return res
}
export const getRelated = async (str) => {
  //var str = "/products/" + str + "/related"
  let res = await axios.get("/products/" + str + "/related")
  console.log('getrelatedarrslicing', res.data.slice(0, 4))
  return  res.data.slice(0, 4)
  //setRelated(response.data.slice(0, 4))
}

export const getRelatedCard = async function (id) {
  let endpoint = '/products/' + id + '/styles';
  let res = await axios.get(endpoint)
  if (!res.data.results[0].photos[0].url) {
    var images = './data/no-image.png'
  } else {
    var images = res.data.results[0].photos[0].url
  }
  var response = await axios.get('/products/' + id)
  var data = response.data
  return {data, images}
}


export const requests = {
    product: getProduct,
    styles: getStyles,
    reviews: getReviews,
    questions: getQuestions,
    related: getRelated,
    getRelatedCard: getRelatedCard
}

