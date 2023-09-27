import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const AppliedJobs = () => {
    const getJobDataLS = JSON.parse(localStorage.getItem('jobApplied'));
    const [displayJobs, setDisplayJobs] = useState(getJobDataLS);

    const handleJobFilter = filter => {
            if (filter === 'all') {
                setDisplayJobs(getJobDataLS);
            }
            else if (filter === 'remote') {
                const remoteJobs = getJobDataLS.filter(job => job.remote_or_onsite === 'Remote') 
                setDisplayJobs(remoteJobs);
            }
            else if(filter === 'onsite') {
                const onsiteJobs = getJobDataLS.filter(job => job.remote_or_onsite === 'Onsite') 
                setDisplayJobs(onsiteJobs);
            }
    }

    // sodo id localstore reke use korar system and alada page localstore data get and set
    
    // const jobsData = useLoaderData();
    // const [appliedJobs, setAppliedJobs] = useState([]);
   
    // useEffect(() => {
    //     const storedJobs = getStoredJobApplication();
    //     if (storedJobs.length > 0) {
    //         // option-1
    //         const jobApplied = jobsData.filter(job => storedJobs.includes(job.id))
    //         console.log(jobApplied)

    //         // option-2
    //         // const jobApplied = [];
    //         // for (let id of storedJobs) {
    //         //     const job = jobsData.find(job => job.id == id)
    //         //     if (job) {
    //         //         jobApplied.push(job);
    //         //     }
    //         // }
    //         setAppliedJobs(jobApplied);
    //         setDisplayJobs(jobApplied);
    //     }
    // }, [jobsData])

    // console.log(displayJobs)

    return (
        <div>
            <div className="mt-10 mb-20">
                <h2 className="text-2xl">Job Applied length : {getJobDataLS.length}</h2>
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleJobFilter('all')}><a>All</a></li>
                        <li onClick={()=>handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=>handleJobFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
                {
                    displayJobs.map(job =>  <li key={job.id}>
                        <span>{job.job_title} {job.company_name} : { job.remote_or_onsite }</span>
                   </li>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;