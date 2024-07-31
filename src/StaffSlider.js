import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import TextExpander from "./TextExpander";
const StaffData = [
  {
    id: 1,
    name: "Eva Sanchez",
    post: "Fashion Stylist",
    image: "E_commerce_photos/eva_sanchez.jpg",
    info: "Eva Sanchez Inche is a professional fashion stylist  with  seven more years on her Desperate Housewives contract",
  },
  {
    id: 2,
    name: "Camilla Smith",
    post: "Managing Partner",
    image: "E_commerce_photos/manging_partner.jpg",
    info: "Chich and Couture is committed to providing a positive work environment for its employees.",
  },
  {
    id: 3,
    name: "Isabella Taglieri",
    post: "Project Manager",
    image: "E_commerce_photos/project_manager.jpg",
    info: "Maintain a gratifying career that utilizes innovative project management strategies, which expand company productivity.",
  },
  {
    id: 4,
    name: "William Baker",
    post: "Creative Director",
    image: "E_commerce_photos/creative_director.jpg",
    info: "Design Editor for Northeastern's Huntington News, Technician at Northeastern's Slide Library",
  },
];

export default function StaffSlider() {
  const staffData = StaffData;
  const [currentDataIndex, setCurrentDataIndex] = useState(1);

  function handlePrevious() {
    if (currentDataIndex > 1) {
      setCurrentDataIndex(currentDataIndex - 1);
    }
  }
  function handleNext() {
    if (currentDataIndex < staffData.length) {
      setCurrentDataIndex(currentDataIndex + 1);
    }
  }
  const slideStyle = {
    width: "100%",
    height: "50%",
    borderRadius: "10px",
    backgroundPosition: "center",
    paddingLeft: "70px",
    backgroundSize: "140px",
    backgroundImage: `url(${staffData[currentDataIndex - 1].image})`,
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <p className="team">Meet the Team</p>
      <div className="border_slider">
        <div className="sliderStyles">
          <div className="left_button">
            <button className="previous" onClick={handlePrevious}>
              <GrFormPrevious />
            </button>
          </div>
          <div className="right_button">
            <button className="next" onClick={handleNext}>
              <MdOutlineNavigateNext />
            </button>
          </div>
          <div style={slideStyle}></div>
          <p style={{ textAlign: "center" }}>
            {staffData[currentDataIndex - 1].name}
          </p>

          <p style={{ textAlign: "center", color: "grey" }}>
            {staffData[currentDataIndex - 1].post}
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "gray",
            }}
          >
            {staffData[currentDataIndex - 1].info}
          </p>
          <div className="dotContainerStyles">
            {staffData.map((slide, slideIndex) => (
              <div key={slideIndex} className="dotStyle">
                {slideIndex <= currentDataIndex - 1 ? (
                  <div>
                    <svg height="100" width="100">
                      <circle
                        cx="5"
                        cy="5"
                        r="5"
                        stroke="black"
                        stroke-width="0.5"
                        fill="gray"
                      />
                    </svg>
                  </div>
                ) : (
                  <svg height="100" width="100">
                    <circle
                      cx="5"
                      cy="5"
                      r="5"
                      stroke="black"
                      stroke-width="0.5"
                      fill="none"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="content">
          <p>
            <TextExpander
              collapsedNumWords={24}
              buttonColor="black"
              expanded={true}
            >
              Our team is a dynamic group of dedicated proffesionals who
              collaborate closely to bring our customers the latest trends in
              fashion and design .With expertise in areas such as merchandising
              , design ,photography , marketing and technology, our team ensures
              a seamless experience for online shoppers.
            </TextExpander>
          </p>
        </div>
      </div>
    </>
  );
}
