import React, { useState, useEffect } from "react";

export const GroupIdentification: React.FC = (): JSX.Element => {
  const [optionA, setOptionA] = useState(true);

  useEffect(() => {
    setOptionA((prevOption) => !prevOption);
  }, []);

  return (
    <>
      <div>{optionA ? <OptionA /> : <OptionB />}</div>
    </>
  );
};

const OptionA = (): JSX.Element => {
  return <h1>DUUUUUUUUUUUPA</h1>;
};

const OptionB = (): JSX.Element => {
  return <h1>KUUUUUUUTAS</h1>;
};
