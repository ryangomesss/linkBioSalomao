import Image from "next/image";
import Link from "next/link";

export function Caixa(props: any) {
  return (
    <div className="flex flex-row">
      <Link href={props.link} target="_blank" className="flex flex-1">
        <button className="flex flex-col h-full bg-[#0FA958] w-full rounded group hover:shadow-2xl transition duration-[0.4s] ease-in-out text-white p-5 relative">
          <div className="flex flex-1 w-full items-center">
            <div>{props.icon}</div>
            <div className="flex h-full w-full justify-center items-center">
              <p className="text-xl font-semibold">{props.redes}</p>
            </div>
          </div>
          <span className="bg-white h-1 w-full absolute bottom-0 left-0 rounded-b">
            <span className="bg-orange-500 h-1 w-0 absolute bottom-0 left-0 rounded-b group-hover:w-full transition-all duration-[.8s]"></span>
          </span>
        </button>
      </Link>
    </div>
  );
}

export function LinkCircular(props: any) {
  return (
    <div className="flex w-1/6">
      <Link href={`${props.link}`} target="_blank">
        <Image
          src={props.src}
          width={props.size}
          height={props.size}
          alt={props.alt}
          className="hover:scale-110"
        />
      </Link>
    </div>
  );
}
