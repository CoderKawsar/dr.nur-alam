import MenuBottom from "@/components/Homepage/MenuBottom";
import ImageSectionOne from "@/components/Homepage/ImageSectionOne";
import ImageSectionTwo from "@/components/Homepage/ImageSectionTwo";
import ImageSectionThree from "@/components/Homepage/ImageSectionThree";

export default function Home() {
  return (
    <div>
      <MenuBottom />
      <hr className="text-[#FF6900] my-16" />
      <ImageSectionOne />
      <hr className="text-[#FF6900] my-16" />
      <ImageSectionTwo />
      <hr className="text-[#FF6900] my-16" />
      <ImageSectionThree />
    </div>
  );
}
