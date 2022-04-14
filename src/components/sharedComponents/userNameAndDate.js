import React, { useState, useEffect } from "react";

const getUserandDate = function (props) {
  const months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const day = props.date.slice(8, 10)
  const month = props.date.slice(5, 7)
  const year = props.date.slice(0, 4)
  const monthStr = Number.parseInt(month)
  var dateStr = months[monthStr] + ' ' + day + ', ' +year
  var name = props.name || props.reviewer_name;
  return (
    <p><b>{`${name}`}</b>, {`${dateStr}`}</p>
  )
}


export default getUserandDate
// component 2 name: Descrip









