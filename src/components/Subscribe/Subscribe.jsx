import React from 'react'
import "./Subscribe.css"

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='content'>
                <h2>Join Our Defi</h2>
                <form action='https://getform.io/f/71499a3e-49e1-4a4e-ada5-b8f11a60713d' method='POST'>
                    <div className='form-container display-col'>
                        <input type="email" name='email' placeholder='Enter your email' />
                        <button className='btn' type='submit'>Sign up</button>
                    </div>
                    <div className='form-container'>
                        <input type="checkbox" /><p>Yes, I agree to receive email communications from DeFi.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Subscribe