import image1 from "@/assets/images/Students/Uzzal Saha.jpg";
import ResearchStudentSingle from "@/components/researchStudent/ResearchStudentSingle";

const phdStudents = [
  {
    image: image1,
    name: "Uzzal Saha",
    projectTitle: "Cryptography and secure communication",
    registrationNumber: "140354",
    session: "2014-15",
    email: "uzzal.saha@pust.ac.bd",
    mobile: "+8801712123456",
    jobStatus: "Assistant Professor",
    status: "Complete",
  },
];
const mPhilStudents = [
  {
    image: image1,
    name: "Uzzal Saha",
    projectTitle: "Cryptography and secure communication",
    registrationNumber: "140354",
    session: "2014-15",
    email: "uzzal.saha@pust.ac.bd",
    mobile: "+8801712123456",
    jobStatus: "Assistant Professor",
    status: "Complete",
  },
];
const mScStudents = [
  {
    image: image1,
    name: "Uzzal Saha",
    projectTitle: "Cryptography and secure communication",
    registrationNumber: "140354",
    session: "2014-15",
    email: "uzzal.saha@pust.ac.bd",
    mobile: "+8801712123456",
    jobStatus: "Assistant Professor",
    status: "Complete",
  },
];

function ResearchGuidance() {
  return (
    <div className="w-[650px] mx-auto mt-16">
      <div className="">
        <h2 className="w-fit px-4 py-2 mx-auto text-center mt-10 text-3xl text-[#FF6900] border border-[#FF6900] raleway-font font-bold mb-4 pb-2">
          Research Guidance
        </h2>
      </div>
      <h2 className="mt-16 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        Ph.D. Students
      </h2>
      <div>
        {phdStudents.map((students, index) => (
          <ResearchStudentSingle key={index} students={students} />
        ))}
      </div>
      <h2 className="mt-16 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        MPhil Students
      </h2>
      <div>
        {mPhilStudents.map((students, index) => (
          <ResearchStudentSingle key={index} students={students} />
        ))}
      </div>
      <h2 className="mt-16 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        MSc Students
      </h2>
      <div>
        {mScStudents.map((students, index) => (
          <ResearchStudentSingle key={index} students={students} />
        ))}
      </div>
    </div>
  );
}

export default ResearchGuidance;
