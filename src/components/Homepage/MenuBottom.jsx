import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function MenuBottom() {
  return (
    <div className="py-16 px-12">
      <h2 className="text-[#FF6900] raleway-font text-3xl font-bold mb-6">
        Computer Aided Geometric Design (CAGD) and Computer Graphics Research
        Group
      </h2>
      <div className="grid grid-cols-12">
        <p className="text-justify times-new-roman-font text-2xl leading-normal col-span-9">
          Computer Aided Geometric Design (CAGD) and Computer Graphics Research
          Group at Pabna University of Science and Technology primarily focuses
          on the mathematical foundations of computer graphics, geometric
          modeling, image processing, scientific computing, and information
          visualization.
        </p>
        <div className="col-span-3 flex justify-center items-center">
          <Link
            target="_blank"
            href="https://pust.ac.bd/academic/departments/dept_teachers/dept_teachers_profile/100041"
            className="text-2xl underline hover:no-underline hover:text-blue-800"
          >
            Explore details
            <HiOutlineArrowLongRight className="ml-1 inline" />
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-[#FF6900] raleway-font text-3xl font-bold mb-6">
          Computational Fluid Dynamics (CFD) and Heat Transfer Research Group
        </h2>
        <p className="times-new-roman-font text-2xl leading-normal text-justify">
          Computational Fluid Dynamics (CFD) and Heat Transfer Research Group. A
          Computational Fluid Dynamics (CFD) and Heat Transfer Research Group
          focuses on numerical modeling of fluid flow and heat transfer using
          tools like COMSOL, ANSYS Fluent, and AI-driven techniques. Key areas
          include multiphase flow, nanofluids, porous media, and bioheat
          transfer. Applications range from aerospace and energy systems to
          biomedical engineering and electronics cooling. The group integrates
          AI, machine learning, and fractional differential equations to enhance
          simulation accuracy. Collaboration with interdisciplinary experts and
          securing research funding drive innovation, making CFD a powerful tool
          for solving real-world thermal and fluid dynamics challenges
          efficiently
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-[#FF6900] raleway-font text-3xl font-bold mb-6">
          Numerical simulations and Nonlinear Dynamics Research Group
        </h2>
        <p className="times-new-roman-font text-2xl leading-normal text-justify">
          The Numerical Simulations and Nonlinear Dynamics Research Group is a
          pioneering hub dedicated to advancing the study of nonlinear evolution
          equations, partial differential equations, and complex nonlinear
          systems. Our research delves into the intricate and often
          unpredictable behaviors of nonlinear systems, which are fundamental to
          numerous scientific disciplines and real-world applications. By
          leveraging cutting-edge numerical simulations and analytical
          techniques, we explore the dynamics of chaotic systems, wave
          propagation, and stability analysis, contributing to fields such as
          fluid mechanics, plasma physics, and mathematical biology. Our work
          not only enhances theoretical understanding but also drives innovation
          in engineering, computational sciences, and applied mathematics.
          Through interdisciplinary collaboration and advanced computational
          tools, we aim to develop robust models and solutions for real-world
          challenges, pushing the boundaries of nonlinear science and its
          applications.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-[#FF6900] raleway-font text-3xl font-bold mb-6">
          Machine Learning, Data Science and Artificial Neural Network Research
          Group{" "}
        </h2>
        <p className="times-new-roman-font text-2xl leading-normal text-justify">
          The Machine Learning, Data Science, and Artificial Neural Network
          Research Group is dedicated to pioneering advancements in intelligent
          computing, predictive analytics, and deep learning. Our research
          focuses on developing robust machine learning algorithms, data-driven
          models, and artificial neural networks to solve complex real-world
          problems across various domains, including computational mathematics,
          fluid dynamics, biomedical engineering, and financial forecasting. By
          integrating big data analytics, optimization techniques, and AI-driven
          simulations, we strive to enhance decision-making, automate processes,
          and improve predictive accuracy. Our interdisciplinary approach
          bridges mathematics, engineering, and computer science, enabling
          groundbreaking innovations in pattern recognition, image processing,
          and intelligent systems. Through cutting-edge research,
          high-performance computing, and collaborative projects, we aim to push
          the boundaries of data-driven discovery and AI-powered solutions,
          contributing to the future of science and technology.
        </p>
      </div>
    </div>
  );
}

export default MenuBottom;
