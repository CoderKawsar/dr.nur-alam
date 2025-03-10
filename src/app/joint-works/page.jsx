export default function JointWorks() {
  const jointWorks = [
    "Prof. Dr. Xin Li (USTC, China)",
    "Prof Dr. M. Ali Akbar (RU, Bangladesh)",
    "Mujahid Iqbal (Jiangsu University, China)",
    "Noor Muhammad (Sichuan University, China)",
    "Cemil Tunç (Van Yuzuncu Yil University, Turkey)",
    "Onur Alp Ilhan (Erciyes University, Turkey)",
    "Haci Mehmet Baskonus (Harran University, Turkey)",
    "Ahmed Refaie Ali (Menoufia University, Egypt)",
    "M S Osman (Cairo University, Egypt)",
    "Ahmed M. Rashad (Aswan University, Egypt)",
    "Mohammad Hassan (North Eastern Regional Institute of Science and Technology, India)",
    "Mohamed Atheeque A. (Vellore Institute of Technology, Tamil Nadu, India)",
    "Sharief Basha S. (Vellore Institute of Technology, Tamil Nadu, India)",
    "Nune Pratyusha (MLR Institute of Technology, Hyderabad, Telangana, India)",
    "C. Raghavendra Reddy (Mohan Babu University, India)",
    "Hadi Rezazadeh (Amol University of Special Modern Technologies, Amol, Iran)",
    "Omar Bazighifan (Hadhramout University, Yemen)",
    "Mehmet Yavuz (University of Exeter, UK)",
    "Dimplekumar N. Chalishajar (Virginia Military Institute, USA)",
    "Ilyas Khan (Majmmah University, Saudi Arabia)",
    "Barakah Almarri (Princess Nourah bint Abdulrahman University, Saudi Arabia)",
    "Sultan Alqahtani (King Khalid University, Saudi Arabia)",
    "Imran Talib (Virtual University of Pakistan, Pakistan)",
    "Hijaz Ahmad (Gulf University for Science and Technology, Mishref, Kuwait)",
    "Imtiaz Ahmad (UNITEN, Malaysia)",
    "Rashid Jan (UNITEN, Malaysia)",
    "Muhammad Nawaz Khan (Al-Ayen University, Iraq)",
    "Kifayat Ullah (University of Campania, Italy)",
    "Arsalan Muhammad Soomar (Gdansk University of Technology, Poland)",
    "Dianchen Lu (Jiangsu University, China)",
    "Aly R. Seadawy (Taibah University, Saudi Arabia)",
    "Muhammad Imran Asjad (University of Management and Technology, Pakistan)",
    "Mustafa Inc (Firat University, Turkey)",
    "Jalil Manafian (University of Tabriz, Tabriz, Iran)",
    "Shafiullah Niazai (Laghman University, Afghanistan)",
    "M. M. A. Sarker (BUET, Bangladesh)",
    "Md. Fayz-Al-Asad (AIUB, Bangladesh)",
    "Md. Abdur Rahim (PUST, Bangladesh)",
  ];
  return (
    <div className="w-[650px] mt-16 mx-auto">
      <h2 className="mt-10 text-3xl text-[#FF6900] border-b border-[#FF6900] raleway-font font-bold mb-8 pb-2">
        Joint Works
      </h2>
      <div className="w-[650px] mx-auto">
        {jointWorks.map((work, index) => (
          <p key={index} className="newspaper-font text-lg mb-2">
            {index + 1}. {work}
          </p>
        ))}
      </div>
    </div>
  );
}
