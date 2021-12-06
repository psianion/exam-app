import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import firebase from "../firebase/clientApp";
// Import the useAuthStateHook

function Home() {
  return (
    <HomeContainer>
      <Heading>Exam Coordination System</Heading>
      <Description>
        I am a veryy abd guy please strayy away from me your motherfucking
        bitchh
      </Description>
      <Buttons>
        <Link href="/datesheet">
          <Button>Hello Boys</Button>
          {/*
          {user ? (
            <Button>{user.displayName}</Button>
          ) : (
            <Button>Hello Boys</Button>
          )}
          */}
        </Link>
        <Button>Bye NBOys</Button>
      </Buttons>
    </HomeContainer>
  );
}

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
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

export default Home;
