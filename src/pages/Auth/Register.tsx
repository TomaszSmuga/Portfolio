import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Utilities/Firebase/firebase";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = () => {
    if (error !== "") setError("Please make sure your passwords match");

    setRegistering(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        if (error.code.includes("auth/weak-password")) {
          setError("Please enter stronger password");
        } else if (error.code.includes("auth/email-already-in-use")) {
          setError(`This email is already in use`);
        }
        setRegistering(false);
      });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Register your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button
              color="teal"
              fluid
              size="large"
              onClick={signUpWithEmailAndPassword}
              disabled={registering}>
              Register
            </Button>
            <small>
              <p>
                Already have an account? <Link to="/login">Click here</Link>
              </p>
            </small>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default RegisterPage;
