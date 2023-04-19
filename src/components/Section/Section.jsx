import React from 'react'
import '../Style.css'

const Section = (props) => {
    console.log(props.users);
  return (
    <div>
    <section className='section container'>
        <table>
        <thead>
          <tr>
            <td>#</td>
            <td>NAME</td>
            <td>LASTNAME</td>
            <td>AGE</td>
            </tr>
        </thead>
        {props.users.map((item,index)=>(
          <tbody>
        <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
        </tr>
        </tbody>
        ))}
    </table>
    </section>
    </div>
  )
}

export default Section