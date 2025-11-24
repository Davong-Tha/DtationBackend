import Project from "../models/project.model.js";
import jwt from "jsonwebtoken";

export async function createProject({ name, owner_id }) {
  
  const project = await Project.create({
    name,
    owner_id
  })

  return {
    id: project._id,
    name: project.name,
    owner: project.owner,
    createdAt: project.createdAt,
  }
}
