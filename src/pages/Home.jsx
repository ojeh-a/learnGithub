const Home = () => {
  return (
    <div>
      <section className="introduction">
      <div>
        <h1>WELCOME</h1>
        <p>Hi, I am Ojeh, welcome to my page. I am an aspiring software engineer with who values simplicity and efficiency.</p>
      </div>
      <div className="">
      <img className="intro-image" src="/src/assets/main-qimg-9282996e48098f0814742129fc7b1469-lq.jpg" alt="intro-image" />
      </div>

      </section>
      <section className="skills">
        <h2>SKILLS</h2>
        <ul>
          <li>Bash Scripting</li>
          <li>Low Level Programming</li>
          <li>High Level Programming</li>
          <li>DevOps</li>
          <li>System Administration</li>
          <li>version control/souce code management</li>
          <li>Web Development</li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <div>project</div>
        <div>project</div>
        <div>project</div>
      </section>
      

    </div>
  )
}

export default Home