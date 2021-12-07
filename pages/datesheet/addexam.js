import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import firebase from "../../firebase/clientApp";
// Import the useAuthStateHook
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const ExamForm = () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const router = useRouter();

  const [input, setInput] = useState({
    examSubject: "",
    examDuration: "",
    examRoom: "",
    examTime: "",
    examDate: "",
  });

  const [inputError, setInputError] = useState("");

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitButton = () => {
    if (input.examSubject == "") {
      setInputError("Subject Name Cannot be Empty");
    } else if (input.examSubject == "") {
      setInputError("Subject Name Cannot be Empty");
    } else if (input.examDate == "") {
      setInputError("Exam Date Cannot be Empty");
    } else if (input.examRoom == "") {
      setInputError("Room Number Cannot be Empty");
    } else if (input.examTime == "") {
      setInputError("Exam Time Cannot be Empty");
    } else if (input.examDuration == "") {
      setInputError("Exam Duration Cannot be Empty");
    } else {
      firebase.firestore().collection("exams").add({
        name: input.examSubject,
        date: input.examDate,
        room: input.examRoom,
        duration: input.examDuration,
        time: input.examTime,
      });
      router.push("/datesheet");
    }
  };

  return (
    <div>
      {user && user.uid !== "7b0OSak2BzVjsDwa90AFqw2F1Al1" ? (
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
          <Heading>Add Exam</Heading>
          <TimeTable>
            {inputError && <Description>{inputError}</Description>}
            <br />
            <Input
              type="text"
              name="examSubject"
              onChange={onChangeHandler}
              placeholder="Name of Subject"
              value={input.examSubject}
            />
            <br />
            <Input
              type="text"
              name="examDate"
              onChange={onChangeHandler}
              placeholder="Date of Exam"
              value={input.examDate}
            />
            <br />
            <Input
              type="text"
              name="examRoom"
              onChange={onChangeHandler}
              placeholder="Room Number"
              value={input.examRoom}
            />
            <br />
            <Input
              type="text"
              name="examTime"
              onChange={onChangeHandler}
              placeholder="Exam Starts At"
              value={input.examTime}
            />
            <br />
            <Input
              type="text"
              name="examDuration"
              onChange={onChangeHandler}
              placeholder="Duration of Exam"
              value={input.examDuration}
            />
            <br />
          </TimeTable>
          <Buttons>
            <Button onClick={submitButton}>Submit Now</Button>
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

const Input = styled(motion.input)`
  width: 20rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  border-radius: 0.25rem;
`;

const TimeTable = styled(motion.div)`
  height: 60vh;
  width: 80%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
