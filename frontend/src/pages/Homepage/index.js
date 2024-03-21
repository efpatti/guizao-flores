import { CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Card, ButtonGroup, Image, Text, Button } from '@chakra-ui/react';
 import fototeste from'../../img/guizao-flores.png';
 import bannerOrquidea from '../../img/banner-orquidea.webp';
 import bannerOutono from '../../img/banner-outono.webp';
 import bannerPascoa from '../../img/banner-pascoa.webp';
 import bannerabraco from '../../img/banner-abraco.webp';
 import { React, useState } from 'react';
 import Carousel from 'react-bootstrap/Carousel';
import '../Homepage/Homepage.css';
 import { Container, Row, Col } from 'react-bootstrap';
 import fototeste2 from '../../img/snum.jpg';
 import fototeste1 from '../../img/sndois.jpg';
 import apaixonado from '../../img/Apaixonados.png';
 import florfofa from '../../img/flor-fofa-removebg-preview.png';
 import florfofa2 from '../../img/flor-fofa2-removebg-preview.png';
 import florfofa3 from '../../img/flor-fofa3-removebg-preview.png'
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
      nome: "Titulo flor",
     Imagem: fototeste,
      Preco: "50,00 R$",
      Descricao: "descriçao da flor"
    },
    {
      nome: "Titulo flor",
     Imagem: fototeste,
      Preco: "50,00 R$",
      Descricao: "descriçao da flor"
    },
     {
       nome: "Titulo flor",
      Imagem: fototeste,
       Preco: "50,00 R$",
       Descricao: "descriçao da flor"
     },
     {
       nome: "Titulo flor",
      Imagem: fototeste,
       Preco: "50,00 R$",
       Descricao: "descriçao da flor"
     }
    
  ];
  const cardApaixonado = [
    {
      nome2: "buque de fro",
     Imagem2: fototeste2,
      Preco2: "50,00 R$",
      Descricao2: "descriçao do buque de fro"
    },
    {
      nome2: "buque de fro",
     Imagem2: fototeste2,
      Preco2: "50,00 R$",
      Descricao2: "descriçao do buque de fro"
    },
    {
      nome2: "buque de fro",
     Imagem2: fototeste2,
      Preco2: "50,00 R$",
      Descricao2: "descriçao do buque de fro"
    },
    {
      nome2: "buque de fro",
     Imagem2: fototeste2,
      Preco2: "50,00 R$",
      Descricao2: "descriçao do buque de fro"
    },
  ]
  const cardAcessorio = [
    {
      nome1: "acessorio",
     Imagem1: fototeste1,
      Preco1: "50,00 R$",
      Descricao1: "descriçao da acessorio"
    },
    {
      nome1: "acessorio",
     Imagem1: fototeste1,
      Preco1: "50,00 R$",
      Descricao1: "descriçao da acessorio"
    },
    {
      nome1: "acessorio",
     Imagem1: fototeste1,
      Preco1: "50,00 R$",
      Descricao1: "descriçao da acessorio"
    },
  ]

  return (
    <>
    <Carousel className='carrosel'>
      <Carousel.Item>
        <img className='bannerfoto' src={bannerabraco}/>
      
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
    <Container > 
      <Row>
      {cardData.map((card, index) => (
        <Col key={index}>
        <Card maxW='sm'>
          <CardBody>
            <Image src={card.Imagem} />
            <Stack mt='2    ' spacing='3'>
              <Heading size='md'>{card.nome}</Heading>
              <Text>
                {card.Descricao}
              </Text>
              <Text className='texto-preco' fontSize='2xl'>
               {card.Preco}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button className='botao-baro' {...buttonStyle} colorScheme='blue'>
                Comprar
              </Button>
              <Button className='botao-baro' {...buttonStyle}  colorScheme='blue'>
               Adicionar
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Col>
      ))}
      </Row>

      <h1 className='letreiro1'>Acessorios para sua planta</h1>
      <Row>
      {cardAcessorio.map((card, index) => (
        <Col key={index}>
        <Card className='card2' maxW='sm'>
          <CardBody>
            <Image src={card.Imagem1} />
            <Stack mt='1  ' spacing='3'>
              <Heading size='md'>{card.nome1}</Heading>
              <Text>
                {card.Descricao1}
              </Text>
              <Text className='texto-preco' fontSize='2xl'>
               {card.Preco1}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button className='botao-baro' {...buttonStyle} colorScheme=''>
                Comprar
              </Button>
              <Button className='botao-baro' {...buttonStyle} variant='ghost' colorScheme=''>
               Adicionar
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Col>
      ))}
      </Row>
 
  
       
     
  
  
       </Container> 
       <br/><br/>
       <div >
        <Image fluid className='banner-amor' src={apaixonado}/></div>
      <Container>
        <br/><br/>
      <Row>
        
      {cardApaixonado.map((card, index) => (
        <Col key={index}>
        <Card className='card3' maxW='sm'>
          <CardBody>
            <Image src={card.Imagem2} />
            <Stack mt='1  ' spacing='3'>
              <Heading size='md'>{card.nome2}</Heading>
              <Text>
                {card.Descricao2}
              </Text>
              <Text className='texto-preco' fontSize='2xl'>
               {card.Preco2}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button className='botao-baro' {...buttonStyle} colorScheme=''>
                Comprar
              </Button>
              <Button className='botao-baro' {...buttonStyle} variant='ghost' colorScheme=''>
               Adicionar
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Col>
      ))}
      </Row>
      <br/><br/>      
      <Row>
        <Col>
        </Col>
        <Col>
        <div className='Caixa-dicas'>       <h1 className='titulo-dicas'>Dicas de cuidado</h1>  
      
        <div className='corpo-dicas'>

       <div className='linhaslaterais'>
       <div className=' texto-dica'>
       <h5>Corte os caules:</h5>
       <p>Ao receber flores, corte cerca de 2 a 5 centímetros dos caules em um ângulo de 45 graus. Isso ajuda na absorção de água.</p>
       </div>
   
  
        
          
      

      
      </div>
      <img className='fotoflor' src={florfofa}/>
        </div>
        <div className='segunda'></div>
         <img className='fotoflor2' src={florfofa2}/>
        
        <div className='linha2'>
         
          <div className='linha2-corpo'>
         
         <h5 className='titulo-linha'>Use água limpa e fresca:</h5>
        <p className='textos'>Troque a água do vaso regularmente, a cada dois dias, para evitar a proliferação de bactérias.</p>
        </div>
        </div>
        </div>
        </Col>
        <Col>
        </Col>
      </Row>
      </Container>
    </>
   
  );
}

export default Home;




