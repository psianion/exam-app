import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import firebase from "../../firebase/clientApp";
// Import the useAuthStateHook
import { useAuthState } from "react-firebase-hooks/auth";

const ExamForm = () => {
  const [user, loading, error] = useAuthState(firebase.auth());

  return (
    <div>
      {user.uid !== "7b0OSak2BzVjsDwa90AFqw2F1Al1" ? (
        <HomeContainer>
          <Buttons>
            <Link href="/auth">
              <Button>Login as Admin</Button>
            </Link>
            <Link href="/datesheet">
              <Button>Go Back</Button>
            </Link>
          </Buttons>
        </HomeContainer>
      ) : (
        <HomeContainer>
          <Heading>Hello, {user.displayName}</Heading>
          <Description>
            I am a veryy abd guy please strayy away from me your motherfucking
            bitchh
          </Description>
          <TimeTable></TimeTable>
          <Buttons>
            <Link href="/datesheet">
              <Button>Go Back</Button>
            </Link>
          </Buttons>
        </HomeContainer>
      )}
    </div>
  );
};

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;
const TimeTable = styled(motion.div)`
  height: 60vh;
  background-color: gray;
  width: 80%;
  border-radius: 0.5rem;
`;

const Heading = styled(motion.h1)`
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
`;
const Buttons = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 35rem;
  height: 3rem;
  margin-top: 1rem;
`;
const Button = styled(motion.button)`
  border: none;
  cursor: pointer;

  width: 12rem;
  padding: 0.5rem 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  border-radius: 0.25rem;
`;

export default ExamForm;
