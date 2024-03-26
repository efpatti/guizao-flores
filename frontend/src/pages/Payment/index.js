import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
} from "@chakra-ui/react";
// import { Form } from "react-bootstrap"; // Importe Form do react-bootstrap
import "../Payment/pagamento.css";
import pix from "../../img/pix.jpeg";
import guizao from "../../img/debit&credit.jpg";
import QR from "../../img/qrcode-pix.png";

function Payment() {
  const [exibirForms, setExibirForms] = useState(true);

  const handleClick = () => {
    setExibirForms(!exibirForms);
  };

  return (
    <Flex mt="8.5rem">
      <div className={exibirForms ? "elojob" : "caixa-berde"}>
        {exibirForms ? (
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
            </div>
          </div>
        ) : (
          <div className="text">
            <img src={QR} width={320} />
          </div>
        )}
      </div>
      <button className="butao" onClick={handleClick}>
        <img src={exibirForms ? pix : guizao} />
      </button>
    </Flex>
  );
}

export default Payment;
