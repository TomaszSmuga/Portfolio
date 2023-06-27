import { FC, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { TrueMatrix } from "../components/Matrix/Matrix";
import { FalseMatrix } from "../components/Matrix/FalseMatrix";
import { Square } from "../components/Matrix/Generator";
import { Step6Option } from "./Step6";
import { Provider, useDispatch, useSelector } from "react-redux";
import { updateSquares } from "../redux/reduxSlice";
import { store } from "../redux/store";
type Step6TaskProps = {
  data: Step6Option;
  onChange: (value: Step6Option) => void;
  matrixToShow: Square[]; // Dodany prop matrixToShow
};

export const Step6Task: FC<Step6TaskProps> = ({
  data,
  onChange,
  matrixToShow, // Dodany prop matrixToShow
}) => {
  const [answer, setAnswer] = useState<boolean | undefined>(data.answer);
  const dispatch = useDispatch();
  const squares = useSelector((state) => state.squares.squares);

  const handleChange = (_e, { value }) => {
    const a = value === "1" ? true : false;
    setAnswer(a);
    onChange({ ...data, answer: a });
  };

  useEffect(() => {
    dispatch(updateSquares(matrixToShow));
  }, [matrixToShow]);

  useEffect(() => {
    setAnswer(data.answer);
  }, [data.answer]);

  return (
    <>
      <Provider store={store}>
        <Form.Group inline>
          {data.questionNumber % 3 === 0 || data.questionNumber % 4 === 0 ? (
            <>
              <div className="task">
                <TrueMatrix squares={squares} />
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
                <TrueMatrix squares={squares} />
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
      </Provider>
    </>
  );
};
