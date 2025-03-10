import Link from "next/link";

function PublicationsPage() {
  const publications = [
    {
      details:
        "[2025]: Md. Nur Alam, Investigation of new solitary stochastic structures to the Heisenberg Ferromagnetic Spin Chain model via a Stratonovich sense, Partial Differential Equations in Applied Mathematics, In Press, Journal Pre-proof, Available online 2 February 2025.",
      paper_link: "https://doi.org/10.1016/j.padiff.2025.101110",
    },
    {
      details:
        "[2025]: Danish Zaidi, Imran Talib, Muhammad Bilal Riaz, Md. Nur Alam, Extending spectral methods to solve time fractional-order Bloch equations using generalized Laguerre polynomials, Partial Differential Equations in Applied Mathematics, Volume 13, March 2025, 101049.",
      paper_link: "https://doi.org/10.1016/j.padiff.2024.101049",
    },
    {
      details:
        "[2024]: Md. Shahid Hasan, Md. Nur Alam, Md. Fayz-Al-Asad, Noor Muhammad and Cemil Tunç, B-Spline Curve Theory: An overview and applications in real life, Nonlinear Engineering: Modeling and Application, 2024; 13: 20240054.",
      paper_link: "https://doi.org/10.1515/nleng-2024-0054",
    },
    {
      details:
        "[2024]: Md. Nur Alam and Md. Azizur Rahman, Study of the parametric effect of the wave profiles of the time-space fractional soliton neuron model equation arising in the topic of neuroscience, Partial Differential Equations in Applied Mathematics, Volume 12, December 2024, 100985.",
      paper_link: "https://doi.org/10.1016/j.padiff.2024.100985",
    },
    {
      details:
        "[2024]: N.A. Mohammed, Md. Nur Alam, I. Talib, D.L.C. Ching, T.A. Assiri, M. Hassan, S. Alshehery, M.F.A. Asad, A.F. Aljohani, Sehra, and I. Khan, Exact Solutions of Nonlinear Fractional Cahn-Allen Equation Aries in Different Nonlinear Physical Phenomenon using Unified Technique, Fractals, Accepted.",
      paper_link: "https://doi.org/10.1142/S0218348X24400619",
    },
    {
      details:
        "[2024] M. Hassan, L. Tashi, Md. Nur Alam, C. K. Neog, D. Yadav, Flow around a vertical hollow cylindrical structure in a two-layer fluid of uniform depth, Journal of Mathematical Analysis, ISSN: 2217-3412, Volume 15 Issue 4 (2024), Pages 15-29.",
      paper_link: "https://doi.org/10.54379/jma-2024-4-2",
    },
    {
      details:
        "[2023] Tarikul Islam, Md. NurAlam, Shafullah Niazai, Ilyas Khan, Md. Fayz‑Al‑Asad and Sultan Alqahtani, Heat generation/absorption effect on natural convective heat transfer in a wavy triangular cavity filled with nanofluid, Scientific Report, 13, 21171 (2023).",
      paper_link: "https://doi.org/10.1038/s41598-023-48704-2",
    },
    {
      details:
        "[2024]: Mohamed Atheeque A., Sharief Basha S., Nune Pratyusha, C. Raghavendra Reddy, Md Nur Alam, Hijaz Ahmad, Nainaru Tarakaramu, Sreenivasulu K., The application of cosine similarity measures with Laplacian energy to q-rung orthopair fuzzy graphs in decision-making problems, AIP Advances 14, 055132 (2024).",
      paper_link: "https://doi.org/10.1063/5.0191079",
    },
    {
      details:
        '[2024]: Md Abdur Rahim, Fahmid Al Farid, Arpa Kar Puza, Abu Saleh Musa Miah, Md. Najmul Hossain, Sarina Mansor, Hezerul Abdul Karim, Md. Nur Alam, "An enhanced hybrid model based on CNN and BiLSTM for identifying individuals via handwriting analysis," Computer Modeling in Engineering & Sciences 2024, 140(2), 1689-1710.',
      paper_link: "https://doi.org/10.32604/cmes.2024.048714",
    },
    {
      details:
        "[2023]: Imtiaz Ahmad, Rashid Jan, Md. Nur Alam, Muhammad Nawaz Khan, Novel Techniques for Classifying Exotic Spheres in High Dimensions, BABYLONIAN JOURNAL OF MATHEMATICS, Vol. 2023, pp. 36–39 (2023).",
      paper_link: "https://doi.org/10.58496/BJM/2023/007",
    },
    {
      details:
        "[2024]: Kifayat Ullah, Muhammad Ishaq, Muhammad Ajmal Naz, Mostafizur Rahaman, Arsalan Muhammad Soomar, Hijaz Ahmad, and Md. Nur Alam, Design of dual loop controller for boost converter based on PI controller, AIP Advances 14, 025232 (2024).",
      paper_link: "https://doi.org/10.1063/5.0191079",
    },
    {
      details:
        "[2024] Mujahid Iqbal, Md. Nur Alam, Dianchen Lu, Aly R. Seadawy, Nahaa E. Alsubaie, and Salisu Ibrahim, Applications of nonlinear longitudinal wave equation with periodic optical solitons wave structure in magneto electro elastic circular rod, Optical and Quantum Electronics (2024) 56:1031.",
      paper_link: "https://doi.org/10.1007/s11082-024-06671-6",
    },
    {
      details:
        "[2024] Md Mamunur Roshid, Md. Nur Alam, Onur Alp İlhan, Md. Abdur Rahim, Md. Mehedi Hassen Tuhin, M.M. Rahman, Modulation Instability and Comparative Observation of The Effect of Fractional Parameters on New Optical Soliton Solutions of The Paraxial Wave Model, Optical and Quantum Electronics, 56, 1010 (2024).",
      paper_link: "https://doi.org/10.1007/s11082-024-06921-7",
    },
    {
      details:
        "[2024] Mujahid Iqbal, Md. Nur Alam, Dianchen Lu, Aly R. Seadawy, Nahaa E. Alsubaie, and Salisu Ibrahim, On the exploration of dynamical optical solitons to the modify unstable nonlinear Schrödinger equation arising in optical fbers, Optical and Quantum Electronics (2024) 56:765.",
      paper_link: "https://doi.org/10.1007/s11082-024-06468-7",
    },
    {
      details:
        "[2024] Md. Nur Alam, Mujahid Iqbal, Mohammad Hassan, Md. Fayz-Al-Asad, Muhammad Sajjad Hossain and Cemil Tunç, Bifurcation, phase plane analysis and exact soliton solutions in the nonlinear Schrodinger equation with Atangana's conformable derivative, Chaos, Solitons and Fractals, 182, 114724 (2024).",
      paper_link: "https://doi.org/10.1016/j.chaos.2024.114724",
    },
    {
      details:
        "[2024] Ahmed Refaie, Md. Nur Alam and Mst. Wahida Parven, Unveiling optical solitonsolutions and bifurcation analysisin the space–time fractionalFokas–Lenells equation via SSEapproach, Scientific Report, 10, 2000 (2024).",
      paper_link: "https://doi.org/10.1038/s41598-024-52308-9",
    },
    {
      details:
        "[2024]: I. Talib, A. Batool, M.B. Riaz, and Md. Nur Alam, Unified Existence Results for Nonlinear Fractional Boundary Value Problems, AIMS Mathematics, 2024, 9(2): 4118–4134.",
      paper_link: "https://doi.org/10.3934/math.2024202",
    },
    {
      details:
        "[2023] Mst. Umme Mahmuda Maya, Md. Nur Alam and Ahmed Refaie, Influence of magnetic field on MHD mixed convection in lid driven cavity with heated wavy bottom surface, Scientific Report, 13, 18959 (2023).",
      paper_link: "https://doi.org/10.1038/s41598-023-45707-x",
    },
    {
      details:
        "[2023]: Md. Nur Alam, Md. Abdur Rahim, Md. Najmul Hossain and Cemil Tunç, Dynamics of damped and undamped wave natures of the fractional Kraenkel-Manna-Merle system in ferromagnetic materials, Journal of Applied and Computational Mechanics, Volume 10, Issue 2, April 2024, Pages 317-329.",
      paper_link: "https://doi.org/10.22055/JACM.2023.45064.4307",
    },
    {
      details:
        "[2023]: Md. Nur Alam, Hemel Sharker Akash, Uzzal Saha, Md. Shahid Hasan, Mst.Wahida Parven and Cemil Tunc, Bifurcation analysis and solitary wave analysis of the nonlinear fractional soliton neuron model, Iranian Journal of Science, Published: 18 November 2023.",
      paper_link: "https://doi.org/10.1007/s40995-023-01555-y",
    },
    {
      details:
        "[2023]: Md Nur Alam, Onur Alp İlhan, Hemel Sharker Akash and Imran Talib, Bifurcation analysis and new exact complex solutions for the nonlinear Schrödinger equations with cubic nonlinearity, Optical and Quantum Electronics, (2024) 56:302.",
      paper_link: "https://doi.org/10.1007/s11082-023-05863-w",
    },
    {
      details:
        "[2023]: Md. Nur Alam, An analytical technique to obtain traveling wave solutions to nonlinear models of fractional order, Partial Differential Equations in Applied Mathematics, 8, 100533 (2023).",
      paper_link: "https://doi.org/10.1016/j.padiff.2023.100533",
    },
    {
      details:
        "[2023]: Md. Nur Alam, I. Talib and C. Tunç, The new soliton configurations of the 3D fractional model in arising shallow water waves, International Journal of Applied and Computational Mathematics, 9, 75 (2023).",
      paper_link: "https://doi.org/10.1007/s40819-023-01552-0",
    },
    {
      details:
        "[2023]: Md. Nur Alam and SMR Islam, The agreement between novel exact and numerical solutions of the nonlinear models, Partial Differential Equations in Applied Mathematics, 8, 100584 (2023).",
      paper_link: "https://doi.org/10.1016/j.padiff.2023.100584",
    },
    {
      details:
        '[2023]: Md. Nur Alam, "An analytical method for finding exact solutions of a nonlinear partial differential equation arising in electrical engineering" Open Journal of Mathematical Sciences, Vol. 7 (2023), Issue 1, pp. 10 – 18, ISSN: 2523-0212 (Online) 2616-4906 (Print).',
      paper_link: "https://doi.org/10.30538/oms2023.0195",
    },
    {
      details:
        '[2023]: Md. Nur Alam, "Soliton solutions to the electric signals in telegraph lines on the basis of the tunnel diode" Partial Differential Equations in Applied Mathematics, Volume 7, June 2023, 100491 (2023).',
      paper_link: "https://doi.org/10.1016/j.padiff.2023.100491",
    },
    {
      details:
        '[2023]: N. Sarwar, M.I. Asjad, S. Hussain, Md. Nur Alam and M. Inc, "Inclined magnetic field and variable viscosity effects on bioconvection of Casson nanofluid slip flow over non linearly stretching sheet "Propulsion and Power Research, (2023).',
      paper_link: "https://doi.org/10.1016/j.jppr.2022.09.002",
    },
  ];

  const publicationCount = publications.length;
  return (
    <div className="w-[650px] mt-16 mx-auto">
      <div className="flex justify-center gap-x-8">
        <Link
          className="text-xl newsreader-font font-bold border-b hover:border-white"
          href="https://www.scopus.com/authid/detail.uri?authorId=55979705100"
          target="_blank"
        >
          Scopus
        </Link>
        <Link
          className="text-xl newsreader-font font-bold border-b hover:border-white"
          href="https://scholar.google.com/citations?user=JziOjEgAAAAJ"
          target="_blank"
        >
          Google Scholar
        </Link>
        <Link
          className="text-xl newsreader-font font-bold border-b hover:border-white"
          href="https://www.researchgate.net/profile/Md-Nur-Alam-2"
          target="_blank"
        >
          Research Gate
        </Link>
      </div>
      <h2 className="mt-10 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        Journal Articles
      </h2>
      <div>
        {publications.map((publication, index) => (
          <div key={index} className="work-sans-font flex gap-x-4">
            <div>
              <p>{publicationCount - index}.</p>
            </div>
            <div className="mb-2">
              <p className="text-justify">{publication.details}</p>
              <p className="text-justify">
                Read Here:{" "}
                <a
                  href={publication.paper_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {publication.paper_link}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PublicationsPage;
