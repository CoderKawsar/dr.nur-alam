import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function MenuBottom() {
  return (
    <div className="py-16 px-12">
      <h2 className="text-[#FF6900] raleway-font text-5xl font-bold mb-6">
        Nonlinear Dynamics and Symmetries Scientific Research Lab (NDSSRL)
      </h2>
      <div className="grid grid-cols-12">
        <p className="times-new-roman-font text-2xl leading-normal col-span-9">
          Nonlinear Dynamics and Symmetries Scientific Research Lab is a
          cutting-edge research group dedicated to advancing the understanding
          and exploration of nonlinear evolution equations, partial differential
          equations, and nonlinear systems. At the heart of our research lies
          the fascination with nonlinear systems&aps; intricate and often
          unpredictable behaviors, which play a crucial role in numerous
          scientific disciplines and real-world phenomena.
        </p>
        <div className="col-span-3 flex justify-center items-center">
          <Link
            href="/research/publications"
            className="text-2xl underline hover:no-underline hover:text-blue-800"
          >
            Explore the lab
            <HiOutlineArrowLongRight className="ml-1 inline" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuBottom;
