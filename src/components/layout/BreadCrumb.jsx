import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>

        <li class="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  )
}

const BreadCrumItem = () => {
  return (
    <li class="breadcrumb-item">
      <a href="#"></a>
    </li>
  )
}

export default BreadCrumb
