import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ jobData }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = jobData;
    
    return (
            
        <div className="card card-compact bg-base-100 ">
            <figure><img src={logo} alt="not found"/></figure>
            <div className="card-body">
                <h2 className="card-title">{ job_title }</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-4 py-2 border-2 rounded border-[#7E90FE] mr-3 text-[#7E90FE] font-extrabold text-base">{ remote_or_onsite }</button>
                    <button className="px-4 py-2 border-2 rounded border-[#7E90FE] mr-3 text-[#7E90FE] font-extrabold text-base">{ job_type }</button>
                </div>
                <div className="mt-4 flex gap-5">
                    <h2 className="flex text-[#757575] text-lg font-semibold"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{ location }</h2>
                    <h2 className="flex text-[#757575] text-lg font-semibold"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>Salary: { salary }</h2>
                </div>
                <div className="card-actions mt-5 mb-8">
                    <Link to={`/jobDetails/${id}`} state={company_name} className="btn btn-primary normal-case">View Details</Link>
                </div>
            </div>
        </div>
    
        
    );
};

export default Job;