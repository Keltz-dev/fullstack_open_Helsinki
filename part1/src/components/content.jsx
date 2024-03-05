import Part from "./part";

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map(({ name, exercises }, index) => (
        <Part name={name} exercises={exercises} key={index} />
      ))}
    </>
  );
};

export default Content;
