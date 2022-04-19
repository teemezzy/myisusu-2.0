import { React, useState } from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import CustomInput, {
  CustomButton,
  CustomLogin,
  CustomOr,
  CustomSupport,
} from '../component/signup/CustomInput'

const Login = () => {
  return (
    <div className='universal_padding h-screen md:flex md:justify-center md:items-center'>
      <div className='md:flex'>
        <div className='text-center mb-12 md:mb-0 pt-4 w-full'>
          <div className='md:mb-20 lg:mb-0'>
            <img
              src={logo}
              alt='logo'
              className='w-[100px] h-[52.57px] lg:w-[140px] lg:h-[80px] mx-auto md:mx-0 mb-2 lg:mb-4'
            />
            <h3 className='text-contriMobile md:text-contriDesktop lg:text-introH1Desktop text-logoColor font-semibold w-[60%] md:w-full mx-auto mb-2 md:text-left'>
              Pick up where you left off.
            </h3>
            <p className='text-signupharsh font-semibold text-googleDesktop md:text-contriMobile md:text-left'>
              Sign in to continue.
            </p>
          </div>
        </div>

        <div className='h-fit w-full'>
          <form className='signup_form px-4 md:py-2 mb-3'>
            {/* Custom input */}
            <div className='mx-auto w-[80%] pt-14 mb-4'>
              <CustomInput label='Email Address' />
              <CustomInput label='Password' />
              <p className='-mt-6 text-signinsm text-gold font-semibold'>
                Forgot password?
              </p>
            </div>

            {/* custom button*/}
            <div className='flex justify-center items-center gap-2 mb-4'>
              <p className='text-signinsm font-medium text-logoColor'>
                Don’t have an account?{' '}
                <Link to='/signup' className='text-gold'>
                  Create one
                </Link>
              </p>
              <CustomButton buttonDetails='Sign In' />
            </div>

            <div className='text-center mb-4 md:mb-6'>
              <div className='flex justify-center items-center w-[87%] mx-auto gap-1'>
                <CustomOr />
              </div>
            </div>

            {/* custom Google Sign */}
            <div className='flex justify-center mb-3 pb-6'>
              <CustomLogin />
            </div>
          </form>

          {/* custom CustomerSupport */}
          <div className='pb-3'>
            <CustomSupport support='Need help?' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
