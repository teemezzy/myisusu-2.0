import { TextField } from '@mui/material'
import React from 'react'
import { googleSignin } from '../../assets'
import { Link } from 'react-router-dom'

const CustomInput = ({ label, input, textInput, inputType }) => {
  return (
    <div className='mb-6'>
      <TextField
        id={label}
        label={label}
        value={input}
        onChange={textInput}
        variant='outlined'
        size='small'
        fullWidth
        type={inputType}
        InputLabelProps={{
          style: {
            fontSize: '16px',
          },
        }}
      />
    </div>
  )
}

export default CustomInput

export const CustomLogin = ({ login }) => {
  return (
    <>
      <button className='flex items-center gap-2 border border-logoColor hover:bg-blue-300 rounded-[20px] pl-4 pr-11 py-1'>
        <img
          src={googleSignin}
          alt='Google'
          className='w-[28px] h-[28px] md:w-[38px] md:h-[38px] lg:w-[45px] lg:h-[45px]'
        />
        <p className='text-logoColor text-phoneMobile md:text-signinlg lg:text-phoneMobileTwo font-semibold'>
          Sign In With Google
        </p>
      </button>
    </>
  )
}

export const CustomSupport = ({ support }) => {
  return (
    <>
      <p className='text-footermd md:text-signinlg lg:text-phoneMobileTwo font-medium text-logoColor'>
        {support}{' '}
        <Link to='' className='text-gold hover:text-logoColor'>
          Contact Support
        </Link>
      </p>
    </>
  )
}

export const CustomButton = ({ buttonDetails, onSubmit }) => {
  return (
    <>
      <button type='submit' className='bg-logoColor font-bold text-white text-googleMobile md:text-signinlg lg:text-phoneMobileTwo hover:bg-gold hover:text-logoColor rounded-[20px] py-[7px] px-5'>
        {buttonDetails}
      </button>
    </>
  )
}

export const CustomOr = () => {
  return (
    <>
      <div className='w-full h-[1px] bg-orColor' />
      <p className='font-semibold text-signinsm md:text-signinlg lg:text-phoneMobileTwo text-orColor border border-orColor rounded-[100%] px-[2px] py-[1px]'>
        OR
      </p>
      <div className='w-full h-[1px] bg-orColor' />
    </>
  )
}
