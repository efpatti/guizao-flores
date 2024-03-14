import { CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Card, ButtonGroup, Image, Text, Button } from '@chakra-ui/react';
import fototeste from'../../img/banner-abraco.webp';
import bannerOrquidea from '../../img/banner-orquidea.webp';
import bannerOutono from '../../img/banner-outono.webp';
import bannerPascoa from '../../img/banner-pascoa.webp'
import { React, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Homepage/Homepage.css'
const buttonStyle = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};

function Home() {
  const cardData = [
    {
      nome: "arioci",
     Imagem: fototeste,
      descricao: "coordenador tecnico do senai",
      linkedin: "link linkedin"
    },
    
  ];

  return (
    <>
    <Carousel className='carrosel'>
      <Carousel.Item>
        <img className='bannerfoto' src={fototeste}/>
      
      </Carousel.Item>
      <Carousel.Item>
        <img className='bannerfoto' src={bannerOrquidea}/>
      
      </Carousel.Item>
      <Carousel.Item>
        <img className='bannerfoto' src={bannerOutono}/>
      
      </Carousel.Item>
      <Carousel.Item>
        <img className='bannerfoto' src={bannerPascoa}/>
      
      </Carousel.Item>
      
     
    </Carousel>
    <h1 className='letreiro'>Promoçoes de março</h1>
      {cardData.map((card, index) => (
        <Card maxW='sm' key={index}>
          <CardBody>
            <Image src={card.Imagem} />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{card.nome}</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button {...buttonStyle} colorScheme='blue'>
                Buy now
              </Button>
              <Button {...buttonStyle} variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export default Home;
