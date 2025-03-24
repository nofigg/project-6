import React from 'react';
import { Layout } from '../components/Layout';
import ProjectGallery from '../components/ProjectGallery';

function ProjectsPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="font-ibm-plex-sans text-4xl font-semibold text-white">
          Project Gallery
        </h1>
        <ProjectGallery />
      </div>
    </Layout>
  );
}

export default ProjectsPage;
