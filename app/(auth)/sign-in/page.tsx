import AuthForn from '@/components/AuthForn'
import React from 'react'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForn type="sign-in" />
    </section>
  )
}

export default SignIn
