import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "../../Utilities/Firebase/firebase";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ErrorText from "../../components/ErrorText/ErrorText";
import { UserAuth } from "../../Context/Context";

export const RegisterPage: React.FC = () => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await createUser(email, password);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error.message);
      } else {
        console.error("An unexpected error has occurred", error);
      }
    }
  };

  // const signUpWithEmailAndPassword = () => {
  //   if (error !== "") setError("Please make sure your passwords match");

  //   setRegistering(true);
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       console.log(result);
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       if (error.code.includes("auth/weak-password")) {
  //         setError("Please enter a stronger password");
  //       } else if (error.code.includes("auth/email-already-in-use")) {
  //         setError(`This email is already in use`);
  //       }
  //       setRegistering(false);
  //     });
  // };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 800 }}>
        {" "}
        {/* Adjust maxWidth as needed */}
        <Header as="h2" color="teal" textAlign="center">
          Register your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
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
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Confirm Password"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            size="huge"
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button
            color="teal"
            fluid
            size="huge"
            onClick={handleSubmit}
            disabled={registering}>
            Register
          </Button>
          <small>
            <p>
              Already have an account? <Link to="/login">Click here</Link>
            </p>
          </small>
          <ErrorText error={error} />
        </Form>
      </Grid.Column>
    </Grid>
  );
};
