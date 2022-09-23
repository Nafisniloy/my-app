import React from 'react'
import './footer.css'

export default function Footer(props){
    return(
<>
<div className='footerarea'>
© Copyright 2022 <a href='/'>  {props.title}</a>
</div> 
</>
    )
}