import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    const topRight = () => {
      toast.success("Form sent successfully!", {
        position: "top-right",
      });
    };

    const topRightError = () => {
      toast.success("", {
        position: "top-right",
      });
    };

    e.preventDefault();

    emailjs
      .sendForm("service_eakfgg3", "template_qlb6trs", form.current, {
        publicKey: "OZY428ci0qoSf8098",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          topRight();
        },
        (error) => {
          console.log("FAILED...", error.text);
          topRightError();
        },
      );
  };
  return (
    <>
      <ToastContainer />
      <div className="bg-[#F7F9F6] p-12 pr-8 pl-8 rounded-xl text-gray-800">
        <div className="mb-6">
          <h4 className="text-[20px] font-medium md:text-[25px]">
            Send Us a Message
          </h4>
          <p className="text-[13px] md:text-[16px]">
            We'll respond within 24 hours
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label className="block mb-1 uppercase text-[13px] font-medium md:text-[15px]">
              First Name *
            </label>
            <input
              required
              type="text"
              name="user_firstname"
              className="border w-full rounded-md p-2.5 text-[13px] mb-4 md:text-[15px] md:p-3.5 md:mt-1"
              placeholder="First name"
            />
            <label className="block mb-1 text-[13px] font-medium uppercase md:text-[15px]">
              Last Name *
            </label>
            <input
              required
              type="text"
              name="user_lastname"
              className="border w-full rounded-md p-2.5 text-[14px] mb-4 md:text-[15px] md:p-3.5 md:mt-1"
              placeholder="Last name"
            />
          </div>
          <label className="block mb-1 text-[13px] font-medium uppercase md:text-[15px]">
            Phone Number *
          </label>
          <input
            required
            type="phone"
            name="user_phone"
            className="border w-full rounded-md p-2.5 text-[14px] mb-4 md:text-[15px] md:p-3.5 md:mt-1"
            placeholder="+234 000 000 0000"
          />
          <label className="block mb-1 text-[13px] font-medium uppercase md:text-[15px]">
            Email *
          </label>
          <input
            required
            type="email"
            name="user_email"
            className="border w-full rounded-md p-2.5 text-[14px] mb-4 md:p-3.5 md:mt-1"
            placeholder="your@email.com"
          />
          <label className="block mb-1 text-[13px] font-medium uppercase  md:text-[15px]">
            Message *
          </label>
          <textarea
            name="message"
            className="border w-full rounded-md p-2.5 text-[14px] mb-4 md:p-3.5 md:mt-1"
            placeholder="How can we help you?"
            rows="5"
          />
          <input
            required
            type="submit"
            value="Send Message"
            className="block w-full uppercase font-bold pt-3 pb-3 bg-[#DB5435] rounded-md text-white"
          />
        </form>
      </div>
    </>
  );
}

export default Form;
