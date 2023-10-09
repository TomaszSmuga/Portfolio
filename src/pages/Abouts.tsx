import { useParams } from "react-router-dom";

export const Abouts = () => {
  const { id } = useParams();
  return (
    <>
      <h1>About me page: {id}</h1>;
    </>
  );
};
