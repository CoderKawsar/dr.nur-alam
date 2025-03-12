import Image from "next/image";
import image from "@/assets/images/nur-alam.jpg";
import ClientAbout from "./clientAbout";

function AboutPage() {
  return (
    <div className="w-[650px] mt-16 mx-auto">
      <div className="flex justify-between">
        <div className="h-[300px] w-[250px] rounded-lg">
          <Image
            className="w-full h-full rounded object-cover"
            src={image}
            alt="Nur Alam"
            width={250}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl text-[#FF6900] raleway-font font-bold text-right mb-4">
            Dr. Md Nur Alam
          </h2>
          <h3 className="text-[20px] font-bold italic text-right newsreader-font">
            Professor
          </h3>
          <h4 className="text-[20px] italic text-right newsreader-font">
            Department of Mathematics
          </h4>
          <h4 className="text-[20px] italic text-right newsreader-font">
            Pabna University of Science and Technology
          </h4>
          <h4 className="text-[20px] italic text-right newsreader-font">
            Pabna - 6600, Bangladesh
          </h4>
          <p className="text-right italic text-[20px] newsreader-font">
            +8801716438757
          </p>
          <a
            href="mailto:nur.alam@pust.ac.bd"
            className="text-right italic text-[20px] newsreader-font underline"
          >
            nuralam23@pust.ac.bd (Office)
          </a>
          <a
            href="mailto:nuralam.pstu23@gmail.com"
            className="text-right italic text-[20px] newsreader-font underline"
          >
            nuralam.pstu23@gmail.com (Personal)
          </a>
        </div>
      </div>
      <p className="text-justify mt-8">
        According to Elsevier and Stanford University, USA, in September 2022
        and 2023, <b>Prof. Dr. Md. Nur Alam</b> is one of the top 2% of
        scientists working in the fields of computational mathematics like
        subdivision schemes, geometrical modeling, bilinear neural network
        technique, computer graphics, CAGD, fluid mechanics, CFD, differential
        equations, and fractional calculus. I want to be a top-level researcher
        with higher research capabilities in the fields of artificial neural
        networks, subdivision schemes, geometrical modeling, bilinear neural
        network technique, computer graphics, CAGD, fluid mechanics, CFD,
        differential equations, and fractional calculus. I also want to be an
        expert university teacher in applied and computational mathematics. My
        future goal is to establish this artificial neural network, subdivision
        schemes, and geometrical modeling in every sector where I have
        expertise. Prof. Alam is a Professor of Mathematics at Pabna University
        of Science and Technology, Pabna, Bangladesh, was born in Panchagarh,
        Bangladesh, on March 1, 1986. He completed his B.Sc. (Hons.) and M.Sc.
        (Thesis) in mathematics from Rajshahi University. He was also awarded an
        M.Phil. degree in mathematics in mathematical physics in 2015 from Pabna
        University of Science and Technology, Pabna-6600, Bangladesh. He
        completed his Ph.D. in computational mathematics from the University of
        Science and Technology of China (USTC, China) under a very prestigious
        scholarship, the CAS-TWAS Scholarship, that he was awarded (by an
        international competition) by the CAS-TWAS Scholarship Commission. His
        current research interests include subdivision schemes, geometrical
        modeling, bilinear neural network technique, CFD, mass, blood flow,
        nanofluid flow, single or hybrid nanofluid flow, transport in porous
        media and heat transfer, computer graphics, CAGD, IGA, mathematical
        physics, integral and fractional order of PDEs, nonlinear dynamics, and
        theoretical plasma physics. He has published more than 130 papers, one
        book chapter, and two books. The output of the Google Scholar search
        (made on May 4, 2024) shows that Associate Prof. Dr. Alam’s research
        work has already received 2,876 citations with h-index 31, and i10-index
        81 (for updated information including title, abstract, and citations of
        each article, please visit the Google Scholar). Mr. Alam participated in
        and presented his research findings (keynote speaker, invited speaker,
        guest speaker) at many national and international conferences. Dr. Alam,
        a promising young scientist, is actively mentoring a substantial cohort
        of students across graduate and postgraduate levels (B.Sc., M.S.,
        M.Phil., and PhD). Presently, he oversees the progress of 30+ students
        engaged in B.Sc. (Honours) projects, with an additional 4 projects
        underway. Further showcasing his commitment, Dr. Alam guides eight
        students through their MSc thesis work, while four more theses are
        ongoing. His dedication extends to supervising four MSc thesis projects
        and four B.Sc. (honors) projects simultaneously. In addition to his
        mentoring responsibilities, Dr. Alam holds esteemed positions in the
        academic community. He serves as an Associate Editor, Academic Editor,
        Guest Editor, Chief Editor, and Editorial Board Member for prestigious
        international journals such as Advances in Artificial Intelligence and
        Mathematical Modeling (AAIMM), Applied Analysis and Optimization,
        Journal of Fractional Calculus and Nonlinear Systems (JFCNS), Journal of
        Mathematical Analysis and Modeling, Computational Mathematics and
        Applications, and Contemporary Mathematics, among others. Notably, he
        also contributes as a guest editor for journals like Demonstratio
        Mathematica and the Open Journal of Mathematical Science (OMS). Prof.
        Alam's multifaceted contributions to research guidance and editorial
        roles underscore his dedication to fostering academic excellence and
        advancing scientific knowledge. Prof. Alam has presented his research
        findings and exchanged views at many international conferences in
        Bangladesh, China, Pakistan, and India.
      </p>
      <div>
        <h2 className="mt-10 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
          Education
        </h2>
        <div className="flex gap-x-6 mb-2">
          <h3 className="text-lg font-bold raleway-font">2016 - 2020</h3>
          <p className="italic text-[20px] newsreader-font">
            <b className="not-italic">Ph.D.</b>,University of Science and
            Technology of China (USTC), China
          </p>
        </div>
        <div className="flex gap-x-6 mb-2">
          <h3 className="text-lg font-bold raleway-font">2012 - 2015</h3>
          <p className="italic text-[20px] newsreader-font">
            <b className="not-italic">M.Phil.</b>,Pabna University of Science
            and Technology, Pabna-6600
          </p>
        </div>
        <div className="flex gap-x-6 mb-2">
          <h3 className="text-lg font-bold raleway-font">2008 - 2009</h3>
          <p className="italic text-[20px] newsreader-font">
            <b className="not-italic">M.Sc.</b>,University of Rajshahi (RU),
            Rajshahi-6205
          </p>
        </div>
        <div className="flex gap-x-6 mb-2">
          <h3 className="text-lg font-bold raleway-font">2004 - 2005</h3>
          <p className="italic text-[20px] newsreader-font">
            <b className="not-italic">B.Sc.</b>,University of Rajshahi (RU),
            Rajshahi-6205
          </p>
        </div>
      </div>
      <div>
        <h2 className="mt-10 pb-2 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4">
          Experience/Employment
        </h2>
        <div className="flex gap-x-6 mb-2">
          <h3 className="newsreader-font text-[20px]">
            April 02, 2024 to till date
          </h3>
          <div className="italic text-[20px] newsreader-font text-right">
            <h5 className="font-bold">Professor</h5>
            <p>
              Department of Mathematics, Pabna University of Science and
              Technology, Pabna-6600, Bangladesh
            </p>
          </div>
        </div>

        <div className="flex gap-x-6 mb-2">
          <h3 className="newsreader-font text-[20px]">
            Sept 01, 2016 to July 31, 2020
          </h3>
          <div className="italic text-[20px] newsreader-font text-right">
            <h5 className="font-bold">Doctoral Researcher</h5>
            <p>
              Graphics & Geometric Computing Laboratory, School of Mathematical
              Sciences, Department of Mathematics, University of Science and
              Technology of China, Hefei, Anhui, 230026, China.
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 mb-2">
          <h3 className="newsreader-font text-[20px]">
            July 23, 2020 to April 01, 2024
          </h3>
          <div className="italic text-[20px] newsreader-font text-right">
            <h5 className="font-bold">Associate Professor</h5>
            <p>
              Department of Mathematics, Pabna University of Science and
              Technology, Pabna-6600, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 mb-2">
          <h3 className="newsreader-font text-[20px]">
            {" "}
            January 22, 2014 to 22 July, 2020
          </h3>
          <div className="italic text-[20px] newsreader-font text-right">
            <h5 className="font-bold">Assistant Professor</h5>
            <p>
              Department of Mathematics, Pabna University of Science and
              Technology, Pabna-6600, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 mb-2">
          <h3 className="newsreader-font text-[20px]">
            {" "}
            January 23, 2012 to January 21, 2014
          </h3>
          <div className="italic text-[20px] newsreader-font text-right">
            <h5 className="font-bold">Lecturer</h5>
            <p>
              Department of Mathematics, Pabna University of Science and
              Technology, Pabna-6600, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
