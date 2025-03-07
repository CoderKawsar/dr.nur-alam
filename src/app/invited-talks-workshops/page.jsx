function InvitedTalksWorkshops() {
  const invitedTalks = [
    {
      year: 2025,
      otherTexts:
        "Chair of the session: Session Chair at the A F Mujibur Rahman Foundation Bangladesh Mathematical Society's Third National Mathematics Conference 2024, held from February 6 to 7, 2025, organized by the Department of Mathematics, BUET, Dhaka, Bangladesh (2 days).",
    },
    {
      year: 2025,
      otherTexts:
        'Invited speaker: Invited speaker at the A F Mujibur Rahman Foundation Bangladesh Mathematical Society\'s Third National Mathematics Conference 2024, held from February 6 to 7, 2025, organized by the Department of Mathematics, BUET, Dhaka, Bangladesh. Talk title: "Eigen-based Geometric Framework for Non-Uniform Subdivision Surfaces in Animation and Industrial Design."',
    },
    {
      year: 2025,
      otherTexts:
        "MD. Rafiquzzaman Rafi and M. N. Alam, Uniform Catmull-Clark Subdivision Schemes in CAGD and Industrial Application, The A F Mujibur Rahman Foundation Bangladesh Mathematical Society's Third National Mathematics Conference 2024, held from February 6 to 7, 2025, organized by the Department of Mathematics, BUET, Dhaka, Bangladesh.",
    },
    {
      year: 2025,
      otherTexts:
        "MD. Farhad Hossain and M. N. Alam, Heart Disease Prediction Using Machine Learning Regression Algorithms, The A F Mujibur Rahman Foundation Bangladesh Mathematical Society's Third National Mathematics Conference 2024, held from February 6 to 7, 2025, organized by the Department of Mathematics, BUET, Dhaka, Bangladesh.",
    },
    {
      year: 2025,
      otherTexts:
        "Muhammed Ziaul Haque and M. N. Alam, Classifying Vehicle Carbon Emissions Levels Using Decision Tree Models, The A F Mujibur Rahman Foundation Bangladesh Mathematical Society's Third National Mathematics Conference 2024, held from February 6 to 7, 2025, organized by the Department of Mathematics, BUET, Dhaka, Bangladesh.",
    },
  ];

  return (
    <div className="w-[650px] mx-auto mt-16">
      <h2 className="mt-10 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-4 pb-2">
        Invited talks and Workshops
      </h2>
      <ul>
        {invitedTalks.map((item, index) => (
          <li key={index} className="flex gap-x-4 mb-2">
            <p className="font-bold">{item.year}</p>
            <p className="newsreader-font leading-normal text-justify">
              {item.otherTexts}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvitedTalksWorkshops;
