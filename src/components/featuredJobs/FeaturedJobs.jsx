import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center mb-12">
                <h2 className="text-2xl">Featured Jobs</h2>
                <p >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} jobData={job}></Job>)
                }
            </div>
            <div className={`text-center mb-20 ${dataLength === jobs.length && 'hidden'}`}>
                <button className="btn btn-primary normal-case"
                    onClick={()=> setDataLength(jobs.length)}
                >Show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;