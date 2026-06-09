import "./App.css";
import CourseCard from "./CourseCard";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Online Courses</h1>
      </div>

      <div className="course-container">
        <CourseCard />
      </div>
    </div>
  );
}

export default App;