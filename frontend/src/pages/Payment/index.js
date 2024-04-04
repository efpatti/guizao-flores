import React, { useState, useEffect } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
  Input,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import { MdOutlineContentCopy } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import Timer from "../../Timer";
import QR from "../../img/qrcode-pix.png";
import pix from "../../img/pix.png";
import guizao from "../../img/debit.png";

function Payment() {
  const [exibirForms, setExibirForms] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

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
      color={colorMode === "light" ? "black" : "white"}
      bg={colorMode === "light" ? "white" : "transparent"}
    >
      <Box>
        <h2>{`Preço Total: ${totalPrice}`}</h2>
      </Box>
      <div className={exibirForms ? "elojob" : "caixa-berde"}>
        {exibirForms ? (
          <>
            <div>
              <h3 className="textPayment">Seus dados, para finalizar..</h3>
              <div className="formInfo elojob">
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
                    <FormLabel>N° do cartão</FormLabel>
                    <Input placeholder="XXXX-XXXX-XXXX-XXXX" maxLength={20} />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Nome do titular</FormLabel>
                    <Input placeholder="Ex: Enzo" />
                  </FormControl>
                  <FormControl isRequired>
                    <Container>
                      <Row>
                        <Col className="ultima">
                          <FormLabel>CVV</FormLabel>
                          <FormLabel className="data">Data</FormLabel>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="ultima">
                          <Input className="CVV" placeholder="XXX" />
                          <Input className="CVV" placeholder="XX/XX" />
                        </Col>
                        <Col></Col>
                      </Row>
                    </Container>
                  </FormControl>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text">
            <Timer />
            <Flex justify="center">
              <img className="qrcode" src={QR} width={200} alt="QR Code" />
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
      </div>
      <button
        className={colorMode === "light" ? "butao" : "butao-black"}
        onClick={handleClick}
      >
        <img src={exibirForms ? pix : guizao} alt="Imagem" />
      </button>
    </Flex>
  );
}

export default Payment;
