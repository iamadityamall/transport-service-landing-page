import React from "react";
import NavbarTwo from "../components/NavbarTwo";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Privacy = () => {
  return (
    <>
      <NavbarTwo />
      <section className="mx-auto mt-32 w-[90vw]  lg:w-[85vw] xl:w-[75vw] mb-10">
        <div className="flex flex-col space-y-20 font-poppins text-sm p-4 md:mt-40">
          <div className="font-bold text-lg">
            <h1>Privacy Policy</h1>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <p>
                At siddhilogistics.netlify.app, accessible from
                https://siddhilogistics.netlify.app, one of our main priorities
                is the privacy of our visitors. This Privacy Policy document
                contains types of information that is collected and recorded by
                priyaoptics.com and how we use it. If you have additional
                questions or require more information about our Privacy Policy,
                do not hesitate to contact us.
              </p>
              <p>
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in
                siddhilogistics.netlify.app. This policy is not applicable to
                any information collected offline or via channels other than
                this website.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-lg">Consent</h1>
              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Information we collect</h1>
              <p>
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information. If you contact us directly, we may receive
                additional information about you such as your name, email
                address, phone number, the contents of the message and/or
                attachments you may send us, and any other information you may
                choose to provide. When you register for an Account, we may ask
                for your contact information, including items such as name,
                company name, address, email address, and telephone number.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">How we use your information</h1>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="p-2">
                <li>- Provide, operate, and maintain our website</li>
                <li>- Improve, personalize, and expand our website</li>
                <li>- Understand and analyze how you use our website</li>
                <li>
                  - Develop new products, services, features, and functionality
                </li>
                <li>
                  - Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </li>
                <li>- Send you emails</li>
                <li>- Find and prevent fraud</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Log Files</h1>
              <p>
                siddhilogistics.netlify.app follows a standard procedure of
                using log files. These files log visitors when they visit
                websites. All hosting companies do this and a part of hosting
                services' analytics. The information collected by log files
                include internet protocol (IP) addresses, browser type, Internet
                Service Provider (ISP), date and time stamp, referring/exit
                pages, and possibly the number of clicks. These are not linked
                to any information that is personally identifiable. The purpose
                of the information is for analyzing trends, administering the
                site, tracking users' movement on the website, and gathering
                demographic information.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">
                Advertising Partners Privacy Policies
              </h1>
              <p>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of siddhilogistics.netlify.app.
              </p>
              <p>
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on
                siddhilogistics.netlify.app, which are sent directly to users'
                browser. They automatically receive your IP address when this
                occurs. These technologies are used to measure the effectiveness
                of their advertising campaigns and/or to personalize the
                advertising content that you see on websites that you visit.
              </p>
              <p>
                Note that siddhilogistics.netlify.app has no access to or
                control over these cookies that are used by third-party
                advertisers.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">
                Third Party Privacy Policies
              </h1>
              <p>
                siddhilogistics.netlify.app's Privacy Policy does not apply to
                other advertisers or websites. Thus, we are advising you to
                consult the respective Privacy Policies of these third-party ad
                servers for more detailed information. It may include their
                practices and instructions about how to opt-out of certain
                options.
              </p>
              <p>
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">{`CCPA Privacy Rights (Do Not Sell My Personal Information)`}</h1>
              <p>
                Under the CCPA, among other rights, California consumers have
                the right to:
              </p>
              <ul className="p-2">
                <li>
                  - Request that a business that collects a consumer's personal
                  data disclose the categories and specific pieces of personal
                  data that a business has collected about consumers.
                </li>
                <li>
                  - Request that a business delete any personal data about the
                  consumer that a business has collected.
                </li>
                <li>
                  - Request that a business that sells a consumer's personal
                  data, not sell the consumer's personal data.
                </li>
                <li>
                  - If you make a request, we have one month to respond to you.
                  If you would like to exercise any of these rights, please
                  contact us.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">GDPR Data Protection Rights</h1>
              <p>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
              </p>
              <ul className="p-2">
                <li>
                  The right to access – You have the right to request copies of
                  your personal data. We may charge you a small fee for this
                  service.
                </li>
                <li>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                </li>
                <li>
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                </li>
                <li>
                  The right to object to processing – You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                </li>
                <li>
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you, under certain conditions.
                </li>
              </ul>
              <p>
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Children's Information</h1>
              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>
              <p>
                priyaoptics.com does not knowingly collect any Personal
                Identifiable Information from children under the age of 13. If
                you think that your child provided this kind of information on
                our website, we strongly encourage you to contact us immediately
                and we will do our best efforts to promptly remove such
                information from our records.
              </p>
            </div>
          </div>
          <div>
            <NavLink to="/#contact" className="py-2 bg-colorOne rounded-lg px-2">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;
