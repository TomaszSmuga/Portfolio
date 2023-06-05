import { TaskImg } from "./Task.styled";
import React, { useState, useEffect } from "react";
import { Ticker } from "../CountDowns/CountDowns";
import { ImgLinks } from "../../Utilities/Link";
interface CountDown {
  seconds: number;
}
export const Task1: React.FC<CountDown> = () => {
  return <Ticker seconds={3} imgLinks={ImgLinks} imgIndex={0} />;
};

export const Task2: React.FC = () => {
  return <Ticker seconds={3} imgLinks={ImgLinks} imgIndex={2} />;
};

export const Task3: React.FC = () => {
  return <Ticker seconds={3} imgLinks={ImgLinks} imgIndex={4} />;
};

export const Task4: React.FC = () => {
  return <Ticker seconds={3} imgLinks={ImgLinks} imgIndex={6} />;
};

export const Task5: React.FC = () => {
  return <Ticker seconds={3} imgLinks={ImgLinks} imgIndex={8} />;
};

export const Task6: React.FC = () => {
  return <Ticker seconds={3} imgLinks={ImgLinks} imgIndex={10} />;
};
