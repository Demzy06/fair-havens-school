import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import useToTop from "../hooks/useToTop";

import MailOutlineRoundedIcon from "@iconify-react/material-symbols/mail-outline-rounded";
import ClockIcon from "@iconify-react/tabler/clock";
import LocationIcon from "@iconify-react/boxicons/location";

function ContactUs() {
  useToTop();

  return (
    <>
      <div>
        <Header />
        <div className="bgBlueLogo pl-4 pr-4 p-20 ">
          <div className="md:w-[75%] md:m-auto">
            <h1 className="text-center underline uppercase text-white mb-8 md:text-[48px]">
              Get In Touch
            </h1>
            <p className="text-[16px]">
              Whether you have a question, would like to visit our school, or
              are ready to begin the admissions process, our friendly and
              dedicated team is here to help. We are committed to providing the
              guidance and support you need and look forward to welcoming you to
              our school.
            </p>
          </div>
        </div>

        <div className="pr-5 pl-5 mt-10 text-gray-800 md:flex md:pl-30 md:pr-30 md:justify-between">
          <div className="md:w-[50%]">
            <div className="md:h-fit">
              <h3 className="md:text-[35.2px] md:mb-5">Contact Us</h3>
              <p className="text-[14px] mt-3 mb-3 leading-7 md:text-[18px]">
                Complete the form and a member of our team will get back to you
                within 24 hours. For urgent enquirie, please call us directly.
              </p>
            </div>

            <div className=" mb-4 flex mt-5">
              <span className="flex items-center p-3.5 rounded-full mr-3 bg-[#E6ECE8]">
                <MailOutlineRoundedIcon height="1.3em" />
              </span>
              <div>
                <h4 className="text-[14px] font-medium md:text-[17px]">
                  General Enquiries
                </h4>
                <p className="text-[14px] md:text-[16px]">
                  info@fairhavens.edu
                </p>
              </div>
            </div>

            <div className=" mb-4 flex">
              <span className="flex items-center p-3.5 rounded-full mr-3 bg-[#E6ECE8]">
                <ClockIcon height="1.3em" />
              </span>
              <div>
                <h4 className="text-[14px] font-medium md:text-[17px]">
                  Official Hours
                </h4>
                <p className="text-[14px] md:text-[16px]">
                  Monday - Friday: 8:00am - 4:00pm
                </p>
              </div>
            </div>

            <div className="mb-12 flex ">
              <span className="flex items-center p-3 pl-3.75 pr-3.75 h-12.5 mt-2 md:mt-0 md:p-3.5 md:h-fit rounded-full mr-3 bg-[#E6ECE8]">
                <LocationIcon height="1.3em" />
              </span>
              <div>
                <h4 className="text-[14px] font-medium md:text-[17px]">
                  Address
                </h4>
                <p className="text-[14px] md:text-[16px]">
                  Plot 2 & 4 Road D Ladugba Estate, Ita Oluwo, Ogijo, Ogun State
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[43%]">
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
