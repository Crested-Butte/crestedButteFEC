import React, {useState,useEffect} from 'react';
import ReviewTile from './ReviewTile.js';

function ReviewList(props) {
  const [vals, setValues] = setState({});


  function getProduct(val) {
    return axios.get('/products/' + str + '/')
      .then( ( response ) => {
        console.log('insise axios', response.data)
        setProduct(response.data)
      }
    )
  }

  return (
    <table>
    <thead>
      <tr>ReviewListHead</tr>
    </thead>
    <tbody>
    {ReviewTiles.map((reviewData, idx) =>
              <ReviewTile
                key = {reviewData._id}
                newData = {post}
                showBlogPost = {this.showBlogPost}/>
            )}
    </tbody>
  </table>
  )
}

export default ReviewList;