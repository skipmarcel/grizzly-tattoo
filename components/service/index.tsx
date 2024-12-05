import Image from "@/components/image";
import Link from "next/link";

export default ({ item, index }: { item: any; index: any }) => {
  return (
    <Link href={`/services/${item.slug}`}>
      <div
        key={index}
        className="relative overflow-hidden group cursor-pointer"
      >
        <div className="bg-gradient-to-b from-primary-darker/80 via-primary-darker/80 to-primary-darker/80 z-20 absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-300" />
        <div className="bg-gradient-to-t from-primary-darker/80 via-transparent to-transparent z-10 absolute inset-0" />
        <Image
          alt={item.title}
          className="absolute inset-0 w-full h-full min-h-[20rem] lg:min-h-[28rem] overflow-hidden transition-all duration-300 group-hover:blur-sm group-hover:scale-110"
          src={item.imgSrc}
          imageClassName="object-cover"
        />
        <div className="absolute bottom-6 lg:bottom-10 z-30 px-6 lg:px-10 group-hover:opacity-0 group-hover:duration-300 group-hover:transition-all duration-700 transition-all opacity-100">
          <h3 className="text-sm text-white mb-2">{item.category}</h3>
          <p className="text-white rounded-lg  text-2xl font-bold !leading-[100%]">
            {item.title}
          </p>
        </div>

        <div className="absolute bottom-6 lg:bottom-10 z-30 px-6 lg:px-10 group-hover:delay-300 group-hover:duration-700 group-hover:transition-all duration-700 transition-all translate-y-[150%] group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
          <h3 className="text-white rounded-lg  text-2xl font-bold">
            {item.title}
          </h3>
          <p className="text2Line text-white mt-3 !leading-[120%]">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
