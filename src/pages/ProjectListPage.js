import React from 'react';
import ProjectList from '../components/ProjectList';
import projectContent from './project-content';

const ProjectListPage = () => (
    <>
    <h1>Projects</h1>
    <ProjectList projects={projectContent} />
    </>
);

export default ProjectListPage