import React from "react";
import timelineElements from "../assets/timeline.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Category = () => {
  const workIconStyles = { background: " #2575fc" };
  const schoolIconStyles = { background: "white" };

  return (   
    <div id="works" className=" border-b-[1px] border-t-[1px] border-y-white" style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", padding: "2rem" }}>
        <h1 className="bg-black/50 mix-blend-screen text-4xl pb-16 font-bold text-center pt-7"  >
            How It works?
        </h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const showButton = element.buttonText?.trim();

          return (
            <VerticalTimelineElement
              key={element.key}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              contentStyle={{
                background: "linear-gradient(to right,black, #2575fc)",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid #2575fc" }}
              icon={
                isWorkIcon ? (
                  <img src="/work.svg" alt="Work" className=" sm:h-10 sm:w-8 sm:ml-1  md:h-16 md:w-10 md:ml-2" />
                ) : (
                  <img src="/school.svg"  alt="School"  className=" sm:h-10 sm:w-8 sm:ml-1  md:h-16 md:w-10 md:ml-2"/>
                )
              }
            >
              <h3 className="text-2xl font-semibold ">{element.title}</h3>
              <p id="text-2xl h-12 pt-2">{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>

  );
};

export default Category;
