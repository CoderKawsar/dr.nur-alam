import Image from "next/image";

function ImageSectionImage({ image, alt = "Nur Alam" }) {
  return (
    <div className="h-80 rounded-b-4xl">
      <Image
        className="w-full h-full object-cover rounded-[80px]"
        src={image}
        alt={alt}
      />
    </div>
  );
}

export default ImageSectionImage;
