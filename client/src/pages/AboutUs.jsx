import React, { useState } from 'react'
import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { Loader } from '../components';
import { shaunak } from '../assets';


import { FormControl,FormLabel,
    FormErrorMessage,
    FormHelperText, Input} from '@chakra-ui/react'
    


const AboutUs = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const genCer = () => {
        setIsLoading(true);
        navigate("https://testnets.opensea.io/account");
        setIsLoading(false);
    }
  return (
    <div className='flex flex-col gap-10 justify-center '>
        <div className='flex-1 left-0 right-0 m-auto'>
            <div className=' flex flex-row items-end gap-2 text-white' >

        <h1 className=' w-[100px]  '>"YOU MISS 100% OF THE SHOTS YOU DONT TAKE"</h1>
        <p>-Wayne Gretzky</p>
            </div>
            <div>

            <p className='text-white pl-[80px] mt-[20px]'>-Michael Scott</p>
            <p className='text-white pl-[50px] mt-[20px] font-bold text-lg'>-Team Schneiders</p>
            </div>
        </div>

        <div className='flex-1 right-0 left-0 m-auto flex flex-col justify-center align-middle'>
            <form onSubmit={genCer}>
        <FormControl onSubmit={genCer}>
            <FormLabel className='text-white'>Generate a Web3 Certificate</FormLabel>
            
            <a href="https://bafybeiengyfkccebfd3etec3433l7h4pfxzjavztzu5ko2osmz6vmrvk5y.ipfs.w3s.link/">
            <Button colorScheme='green' >Get Certificate </Button></a>
            
            
           
            <FormHelperText className='font-epilogue'>Thanks for Contributing</FormHelperText>
        </FormControl>
        </form>
        </div>

        {/* <div className='flex-1 h-[100px] flex flex-col gap-2 '>
            

            <img src={shaunak} alt="" className='w-[80px] flex flex-col rounded-[50%] ' />
            
            <div className='flex flex-row gap-7'>
            <div className='flex flex-row align-middle gap-3 cursor-pointer'>
                <FacebookIcon className='bg-white'/>
            </div>
            <div className='flex flex-row align-middle gap-3 cursor-pointer'>
                <TwitterIcon className='bg-white hover:bg-sky-500'/>
            </div>
            <div className='flex flex-row align-middle gap-3 cursor-pointer'>
                <LinkedInIcon className='bg-white hover:bg-indigo-500'/>
                </div>
            <div className='flex flex-row align-middle gap-3 cursor-pointer' >
                <InstagramIcon className='bg-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'/>
            </div>
            </div>
        </div> */}
        <Container
        className='text-white fonr-epilogue'
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <h1 className='text-[40px] font-bold'>NiveshToken</h1>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="white">
        &copy; {new Date().getFullYear()} NiveshToken Inc. All rights reserved.
      </Text>
    </Stack>
  </Container>
    </div>
  )
}

export default AboutUs