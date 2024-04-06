import {
  Container,
  Row,
  Button,
  Form,
  InputGroup,
  Stack,
  Col,
  Image,
} from "react-bootstrap";
import { Box } from "@chakra-ui/react";
import * as formik from "formik";
import * as yup from "yup";
import "./SignUp.css";
import Eu from "../../img/eu.jpg";
import buque1 from "../../img/buque-12-rosas-brancas.png";
import buque2 from "../../img/buque-de-gypsophila-encantada-amarelo-removebg-preview.png";

function SignUp() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Box mt="8.5rem">
      <Stack direction="horizontal">
        <Col>
          <Image src={buque1} fluid />
        </Col>
        <Col>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              firstName: "Mark",
              lastName: "Otto",
              username: "",
              city: "",
              state: "",
              zip: "",
              terms: false,
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Container>
                <Row>
                  <Col>
                    <Form
                      noValidate
                      onSubmit={handleSubmit}
                      className="formulario"
                    >
                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationFormik01"
                        >
                          <Form.Label>Nome</Form.Label>
                          <Form.Control
                            type="text"
                            name="Nome"
                            value={values.firstName}
                            onChange={handleChange}
                            isValid={touched.firstName && !errors.firstName}
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationFormik02"
                        >
                          <Form.Label>Sobrenome</Form.Label>
                          <Form.Control
                            type="text"
                            name="Sobrenome"
                            value={values.lastName}
                            onChange={handleChange}
                            isValid={touched.lastName && !errors.lastName}
                          />

                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationFormikUsername"
                        >
                          <Form.Label>Usuario</Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">
                              @
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="Usuario"
                              aria-describedby="inputGroupPrepend"
                              name="username"
                              value={values.username}
                              onChange={handleChange}
                              isInvalid={!!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.username}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          md="6"
                          controlId="validationFormik03"
                        >
                          <Form.Label>Cidade</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Cidade"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            isInvalid={!!errors.city}
                          />

                          <Form.Control.Feedback type="invalid">
                            {errors.city}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationFormik04"
                        >
                          <Form.Label>Estado</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Estado"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            isInvalid={!!errors.state}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.state}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationFormik05"
                        >
                          <Form.Label>CPF</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="CPF"
                            name="zip"
                            value={values.zip}
                            onChange={handleChange}
                            isInvalid={!!errors.zip}
                          />

                          <Form.Control.Feedback type="invalid">
                            {errors.zip}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Form.Group className="mb-3">
                        <Form.Check
                          required
                          name="terms"
                          label="Aceitar Termos e Condições"
                          onChange={handleChange}
                          isInvalid={!!errors.terms}
                          feedback={errors.terms}
                          feedbackType="invalid"
                          id="validationFormik0"
                        />
                      </Form.Group>
                      <Button type="submit"> Cadastrar-se</Button>
                    </Form>
                  </Col>
                </Row>
                <h1 className="text-center">Pegue sua Flor</h1>
              </Container>
            )}
          </Formik>
        </Col>
        <Col>
          <Image src={buque2} fluid />
        </Col>
      </Stack>

      <Container fluid>
        <div className="d-flex justify-content-center items-center">
          <Col xs={3} md={2}>
            <Image src={Eu} roundedCircle />
          </Col>
        </div>
      </Container>
    </Box>
  );
}

export default SignUp;
