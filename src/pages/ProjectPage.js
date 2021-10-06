import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';
import projectContent from './project-content';

const ProjectPage = ( { match } ) => {
    const name = match.params.name;
    const project = projectContent.find(project => project.name === name);

    const [projectInfo, setProjectInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const results = await fetch(`/api/projects/${name}`); 
            const body = await results.json(); 
            setProjectInfo(body);
        }
        fetchData();
    }, [name]);

    if (!project) return <NotFoundPage/>

    const otherProjects = projectContent.filter(project => project.name !== name);

    return (
        <>
        <h1>{project.title}</h1>
        <UpvotesSection projectName={name} upvotes={projectInfo.upvotes} setProjectInfo={setProjectInfo}/>
        {project.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <CommentsList comments={projectInfo.comments} />
        <AddCommentForm projectName={name} setProjectInfo={setProjectInfo} />
        <h3>Other Articles:</h3>
        <ProjectList projects={otherProjects}  />
        </>
    );
    }

export default ProjectPage