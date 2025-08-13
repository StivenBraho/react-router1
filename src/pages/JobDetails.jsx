import React from "react";
import { useParams } from "react-router-dom";
import jobsData from "../assets/data.json";

const JobDetails = () => {

    const { id } = useParams();
    const job = jobsData.find((j) => j.id === parseInt(id));

    if (!job) return <p>Job not found</p>;


    return (
        <div className="job-details-container">
            <h1 className="job-title">{job.title}</h1>

                <p className="job-meta">{job.location}</p>

                <p className="job-description">{job.description}</p>

            <h3>Requirements:</h3>
                <ul>
                    {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                    ))}
                </ul>

            <h3>Benefits:</h3>
                <ul>
                    {job.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                    ))}
                </ul>

        </div>
    );
};

export default JobDetails;
