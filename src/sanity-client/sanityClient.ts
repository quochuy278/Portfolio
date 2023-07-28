// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET_NAME,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// // uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getSkills() {
  const skills = await client.fetch(`*[_type == "Skill"]`);
  return skills;
}

export async function getExperiences() {
  const experience = await client.fetch(`*[_type == "Experience"]`);
  return experience;
}

export async function getEducations() {
  const educations = await client.fetch(`*[_type == "Education"]`);
  return educations;
}

export async function getBiography() {
  const biography = await client.fetch(`*[_type == "Biography"]`);
  return biography;
}

export async function getProjects() {
  const projects = await client.fetch(`*[_type == "Projects"]`);
  return projects;
}

export async function getProjectsById(projectId: string) {
  const project = await client.fetch(
    `*[_type == "Projects" && _id == "${projectId}"]`
  );
  return project;
}

