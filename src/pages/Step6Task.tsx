import { Step6Option } from "../pages/Step6";
import { FC, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { ImgLinks } from "../Utilities/Link";
import { TrueMatrix } from "../components/Matrix/Matrix";
import { FalseMatrix } from "../components/Matrix/FalseMatrix";
type Step6TaskProps = {
  data: Step6Option;
  onChange: (value: Step6Option) => void;
  imgLinks: string[];
};

export const Step6Task: FC<Step6TaskProps> = ({ data, onChange }) => {
  const [answer, setAnswer] = useState<boolean | undefined>(data.answer);

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
              <TrueMatrix />
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
              <TrueMatrix />
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
