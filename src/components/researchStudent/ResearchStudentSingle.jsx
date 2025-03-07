import Image from "next/image";

function ResearchStudentSingle({ students }) {
  return (
    <div className="flex mb-6 shadow rounded">
      <div className="h-[350px] rounded-l">
        <Image
          src={students.image}
          alt="Student"
          className="w-full h-full object-cover rounded-l"
        />
      </div>
      <div className="pl-4 pt-4 bg-[#FDF5CB] flex flex-col gap-y-2 newsreader-font text-[17px] rounded-r">
        <h4 className="text-xl font-semibold">
          Name: <span className="font-normal">{students.name}</span>
        </h4>
        <h5 className="font-semibold">
          Project Title:{" "}
          <span className="font-normal">{students.projectTitle}</span>
        </h5>
        <p className="font-semibold">
          Registration Number:{" "}
          <span className="font-normal">{students.registrationNumber}</span>
        </p>
        <p className="font-semibold">
          Session: <span className="font-normal">{students.session}</span>
        </p>
        <p className="font-semibold">
          Email: <span className="font-normal">{students.email}</span>
        </p>
        <p className="font-semibold">
          Mobile: <span className="font-normal">{students.mobile}</span>
        </p>
        <p className="font-semibold">
          Job status: <span className="font-normal">{students.jobStatus}</span>
        </p>
        <p className="font-semibold">
          Status: <span className="font-normal">{students.status}</span>
        </p>
      </div>
    </div>
  );
}

export default ResearchStudentSingle;
