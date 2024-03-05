import Part from "./part";

const Content = ({ parts }) => {
  return (
    <>
      Contains exercises in:
      {parts.map((part) => (
        <Part {...part} key={part.id} />
      ))}
    </>
  );
};

export default Content;
