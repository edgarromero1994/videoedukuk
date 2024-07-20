import "./Features.css"

const Features = () => {
  return (
    <>
    <section className="features">
    <h2>Awesome Features</h2>
    <p>Master programming logic with JavaScript through clear and engaging videos</p>
    <div className="fea-base">
        <div className="fea-box">
            <i className="fas fa-graduation-cap"></i>
            <h3>Interactive Lessons</h3>
            <p>Learn programming logic step-by-step with interactive examples and exercises</p>
        </div>

        <div className="fea-box">
            <i className="fas fa-video"></i>
            <h3>Engaging Videos</h3>
            <p>Watch clear and concise videos that make complex concepts easy to understand</p>
        </div>

        <div className="fea-box">
            <i className="fas fa-code"></i>
            <h3>Practical Exercises</h3>
            <p>Practice what you learn with hands-on exercises and real-world examples</p>
        </div>
    </div>
</section>
    </>
  )
}

export default Features