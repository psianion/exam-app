import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import firebase from "../../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
var _ = require("lodash");

function DateSheet() {
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
          <ExamContainer>
            <Date>{key}</Date>
            <DetailsContainer>
              {value.map((val) => (
                <Details>
                  <h1>{val.name}</h1>
                  <h2>Room: {val.room}</h2>
                  <h2>Time: {val.time}</h2>
                  <h2>Duration: {val.duration} hrs</h2>
                </Details>
              ))}
            </DetailsContainer>
          </ExamContainer>
        ))}
      </TimeTable>

      <Buttons>
        <Link href="/datesheet/addexam">
          <Button>Add Exam</Button>
        </Link>
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
  margin-top: 5rem;
`;

const ExamContainer = styled(motion.div)`
  background-color: #383c40;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
`;

const Date = styled(motion.h1)`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`;

const DetailsContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Details = styled(motion.div)`
  background-color: #3f4348;
  margin: 0.5rem;
  height: 6rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;
  border-radius: 0.5rem;
`;

const TimeTable = styled(motion.div)`
  max-height: 50rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
