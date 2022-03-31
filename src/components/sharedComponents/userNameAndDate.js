import React, { useState, useEffect } from "react";

const getUserandDate = function (props) {
  const months = [null, 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
  const day = props.date.slice(8, 10)
  const month = props.date.slice(5, 7)
  const year = props.date.slice(0, 4)
  const monthStr = Number.parseInt(month)
  var dateStr = months[monthStr] + ' ' + day + ', ' +year
  var name = props.name
  return (
    <p>@{name} at {dateStr}</p>
  )
}


export default getUserandDate
// component 2 name: Descrip









