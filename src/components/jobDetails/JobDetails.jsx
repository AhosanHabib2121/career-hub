import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { getStoredJobApplication, saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const jobData = jobs.find(job => job.id === idInt)
    const handleApplyJob = () => {
        // getStoredJobApplication()
        // saveJobApplication(jobData.id);

        const dataStored = [];
        const getJobDataLS = JSON.parse(localStorage.getItem('jobApplied'));
        if (!getJobDataLS) {
            dataStored.push(jobData);
            localStorage.setItem('jobApplied', JSON.stringify(dataStored));
            toast('You have applied successfully')
        }
        else {
            const isExists = getJobDataLS.find(data => data.id == idInt)
            if (!isExists) {
                dataStored.push(...getJobDataLS, jobData);
                localStorage.setItem('jobApplied', JSON.stringify(dataStored));
                toast('You have applied successfully')
            }
            else {
                toast('Already Exists')
            }
        }
 
    }

    return (
        <div>
            <div className="grid md:grid-cols-4 gap-4 mt-10 mb-20">
                <div className="md:col-span-3">
                    <p className="mb-5"><span className="text-[#1A1919] font-bold">Job Description : </span><span className="text-[#757575]">{jobData.job_description}</span></p>
                    
                    <p className="mb-5"><span className="text-[#1A1919] font-bold">Job Responsibility : </span><span className="text-[#757575]">{jobData.job_responsibility}</span></p>
                    <div>
                        <h2 className="text-[#1A1919] font-bold">Educational Requirements:</h2>
                        <p className="text-[#757575] my-2">{ jobData.educational_requirements}</p>
                    </div>

                    <div>
                        <h2 className="text-[#1A1919] font-bold">Experiences:</h2>
                        <p className="text-[#757575] my-3">{ jobData.experiences}</p>
                    </div>
                </div>

                <div className="md:col-span-1 ">
                    <div className="bg-[#7E90FE1A] px-4 py-4 mb-6 rounded-md">
                         <h2 className="text-[#1A1919] font-bold">Job Details</h2>
                        <div className="border border-gray-300 my-4"></div>
                        <div className="space-y-2">
                            <h3><span className="#474747 text-base xt- font-bold">Salary</span> : <span className="text-[#757575]">{jobData.salary} (per month)</span></h3>

                            <h3><span className="#474747 text-base xt- font-bold">Job Title</span> : <span className="text-[#757575]">{jobData.job_title}</span></h3>
                        </div>
                        <h2 className="text-[#1A1919] font-bold mt-3">Contact Information</h2>
                        <div className="border border-gray-300 my-4"></div>
                        <div className=" space-y-2">
                            <h3><span className="#474747 text-base xt- font-bold">Phone</span> : <span className="text-[#757575]">{jobData.contact_information.phone}</span></h3>

                            <h3><span className="#474747 text-base xt- font-bold">Email</span> : <span className="text-[#757575]">{jobData.contact_information.email}</span></h3>

                            <h3><span className="#474747 text-base xt- font-bold">Address</span> : <span className="text-[#757575]">{jobData.contact_information.address}</span></h3>
                        </div>   
                    </div>
                    <div >
                        <button onClick={handleApplyJob} className="btn btn-primary w-full normal-case">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default JobDetails;