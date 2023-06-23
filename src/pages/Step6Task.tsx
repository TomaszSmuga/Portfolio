import {Step6Option} from '../pages/Step6';
import {FC, useEffect, useState} from 'react';
import {Form} from 'semantic-ui-react';

type Step6TaskProps = {
    data: Step6Option;
    onChange: (value: Step6Option) => void
}

export const Step6Task: FC<Step6TaskProps> = ({ data, onChange }) => {
    const [answer, setAnswer] = useState<number>(0);


    // @ts-ignore
    const handleChange = (e, { value }) => {
        const a = Boolean(value);
        setAnswer(a);
        onChange({ ...data, answer: a });
    };

    useEffect(() => {
        setAnswer(Number(data.answer));
    }, []);

    return (
        <>
            <Form.Group inline>
                <Form.Radio
                    label="Wybór 1"
                    value={1}
                    checked={1 == answer}
                    // @ts-ignore
                    onChange={handleChange}
                />
                <Form.Radio
                    label="Wybór 2"
                    value={0}
                    checked={0 == answer}
                    // @ts-ignore
                    onChange={handleChange}
                />
            </Form.Group>
        </>
    );
};
