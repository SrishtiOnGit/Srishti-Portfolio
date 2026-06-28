import "../styles/skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "FRONTEND",
      items: [
        { name: "HTML / CSS", level: "90%" },
        { name: "JavaScript", level: "85%" },
        { name: "TypeScript", level: "35%" },
        { name: "React", level: "85%" },
        { name: " Firebase", level: "30%" },
      ],
    },
    {
      category: "PROGRAMMING",
      items: [
        { name: "Python", level: "80%" },
        { name: "Git / GitHub", level: "75%" },
      ],
    },
  ];
  return (
    <div className="skills" id="skills">
      <h1 className="skills-title">
        Things I <span className="skills-title-02">worked with</span>
      </h1>
      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div key={index} className="skills-card">
            <h3 className="category-title">{group.category}</h3>

            <div className="skills-list">
              {group.items.map((skill, sIndex) => (
                <div key={sIndex} className="skill-row">
                  <span className="skill-name">{skill.name}</span>

                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ "--progress-width": skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
