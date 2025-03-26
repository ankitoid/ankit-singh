import React from "react";

export const Education = () => {
  const educationData = [
    {
      course: "B. TECH (Computer Science and Engineering)",
      institute: "Sushila Devi Bansal College of Engineering, Indore",
      session: "2020-2024",
      grade: "7.77 CGPA",
    },
    {
      course: "INTERMEDIATE (MP Board)",
      institute: "Govt Higher Secondary School, Chhatarpur",
      session: "2019-2020",
      grade: "75.8%",
    },
    {
      course: "MATRICULATION (MP Board)",
      institute: "Dr. K. N. Memorial Higher Secondary School, Chhatarpur",
      session: "2017-2018",
      grade: "78.2%",
    },
  ];

  const trainingData = [
    {
      name: "JAVA 2.o",
      duration: "Feb 2022-June 2022",
      institute: "Universal Informatics, Indore",
      description:
        "I learned creating a full-stack dynamic web application using Java technology.",
    },
    {
      name: "Programming Basics",
      duration: "Jan 2022-Mar 2022",
      institute: "Indian Institute of Technology, Bhopal",
      description:
        "I learned creating an RPA bot using UiPath Studio to automate repetitive, rule-based tasks.",
    },
    {
      name: "TCS-ION Career Edge",
      duration: "Sep 2022-Oct 2022",
      institute: "TCS ION Learning Hub",
      description:
        "Course covered communication, presentation, soft skills, business etiquette, and IT fundamentals, enhancing my professional and interpersonal capabilities.",
    },
  ];

  return (
    <section className="py-24 px-8 md:px-20 bg-[#111010]" id="myEducation">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Education & Training</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Education Section */}
        <div className="flex-1 bg-gray-600 shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Education</h2>
          {educationData.map((itm, index) => (
            <div key={index} className="bg-gray-50 shadow-md p-6 rounded-lg mb-6 transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold text-gray-800">{itm.course}</h4>
              <p className="text-gray-600 italic">{itm.institute}</p>
              <div className="flex justify-between text-gray-700 mt-2">
                <div>{itm.session}</div>
                <div className="font-medium">Grade: {itm.grade}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Training Section */}
        <div className="flex-1 bg-gray-600 shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Training</h2>
          {trainingData.map((itm, index) => (
            <div key={index} className="bg-gray-50 shadow-md p-6 rounded-lg mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold text-gray-800">{itm.name}</h4>
                <p className="text-gray-600">{itm.duration}</p>
              </div>
              <p className="text-gray-600 italic">{itm.institute}</p>
              <p className="text-gray-700 mt-2">{itm.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
