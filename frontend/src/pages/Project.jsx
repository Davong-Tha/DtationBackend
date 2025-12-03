//this place is going to list all the projects later but for now it is just for creating project
import React from 'react';
import { useEffect, useState } from "react";
import { CreateProject, getAllProjects } from "../api/Project.api";
import { useAuth } from "../context/Auth.context";
import {
  BackgroundStyle,
  buttonStyle,
  form_text_style,
  formStyle,
  input_style,
} from "../styles/style";

export default function Project() {
  const [name, setName] = useState("");
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { loginToken } = useAuth();

  const [message, setMessage] = useState("");
  const [errr, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getAllProjects({ token: loginToken });
        setProjects(data);
        console.log("Projects:", data);
      } catch (err) {
        setError(err.message);
      }
    }
    if (loginToken) {
      fetchProjects();
    }
  }, [loginToken]);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");
    console.log("token", loginToken);
    try {
      const data = await CreateProject({ name, token: loginToken });
      setMessage("Project Created!");
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  }
  const CreateProjectForm = (
    <div className={BackgroundStyle}>
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold text-slate-900">Create Project</h1>
      </div>
      <div className={formStyle}>
        <form onSubmit={handleSubmit}>
          <label className={form_text_style}>Project Name</label>
          <br />
          <input
            className={input_style}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex gap-3">
            <button className={buttonStyle} type="submit">
              Create Project
            </button>
            <button className={buttonStyle} onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const ProjectListView = (
    <div className="flex flex-col items-center  justify-center mt-6">
      {projects.length == 0 ? (
        <p className="text-m"> No project yet</p>
      ) : (
        <ul>
          {projects.map((p) => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      )}

      <button className={buttonStyle} onClick={() => setShowForm(true)}>
        + Create Project
      </button>
    </div>
  );
  return <div>{showForm ? CreateProjectForm : ProjectListView}</div>;
}
