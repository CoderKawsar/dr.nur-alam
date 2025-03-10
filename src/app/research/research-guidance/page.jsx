import uzzalSahaPic from "@/assets/images/Students/Uzzal Saha.jpg";
import mayaPic from "@/assets/images/Students/Mst. Umme Mahbuba Maya.jpg";
import farzanaMunniPic from "@/assets/images/Students/farzana munni.jpg";
import shahidHasanPic from "@/assets/images/Students/shahid-hasan.jpg";
import ResearchStudentSingle from "@/components/researchStudent/ResearchStudentSingle";

const phdStudents = [
  {
    image: uzzalSahaPic,
    name: "Uzzal Saha",
    projectTitle: "Machine Learning and ANN",
    registrationNumber: "140354",
    session: "2014-15",
    email: "uzzal.saha@pust.ac.bd",
    mobile: "+8801712123456",
    jobStatus: "Assistant Professor",
    status: "Complete",
  },
  {
    image: mayaPic,
    name: "Mst. Umme Mahbuba Maya",
    projectTitle: "Cryptography and secure communication",
    registrationNumber: "12014",
    session: "2009-10",
    email: "maya.umme@pust.ac.bd",
    mobile: "+8801712123474",
    jobStatus: "Lecturer",
    status: "Complete",
  },
];
const mPhilStudents = [
  {
    image: farzanaMunniPic,
    name: "Farzana munni",
    projectTitle: "Machine Learning and ANN",
    registrationNumber: "140354",
    session: "2014-15",
    email: "munni.farzana@pust.ac.bd",
    mobile: "+8801712123456",
    jobStatus: "Lecturer",
    status: "Complete",
  },
];
const mScStudents = [
  {
    image: shahidHasanPic,
    name: "Md. Shahid Hasan",
    projectTitle: "A Comprehensive Study of B-spline Curves",
    registrationNumber: "160374",
    session: "2017-18",
    email: "shahid.hossain2@pust.ac.bd",
    mobile: "+8801712413456",
    jobStatus: "Lecturer",
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
        M.Phil. Students
      </h2>
      <div>
        {mPhilStudents.map((students, index) => (
          <ResearchStudentSingle key={index} students={students} />
        ))}
      </div>
      <h2 className="mt-16 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        M.Sc. Students
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
