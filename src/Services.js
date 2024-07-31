import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import React from "react";
import { useState } from "react";
const ServicesData = [
  {
    icon: <MdOutlineSecurityUpdateGood />,
    title: "Safety for clients",
    info: "We are the only ones to offer you the option to return the product, and our policies are designed to give you maximum support.",
  },
  {
    icon: <FaAmazonPay />,
    title: "Payment on delivery",
    info: " Pay on delivery. With credit/debit card. With paypal.",
  },
  {
    icon: <MdAccessTime />,
    title: "24/7 Support",
    info: "Don't hesitate to contact us. You will receive a quick response in less than 1 minute.  ",
  },
];
export default function Services() {
  const [services, setServices] = useState(ServicesData);
  return (
    <>
      <p className="team">Services</p>
      <section className="services">
        <div className="services-center">
          {services.map((ser) => (
            <ServicesList service={ser} />
          ))}
        </div>
      </section>
    </>
  );
}
function ServicesList({ service }) {
  return (
    <article className="service">
      <span>{service.icon}</span>
      <h6>{service.title}</h6>
      <p>{service.info}</p>
    </article>
  );
}
