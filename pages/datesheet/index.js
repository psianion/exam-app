import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import firebase from "../../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
var _ = require("lodash");

function DateSheet() {
  const [user, loading, error] = useAuthState(firebase.auth());

  const [exams, examsLoading, examsError] = useCollection(
    firebase.firestore().collection("exams"),
    {}
  );

  const test = [];

  if (!examsLoading && exams) {
    exams.docs.map((doc) => {
      test.push(doc.data());
    });
  }

  let group = _.groupBy(test, "date");

  return (
    <HomeContainer>
      <Heading>Exam Date Sheet</Heading>
      <TimeTable>
        {Object.entries(group).map(([key, value], i) => (
          <>
            <h1>{key}</h1>
            <div>
              {value.map((val) => (
                <p>{val.name}</p>
              ))}
            </div>
          </>
        ))}
      </TimeTable>

      <Buttons>
        {user.uid === "7b0OSak2BzVjsDwa90AFqw2F1Al1" && (
          <Link href="/datesheet/addexam">
            <Button>Add Exam</Button>
          </Link>
        )}
        <Link href="/">
          <Button>Go Back</Button>
        </Link>
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

export default DateSheet;
