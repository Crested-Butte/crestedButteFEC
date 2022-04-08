import React, { useState, useEffect } from "react";

const Images = (props) => {

  return (
      <img width="100%" style={props.style} index={props.value} src={props.photo.url}></img>
  )
}

export default Images