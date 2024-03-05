import Part from "./Part";

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
