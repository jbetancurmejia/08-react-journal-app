import React from 'react'

export const LoginScreen = () => {
  return (
    <div>
      <h3>Login</h3>
      <form>
        <input type="text" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
     <button type='submit' >login</button>
     <hr/>
<p>
  Login with social
</p>
     
      </form>
    </div>
  )
}