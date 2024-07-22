import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How GetJob Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Sign up and create your profile to get started. It's quick, easy, and free!
              </p>
            </div>

            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Browse through thousands of job listings or post your job to find the right candidates.

              </p>
            </div>

            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Submit your application for your desired job or recruit suitable candidates effortlessly.

              </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;