import { Step6Option } from "../pages/Step6";
import { FC, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

type Step6TaskProps = {
  data: Step6Option;
  onChange: (value: Step6Option) => void;
  checkedIndex: number;
};

export const Step6Task: FC<Step6TaskProps> = ({
  data,
  onChange,
  checkedIndex,
}) => {
  const [answer, setAnswer] = useState<boolean | undefined>(undefined);

  const handleChange = (): void => {
    const newAnswer = !answer;
    setAnswer(newAnswer);
    onChange({ ...data, answer: newAnswer });
  };

  useEffect(() => {
    if (data && data.answer !== undefined) {
      setAnswer(data.answer);
    }
  }, [data]);

  return (
    <>
      <Form.Group inline>
        <Form.Radio
          label="Wybór 1"
          checked={
            checkedIndex === data.questionNumber && answer !== undefined
              ? answer
              : false
          }
          onChange={handleChange}
        />
        <Form.Radio
          label="Wybór 2"
          checked={
            checkedIndex === data.questionNumber && answer !== undefined
              ? !answer
              : false
          }
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
};
