import Header from "./header";
import Content from "./content";
import Total from "./total";

const Course = ({ name, parts }) => {
  const sum = (array) => array.reduce((s, p) => s + p, 0);

  return (
    <div>
    <Header courseName={name}/>
    <Content parts={parts}/>
    <Total exercisesSum={sum(parts.map(({ exercises }) => exercises))} />
    </div>
  )
};

export default Course;
