import { Button, Container, Heading, Input, VStack, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return <Container maxH={'container.xl'} h='100vh' p={'16'}>
        <form>
            <VStack
                alignItems={'stretch'}
                spacing='8'
                w={['full', '96']}
                m='auto'
                my={'16'}

            >
                <Heading>VIDEO HUB</Heading>
                <Avatar alignSelf={'center'} boxSize='32' />
                <Input
                    type={'name'}
                    placeholder='Name'
                    required
                    focusBorderColor='purple.500'
                />
                <Input
                    type={'email'}
                    placeholder='Email'
                    required
                    focusBorderColor='purple.500'
                />
                <Input
                    type={'password'}
                    placeholder='Password'
                    required
                    focusBorderColor='purple.500'
                />
                <Button colorScheme={'purple'} type='submit'>
                    Sign Up
                </Button>

                <Text textAlign={'right'}>
                    Already a User? {'  '}
                    <Button variant={'link'} colorScheme='purple'>
                        <Link to={'/login'}>Log in</Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
}

export default Signup