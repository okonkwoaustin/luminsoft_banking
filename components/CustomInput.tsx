import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchame = authFormSchema('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchame>>,
    name: FieldPath<z.infer<typeof formSchame>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem>
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            className='input-class'
                            type={name === 'password' ? 'password' : 'text'}
                            {...field}
                            value={field.value ?? ''}
                        />
                    </FormControl>
                    <FormMessage className='form-message mt-2' />
                </div>
            </div>
        </FormItem>
        )}
    />
  )
}

export default CustomInput
