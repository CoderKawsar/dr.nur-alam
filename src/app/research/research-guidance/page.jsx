import uzzalSahaPic from "@/assets/images/Students/Uzzal Saha.jpg";
import mayaPic from "@/assets/images/Students/Mst. Umme Mahbuba Maya.jpg";
import hamidaPic from "@/assets/images/Students/hamida.jpg";
import suchiPic from "@/assets/images/Students/suchi.jpg";
import forhadPic from "@/assets/images/Students/forhad.jpg";
import farzanaMunniPic from "@/assets/images/Students/farzana munni.jpg";
import shahidHasanPic from "@/assets/images/Students/shahid-hasan.jpg";
import shamimPhdPic from "@/assets/images/Students/shamim-phd.jpg";
import ResearchStudentSingle from "@/components/researchStudent/ResearchStudentSingle";

const phdStudents = [
  {
    image: shamimPhdPic,
    name: "Md. Shamim Hasan",
    projectTitle: "",
    registrationNumber: "",
    session: "",
    email: "",
    mobile: "",
    jobStatus: "",
    status: "",
  },
];
const mPhilStudents = [];
const mScStudents = [
  {
    image: suchiPic,
    name: "Mst. Shammi Akter Sochi",
    projectTitle:
      "Investigating Exact Solutions of Nonlinear Evolution Equations in Mathematical Physics through Analytical Techniques",
    registrationNumber: "170324",
    session: "2020-21",
    email: "",
    mobile: "",
    jobStatus: "",
    status: "Complete",
  },
  {
    image: hamidaPic,
    name: "Hamida Parvin",
    projectTitle:
      "Exploring dynamic waveforms in nonlinear models with analytic techniques",
    registrationNumber: "170325",
    session: "2020-21",
    email: "",
    mobile: "",
    jobStatus: "",
    status: "Complete",
  },
];

const bScStudents = [
  {
    image: forhadPic,
    name: "Md. Forhad Hossain",
    projectTitle: "Machine Learning and ANN",
    registrationNumber: "170324",
    session: "2020-21",
    email: "",
    mobile: "",
    jobStatus: "",
    status: "Ongoing",
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
      {mPhilStudents?.length > 0 && (
        <h2 className="mt-16 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
          M.Phil. Students
        </h2>
      )}
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
      <h2 className="mt-16 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        B.Sc. Students
      </h2>
      <div>
        {bScStudents.map((students, index) => (
          <ResearchStudentSingle key={index} students={students} />
        ))}
      </div>
    </div>
  );
}

export default ResearchGuidance;
