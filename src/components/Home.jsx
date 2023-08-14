import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl'
}
const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading
                    textTransform={'uppercase'}
                    py={'2'}
                    w='fit-content'
                    borderBottom={'2px solid'}
                    m='auto'
                >
                    Services
                </Heading>
                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
                    <Text letterSpacing={'widest'} lineHeight='190%' p={['4', '16']} textAlign='justify'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci itaque voluptatem ullam. Ad voluptatem minima eveniet eaque laboriosam provident quo tempore ipsum culpa, porro eligendi recusandae repellendus qui nulla, facere at deleniti. Fugiat saepe laborum dignissimos amet facere deleniti qui omnis debitis libero eos. Fugiat corporis quo quidem tenetur saepe quia quam aut cumque tempore harum asperiores, quasi hic dignissimos nam consequuntur quaerat adipisci cupiditate exercitationem earum natus? Labore ipsa, debitis corrupti nulla error optio possimus consequatur necessitatibus temporibus ex corporis aliquid, repellendus quod animi illo iure rem rerum sequi mollitia saepe nobis? Earum aut laboriosam tempora? Odio, tenetur. Culpa?

                    </Text>
                </Stack>

            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false} showThumbs={false}>
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor={'blackAlpha.600'} color={'white'}  {...headingOptions}>
                Watch you future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor={'whiteAlpha.900'} color={'black'}  {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor={'whiteAlpha.900'} color={'black'}  {...headingOptions}>
                Gaming on console
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor={'whiteAlpha.900'} color={'black'}  {...headingOptions}>
                Night time study
            </Heading>
        </Box>

    </Carousel>
)
export default Home