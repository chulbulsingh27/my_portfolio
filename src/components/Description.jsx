import Portfolio from "./Portfolio";

const projects = [
    {
      projectName: "My Project",
      projectLink: "https://github.com/chulbulsingh27/weather-app",
    },
    {
      projectName: "Your Project",
      projectLink: "https://github.com/chulbulsingh27/Travel-App",
    },
    {
      projectName: "Their Project",
      projectLink: "https://github.com/chulbulsingh27/image-slider",
    },
    {
        projectName: "His Project",
        projectLink:"https://github.com/chulbulsingh27/redux-toolkit-shopping-cart"
    },
    {
        projectName: "Her Project",
        projectLink:"https://github.com/chulbulsingh27/image-slider"
    },
    {
        projectName: "Aman Project",
        projectLink:"https://github.com/chulbulsingh27/Todo-app"
    }
  ];
  
  const Description = () => {
    return (
      <ul>
        {projects.map((project) => (
          <Portfolio projectName={project.projectName} projectLink={project.projectLink} />
        ))}
      </ul>
    );
  };
  
  export default Description;