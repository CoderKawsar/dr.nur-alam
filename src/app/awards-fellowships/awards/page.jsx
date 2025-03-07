import AwardSingle from "@/components/award/AwardSingle";

function AwardPage() {
  const awards = [
    {
      title: "World Top 2% Scientists in the World in the Year 2024",
      description:
        'Top 2% Scientists in the World," according to a recent survey by Elsevier and Stanford University, USA.',
    },
    {
      title: "World Top 2% Scientists in the World in the Year 2023",
      description:
        'Top 2% Scientists in the World," according to a recent survey conducted by Elsevier and Stanford University, USA.',
    },
    {
      title: "World Top 2% Scientists in the World in the Year 2022",
      description:
        'Top 2% Scientists in the World" by a recent survey conducted by Elsevier and Stanford University, USA. The TOP 2% global list of scientists has been prepared based on the citations, h-index, and co-authorship-adjusted hm-index for various disciplines in the year 2022.',
    },
    {
      title: "World Scientist and University Rankings 2021, 2022, 2023",
      description:
        "Top scientist/ Best scientist in Pabna University of Science and Technology according to AD Scientific Index 2021, 2022 and 2023. LINK: https://www.adscientificindex.com/scientist_print.php?id=3484074",
    },
    {
      title: "Research Excellence Award 2022",
      description:
        "Received “Research Excellence Award 2022” from the Honorable Education Minister of the People's Republic of Bangladesh at Pabna University of Science and Technology, Pabna-6600, Bangladesh. This award has been awarded depending on quality, citation, number, and category of publications during July 2020-June 2022.",
    },
    {
      title: "Young Scientist Award-2021",
      description:
        "International scientist awards on engineering, science and medicine, held on 26 & 27-2021, Hyderabad, India, Organized by VDGOOD PROFESSIONAL ASSOCIATION.",
    },
    {
      title: "Conference grant from School of Mathematical Sciences",
      description:
        "University of Science and Technology of China (USTC), China, RMB 5500.00, 2019.",
    },
    {
      title: "CAS-TWAS scholarship PhD fellow, School of Mathematics Sciences",
      description:
        "University of Science and Technology of China (USTC), Hefei, Anhui, 230026 China.\n Conference grant from Pabna University of Science and Technology, Bangladesh.",
    },
    {
      title: "Research grant",
      description: "University Grants Commission (UGC) of Bangladesh..",
    },
    {
      title: "Gold Medal",
      description:
        "for 1st class in Honours from Shaheed Ziaur Rahman Hall, University of Rajshahi, Bangladesh.",
    },
  ];
  return (
    <div className="w-[650px] mt-16 mx-auto">
      <h2 className="mt-10 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        Awards & Fellowships
      </h2>
      <ul className="list-disc">
        {awards.map((award, index) => (
          <AwardSingle
            key={index}
            title={award.title}
            description={award.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default AwardPage;
