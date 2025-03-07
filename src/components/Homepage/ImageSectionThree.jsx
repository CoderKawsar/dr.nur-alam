import image7 from "@/assets/images/homepage pictures/7.jpg";
import image8 from "@/assets/images/homepage pictures/8.jpg";
import image9 from "@/assets/images/homepage pictures/9.jpg";
import ImageSectionImage from "./ImageSectionImage";

function ImageSectionThree() {
  return (
    <div>
      <h2 className="text-xl font-bold ml-12 my-10">
        Delivered invited talk at the International Conference of Mathematical
        Sciences in Dubai, 2022.
      </h2>
      <div className="grid grid-cols-3 gap-3  bg-gradient-to-r from-[#FDF5CB] via-[#CFE9D1] to-[#60BCC0]">
        <ImageSectionImage image={image7} alt="Nur Alam" />
        <ImageSectionImage image={image8} alt="Nur Alam" />
        <ImageSectionImage image={image9} alt="Nur Alam" />
      </div>
    </div>
  );
}

export default ImageSectionThree;
