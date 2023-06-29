import { FC, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

import { FalseMatrix } from "../components/Matrix/FalseMatrix";
import { Square } from "../components/Matrix/Generator";
import { Step6Option } from "./Step6";
import { useSelector } from "react-redux";

type Step6TaskProps = {
  data: Step6Option;
  onChange: (value: Step6Option) => void;
};

export const Step6Task: FC<Step6TaskProps> = ({ data, onChange }) => {
  const [answer, setAnswer] = useState<boolean | undefined>(data.answer);
  const squares = useSelector((state: { matrix: Square[] }) => state.matrix);

  const handleChange = (_e, { value }) => {
    const a = value === "1" ? true : false;
    setAnswer(a);
    onChange({ ...data, answer: a });
  };

  useEffect(() => {
    setAnswer(data.answer);
  }, [data.answer]);

  return (
    <>
      <Form.Group inline>
        {data.questionNumber % 3 === 0 || data.questionNumber % 4 === 0 ? (
          <>
            <div className="task">
              <div className="grid">
                {squares.map((square) => (
                  <div
                    key={square.id}
                    className={`${square.select ? "red" : "yellow"}`}></div>
                ))}
              </div>{" "}
              <Form.Radio
                label="Wybór 1"
                value="1"
                checked={answer === true}
                onChange={handleChange}
              />
            </div>
            <div className="task">
              <FalseMatrix />
              <Form.Radio
                label="Wybór 2"
                value="0"
                checked={answer === false}
                onChange={handleChange}
              />
            </div>
          </>
        ) : (
          <>
            <div className="task">
              <FalseMatrix />
              <Form.Radio
                label="Wybór 1"
                value="0"
                checked={answer === false}
                onChange={handleChange}
              />
            </div>
            <div className="task">
              <div className="grid">
                {squares.map((square) => (
                  <div
                    key={square.id}
                    className={`${square.select ? "red" : "yellow"}`}></div>
                ))}
              </div>
              <Form.Radio
                label="Wybór 2"
                value="1"
                checked={answer === true}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </Form.Group>
    </>
  );
};
