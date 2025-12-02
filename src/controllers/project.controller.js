import { createProject, getAllprojects } from "../services/project.service.js";
import { z } from "zod";

const createSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
export async function create(req, res) {
  console.log(req.body);
  try {
    const result = createSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: result.error.issues[0].message });
    }

    const { name } = result.data;
    const owner_id = req.user.id;

    const project = await createProject({ name, owner_id });

    res.status(201).json(project);
  } catch (err) {
    console.error(err);

    const status = err.statusCode || 500;
    const message = err.statusCode ? err.message : "Failed to register user";

    return res.status(status).json({ error: message });
  }
}

export async function getAll(req, res) {
  try {
    const owner_id = req.user.id;

    const projects = await getAllprojects({ owner_id });
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    const status = err.statusCode || 500;
    const message = err.statusCode ? err.message : "Failed to get projects";

    return res.status(status).json({ error: message });
  }
}
