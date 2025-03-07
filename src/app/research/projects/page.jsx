function ProjectPage() {
  const activeProjects = [
    {
      year: "2024-2025",
      description:
        "Research Grant from the University Grand Commission grant at PUST, Bangladesh, BD TK. xxxxxx.00, 2024-2025; Project title: B-Spline approximation for solving two-point boundary value problems (On Going).",
    },
    {
      year: "2023-2025",
      description:
        "Exact soliton solutions, Lie symmetry, conservation laws, chaos, Bifurcation, and stability analysis of nonlinear integral and fractional partial differential equations in applied science, applied mathematics, physics, nonlinear dynamics, Engineering and mathematical physics.",
    },
    {
      year: "2022-2025",
      description:
        "Dr. Md Nur Alam is currently serving towards developing numerical modeling of Fluid Flow, Heat Transfer, blood flow, Nanofluid Flow, Single/Hybrid Nanofluid Flow, Transport in Porous Medium, and its applications by implementing COMSOL Multi-physics modeling and Tecplot software.",
    },
  ];

  const completedProjects = [
    {
      year: "2023-2024",
      description:
        "Research Grant (Special) from the University Grand Commission grant at PUST, Bangladesh, BD TK. 300,000.00, 2023-2024; Project title: Investigation of new solitary stochastic structures to the Heisenberg Ferromagnetic Spin Chain model via a Stratonovich sense (Completed).",
    },
    {
      year: "2022-2023",
      description:
        "Research Grant from the Ministry of Science and Technology (বিজ্ঞান ও প্রযুক্তি মন্ত্রণালয়-গণপ্রজাতন্ত্রী বাংলাদেশ সরকার), Bangladesh, BD TK. 250,000.00, 2023-2024; Project title: Study of the parametric effect of the wave profiles of the time-space fractional soliton neuron model equation arising in the topic of neuroscience (Completed).",
    },
    {
      year: "2022-2023",
      description:
        "Research Grant from the Ministry of Science and Technology (বিজ্ঞান ও প্রযুক্তি মন্ত্রণালয়-গণপ্রজাতন্ত্রী বাংলাদেশ সরকার), Bangladesh, BD TK. 300,000.00, 2022-2023; Project title: The agreement between the novel exact and numerical solutions of the nonlinear models (Completed)",
    },
  ];
  return (
    <div className="w-[650px] mx-auto mt-16">
      <h2 className="mt-10 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        Current Projects
      </h2>
      <ul>
        {activeProjects.map((project, index) => (
          <li key={index} className="flex gap-x-4 mb-2">
            <p className="font-bold">{project.year}</p>
            <p className="newsreader-font text-[17px] leading-normal text-justify">
              {project.description}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        Completed Projects
      </h2>
      <ul>
        {completedProjects.map((project, index) => (
          <li key={index} className="flex gap-x-4 mb-2">
            <p className="font-bold">{project.year}</p>
            <p className="newsreader-font text-[17px] leading-normal text-justify">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectPage;
