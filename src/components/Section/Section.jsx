import React from 'react'
import '../Style.css'

const Section = (props) => {
    console.log(props.users);
  return (
    <div>
    <section className='section container'>
        {props.users.map((item,index)=>(
        <table>
        <tr>
            <th>NAME</th>
            <th>LASTNAME</th>
            <th>AGE</th>
        </tr>
        <tr>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
        </tr>
    </table>
    ))}
    </section>
    </div>
  )
}

export default Section