import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "../../Utilities/Firebase/firebase";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ErrorText from "../../components/ErrorText/ErrorText";

export const LoginPage: React.FC = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");

    setAuthenticating(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthenticating(false);
        setError("Unable to sign in try again later.");
      });
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 800 }}>
        {" "}
        <Header as="h2" color="teal" textAlign="center">
          Login to your account
        </Header>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="huge"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="huge"
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button
            color="teal"
            fluid
            size="huge"
            onClick={() => signInWithEmailAndPassword()}
            disabled={authenticating}>
            Log in
          </Button>
          <small>
            <p>
              Don't have an account? <Link to="/register">Click here</Link>
            </p>
          </small>
          <ErrorText error={error} />
        </Form>
      </Grid.Column>
    </Grid>
  );
};
