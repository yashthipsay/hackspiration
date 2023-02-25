import React from 'react'
import { FormControl,FormLabel,
    FormErrorMessage,
    FormHelperText, Input} from '@chakra-ui/react'


const AboutUs = () => {
  return (
    <div className='flex flex-col gap-10 justify-center '>
        <div className='flex-1 left-0 right-0 m-auto'>
            <div className=' flex flex-row items-end gap-2 text-white' >

        <h3 className=' w-[100px]'>"YOU MISS 100% OF THE SHOTS YOU DONT TAKE"</h3>
        <p>-Wayne Gretzky</p>
            </div>
            <div>

            <p className='text-white pl-[80px] mt-[20px]'>-Michael Scott</p>
            <p className='text-white pl-[50px] mt-[20px] font-bold text-lg'>-Team Schneiders</p>
            </div>
        </div>

        <div className='flex-1'>
        <FormControl>
            <FormLabel className='text-white'>Generate a Web3 Certificate</FormLabel>
            <Input className='text-white'></Input>
            <FormHelperText className='font-epilogue'>Thanks for Contributing</FormHelperText>
        </FormControl>
        </div>

        <div className='flex-1'>

        </div>
    </div>
  )
}

export default AboutUs