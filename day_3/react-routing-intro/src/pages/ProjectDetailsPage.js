import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ProjectDetailsPage({ projectsData }) {
  const [ foundProject, setFoundProject ] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    // const project = projectsData.find((project) => {
    //   return project._id === projectId;
    // })

    // if(project) setFoundProject(project);

    // then/catch
    axios.get(`http://example.com/api/projects/${projectId}`)
      .then(({ data }) => {
        setFoundProject(data);
      })
      .catch((err) => console.log('ERROR:', err));

    // async/await + try/catch
    async function getData() {
      try {
        const { data } = await axios.get(`http://example.com/api/projects/${projectId}`)
        setFoundProject(data);
      } catch (error) {
        console.log('ERROR:', error);
      }
    }
    getData();

  }, [projectId, projectsData]);

  

  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject
        ? <h3>Project not found!</h3>
        : (
          <>
            <h2>{foundProject.name}</h2>
            <h3>Tech Stack: {foundProject.technologies}</h3>
            <p>{foundProject.description}</p>
          </>
        )}
      <Link to="/projects">Back</Link>
    </div>
  )
}

export default ProjectDetailsPage