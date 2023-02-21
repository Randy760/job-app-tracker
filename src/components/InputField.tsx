import React from 'react'
import './styles.css';

const InputField: React.FC = () => {
  return (
    <form className='input'>
        <input type='text' name="companyName" placeholder='Company Name' className='inputFieldLeft'/>
        <input type='text' name='position' placeholder='Position' className='inputFieldIn'/>
        <input type='text' name='posNumber' placeholder='Position Number' className='inputFieldIn'/>
        <input type='text' name='hasLogin' placeholder='Login? (true/false)' className='inputFieldIn'/>
        <input type='text' name='username' placeholder='Username' className='inputFieldIn'/>
        <input type='text' name='password' placeholder='Password' className='inputFieldRight'/>
        <button type='submit' className='createListingBtn'>Create</button>
    </form>
  )
}

export default InputField