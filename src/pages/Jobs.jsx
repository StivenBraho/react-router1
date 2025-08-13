import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jobsData from "../assets/data.json";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setJobs(jobsData); // not jobsData.jobs
    }, []);

    const handleInterested = (id) => {
        navigate(`/jobs/${id}`);
    };

    return (
        <div className="jobs-page">
            <h1 className="jobs-title">Job Openings</h1>

            <ul className="jobs-list">
                {jobs.map((job) => (
                    <li key={job.id} className="job-card">
                        <h2>{job.title}</h2>
                        <p>{job.location} • {job.type}</p>
                        <p>{job.description}</p>
                        <button onClick={() => handleInterested(job.id)}>I'm Interested</button>
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default Jobs;
