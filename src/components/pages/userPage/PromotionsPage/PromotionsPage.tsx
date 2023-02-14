import { Box, Slide } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { MessageText, PromotionContainer } from ".";

type Props = {};

export default function PromotionsPage({}: Props) {
  const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Please like and subscribe",
  ];

  const containerRef = useRef();
  const [messageIndex, setMssageIndex] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);
  // console.log(containerRef);
  useEffect(() => {
    const showInterval = setInterval(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMssageIndex((i) => (i + 1) % messages.length);
      setShow(true);
    }, 4000);

    //After 4second it will clear
    return () => {
      clearInterval(intervalId);
      clearInterval(showInterval);
    };
  }, []);

  // console.log(show);
  // console.log(messageIndex);

  return (
    <PromotionContainer ref={containerRef}>
      <Slide
        ref={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{ enter: 500, exit: 100 }}
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionContainer>
  );
}
