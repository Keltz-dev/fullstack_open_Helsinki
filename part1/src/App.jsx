import Header from "./components/header";
import Content from "./components/content";
import Total from "./components/total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const sum = (array) => array.reduce((acc, cur) => acc + cur, 0);

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total exercisesSum={sum(course.parts.map(({ exercises }) => exercises))} />
    </div>
  );
};

export default App;
