import React, { useState, useEffect } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  Input,
  useColorMode,
  Text,
  Stack,
  Box,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import "./pagamento.css";
import { MdOutlineContentCopy } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import Timer from "../../Timer";
import QR from "../../img/qrcode-pix.png";
import pix from "../../img/pix.png"; // Importe a imagem pix aqui
import guizao from "../../img/debit.png"; // Importe a imagem guizao aqui
import { formatPrice } from "../Catalogo/productDetails";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import videomidia from "../../videos/videoguizao.mp4"
function Payment() {
  const [exibirForms, setExibirForms] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const totalPriceParam = urlParams.get("totalPrice");
    setTotalPrice(parseFloat(totalPriceParam));
  }, []);

  const handleClick = () => {
    setExibirForms(!exibirForms);
  };
  const { colorMode } = useColorMode();
  return (
    <Flex
      mt="8.5rem"
      justifyContent="center"
      color={colorMode === "light" ? "black" : "white"}
      bg={colorMode === "light" ? "white" : "transparent"}
    >
      <Box
        className={exibirForms ? "elojob" : "caixa-berde"}
        h="450px"
        w="350px"
        mb="5rem"
      >
        {exibirForms ? (
          <>
            <div>
              <Text fontSize="lg" ml="2" as="b">
                {formatPrice(totalPrice)}
              </Text>
              <h3 className="textPayment">Seus dados, para finalizar..</h3>
              <Box className="formInfo elojob">
                <FormControl as="fieldset">
                  <FormLabel as="legend">Escolha forma de pagamento</FormLabel>
                  <RadioGroup defaultValue="Itachi">
                    <HStack spacing="24px">
                      <Radio value="Crédito">Crédito</Radio>
                      <Radio value="Débito">Débito</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>

                <div className="irmaozinho">
                  <FormControl isRequired>
                    <FormLabel>N° do cartâo</FormLabel>
                    <Input placeholder="XXXX-XXXX-XXXX-XXXX" maxLength={20} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Nome do titular</FormLabel>
                    <Input placeholder="Ex: Enzo" />
                  </FormControl>
                  <FormControl isRequired>
                    <Stack>
                      <Row>
                        <Col className="ultima">
                          <FormLabel>CVV</FormLabel>
                          <FormLabel className="data">Data</FormLabel>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="ultima">
                          <Input className="CVV" placeholder="XXX" mr="2" />
                          <Input className="CVV" placeholder="XX/XX" mr="2" />
                        </Col>
                      </Row>
                      <Row>
                        <Button onClick={onOpen}>Concluir Pagamento</Button>
                        </Row>
                      <Row>
                        <Col>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
  <video autoPlay loop muted>
                <source src={videomidia} type="video/mp4" />
              </video>
  </ModalContent>
</Modal>
                        </Col>
                      </Row>
                    </Stack>
                  </FormControl>
                </div>
              </Box>
            </div>
          </>
        ) : (
          <div className="text">
            <Text fontSize="lg" ml="2" as="b">
              {formatPrice(totalPrice)}
            </Text>
            <Timer />
            <Flex justify="center">
              <img className="qrcode" src={QR} width={200} />
            </Flex>
            <b className="textQR">Copie o código</b>

            <div className="boxCode ">
              <div>
                <div className="codepix">
                  <button
                    className={colorMode === "light" ? "icon" : "icon-black"}
                  >
                    <MdOutlineContentCopy />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Box>
      <button
        className={colorMode === "light" ? "butao" : "butao-black"}
        onClick={handleClick}
      >
        <img src={exibirForms ? pix : guizao} />
      </button>
    </Flex>
  );
}

export default Payment;
