function CourseCard() {
  return (
    <>
     
      <div className="card purple">
        <img
          src="react.png"
          alt="React"
          className="course-image"
        />

        <div className="card-content">
          <h2>React Development</h2>

          <p>Instructor: Kamalini</p>
          <p>Duration: 8 Weeks</p>
          <p>Rating: 4.8 Rating</p>

          <h3>₹4,999</h3>
        </div>
      </div>

      <div className="card green">

        <img
          src="python.png"
          alt="Python"
          className="course-image"
        />

        <div className="card-content">
          <h2>Python Programming</h2>

          <p>Instructor: Kathali</p>
          <p>Duration: 6 Weeks</p>
          <p>Rating: 4.7 Rating</p>

          <h3>₹3,999</h3>

        </div>
      </div>

      <div className="card orange">

        <img
          src="java.png"
          alt="Java"
          className="course-image"
        />

        <div className="card-content">
          <h2>Java Full Stack</h2>

          <p>Instructor: Kavitha</p>
          <p>Duration: 10 Weeks</p>
          <p>Rating: 4.9 Rating</p>

          <h3>₹5,999</h3>

        </div>
      </div>

      <div className="card pink">
      
        <img
          src="ui.png"
          alt="UI UX"
          className="course-image"
        />

        <div className="card-content">
          <h2>UI / UX Design</h2>

          <p>Instructor: Kavin</p>
          <p>Duration: 5 Weeks</p>
          <p>Rating: 4.6 Rating</p>

          <h3>₹3,499</h3>
        </div>
      </div>
      <div className="card blue">
        <img
          src="data.png"
          alt="Data Science"
          className="course-image"
        />

        <div className="card-content">
          <h2>Data Science Basics</h2>

          <p>Instructor: Kamalesh</p>
          <p>Duration: 12 Weeks</p>
          <p>Rating: 4.8 Rating</p>

          <h3>₹6,999</h3>
        </div>
      </div>
    </>
  );
}

export default CourseCard;