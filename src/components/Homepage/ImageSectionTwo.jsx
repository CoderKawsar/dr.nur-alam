import image4 from "@/assets/images/homepage pictures/4.jpg";
import image5 from "@/assets/images/homepage pictures/5.jpg";
import image6 from "@/assets/images/homepage pictures/6.jpg";
import ImageSectionImage from "./ImageSectionImage";

function ImageSectionTwo() {
  return (
    <div>
      <h2 className="text-xl font-bold ml-12 my-10">
        Received an outstanding research paper award at the International
        Conference Thailand, at Rangsit University (RSU), Bangkok-Thailand. The
        Thai Government&apos;s Commission on Higher Education, Ministry of
        Education, Thailand, bestowed and honored with this award.
      </h2>
      <div className="grid grid-cols-3 gap-3  bg-gradient-to-r from-[#FDF5CB] via-[#CFE9D1] to-[#60BCC0]">
        <ImageSectionImage image={image4} alt="Nur Alam" />
        <ImageSectionImage image={image5} alt="Nur Alam" />
        <ImageSectionImage image={image6} alt="Nur Alam" />
      </div>
    </div>
  );
}

export default ImageSectionTwo;
