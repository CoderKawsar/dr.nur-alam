import image1 from "@/assets/images/homepage pictures/1.jpg";
import image2 from "@/assets/images/homepage pictures/2.jpg";
import image3 from "@/assets/images/homepage pictures/3.jpg";
import ImageSectionImage from "./ImageSectionImage";

function ImageSectionOne() {
  return (
    <div>
      <h2 className="text-xl font-bold ml-12 my-10">
        Listed in Top 2% of World&apos;s Scientists/Researcher
        (Stanford-Elsevier Ranking 2022)
      </h2>
      <div className="grid grid-cols-3 gap-3  bg-gradient-to-r from-[#FDF5CB] via-[#CFE9D1] to-[#60BCC0]">
        <ImageSectionImage image={image1} alt="Nur Alam" />
        <ImageSectionImage image={image2} alt="Nur Alam" />
        <ImageSectionImage image={image3} alt="Nur Alam" />
      </div>
    </div>
  );
}

export default ImageSectionOne;
