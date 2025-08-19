import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../constants'

const Navbar = () => {
  return (
    <div>
      <div class='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
			<Link to={'/'} >
				<img width={100} src={logo} alt='' />
			</Link>

			<nav class='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				<Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>
					Login
				</Link>
				<Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>
					Register
				</Link>
			</nav>
		</div>
    </div>
  )
}

export default Navbar
