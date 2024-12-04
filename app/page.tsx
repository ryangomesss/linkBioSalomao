import Link from "next/link";
import Image from "next/image";
import {
  IconFacebook,
  IconWhatsapp,
  IconInstagram,
  IconYoutube,
  IconSchool,
  IconGlobo,
  IconCode,
} from "./icons/Icones";
import { Caixa, LinkCircular } from "./components/Links";
import LogoSalomao from "@/app/images/logoep.png";
import LogoWhatsappFooter from "@/app/images/whatsapp.png";
import LogoFacebookFooter from "@/app/images/facebook.png";
import LogoInstagramFooter from "@/app/images/instagram.png";
import LogoYoutubeFooter from "@/app/images/youtube.png";
import LogoSeducFooter from "@/app/images/crede8.png";

export default function Home() {
  return (
    // Seção principal
    <section className="min-h-screen bg-gradient-to-r from-[#204e37] to-[#00853b] flex flex-col items-center justify-center p-4">
      {/* Cabeçalho (Cima) */}
      <header className="flex flex-col items-center">
        {/* Salomão */}
        <Image
          src={LogoSalomao}
          alt="Logo da Escola"
          width={200}
          height={150}
        />
        <div className="flex flex-col items-center">
          <h1 className="text-white font-h1 text-title text-3xl whitespace-nowrap font-black mt-4 max-[580px]:text-[17px] max-[360px]:text-[16px] ">
            EEEP DR. SALOMÃO ALVES DE MOURA
          </h1>
          <p
            className="text-[white] text-lg text-center mt-2 max-[735px]:text-sm max-[580px]:text-xs 
          max-[393px]:text-xs font-semibold
          "
          >
            A Salomão oferece ensino médio integrado a cursos técnicos, com foco
            em educação
            <br className=" max-[600px]:hidden  " /> integral, inovação e
            formação profissional.
          </p>
        </div>
      </header>

      {/* Conteúdo Principal (Meio) */}
      <main className="w-full max-w-md mt-8 space-y-4">
        {/* Facebook */}
        <Caixa
          icon={<IconFacebook size={24} />}
          redes="Facebook"
          link="https://web.facebook.com/eeepsamb"
        />
        {/* Instagram*/}
        <Caixa
          icon={<IconInstagram size={24} />}
          redes="Instagram"
          link="https://www.instagram.com/eeep_salomao_oficial"
        />
        {/* Seduc - Salomão */}
        <Caixa
          icon={<IconSchool size={24} />}
          redes="Seduc"
          link="https://www.crede08.seduc.ce.gov.br/2023/02/03/escola-da-crede-8-eeep-salomao-alves-de-moura-aracoiaba-ce-lanca-selecao-publica-para-carencias-temporarias-de-professores-coordenadoria-regional-de-desenvolvimento-da-educacao-c/"
        />
        {/* WebSite - Salomão */}
        <Caixa
          icon={<IconGlobo size={24} />}
          redes="WebSite"
          link="https://eeepsam.com.br/"
        />
        {/* Suporte Whatsapp*/}
        <Caixa
          icon={<IconWhatsapp size={24} />}
          redes="Whatsapp"
          link="https://api.whatsapp.com/send?phone=85998671336"
        />
        {/* Youtube */}
        <Caixa
          icon={<IconYoutube size={24} />}
          redes="Youtube"
          link="https://www.youtube.com/@eeepdr.salomaoalvesdemoura5896"
        />
        {/* <Caixa
          icon={<IconCode size={24} />}
          redes="Programadores"
          link="https://www.youtube.com/@eeepdr.salomaoalvesdemoura5896"
        /> */}
      </main>

      {/* Conteúdo Secundário (Baixo) */}
      <footer className="flex gap-[1.5rem] max-[480px]:gap-[1.2rem] max-[393px]:gap-5 flex-row py-5">
        {/* Suporte Whatsapp */}
        <LinkCircular
          src={LogoWhatsappFooter}
          size="40"
          alt="Ícone oficial do Whatsapp"
          link="https://api.whatsapp.com/send?phone=85998671336"
        />
        {/* Facebook */}
        <LinkCircular
          src={LogoFacebookFooter}
          size="40"
          alt="Ícone oficial do Facebook"
          link="https://web.facebook.com/eeepsamb"
        />
        {/* Instagram */}
        <LinkCircular
          src={LogoInstagramFooter}
          size="60"
          alt="Ícone oficial do Instagram"
          link="https://www.instagram.com/eeep_salomao_oficial"
        />
        {/* Youtube */}
        <LinkCircular
          src={LogoYoutubeFooter}
          size="40"
          alt="Ícone oficial do Youtube"
          link="https://www.youtube.com/@eeepdr.salomaoalvesdemoura5896"
        />
        {/* WebSite - Salomão */}
        <LinkCircular
          src={LogoSalomao}
          size="50"
          alt="Ícone oficial da Salomão"
          link="https://eeepsam.com.br/"
        />
        {/* Seduc - Salomão */}
        <LinkCircular
          src={LogoSeducFooter}
          size="40"
          alt="Ícone oficial da Seduc"
          link="https://www.crede08.seduc.ce.gov.br/2023/02/03/escola-da-crede-8-eeep-salomao-alves-de-moura-aracoiaba-ce-lanca-selecao-publica-para-carencias-temporarias-de-professores-coordenadoria-regional-de-desenvolvimento-da-educacao-c/"
        />
      </footer>
      <div className="flew items-center font-sans">
        <h1 className="text-[#F6F6F6] text-lg">Copyright © 2024<br /> </h1>
        <Link
          href="https://www.instagram.com/_otavio.silveira/"
          target="_blank"
        >
          <span className="hover:underline">@_otavio.silveira</span>,{" "}
        </Link>
        <Link href="https://www.instagram.com/ryangomesss_/" target="_blank">
          <span className="hover:underline">@ryangomesss_</span>,{" "}
        </Link>
        <Link href="https://www.instagram.com/kaynnandeson/" target="_blank">
          <span className="hover:underline">@kaynnandeson</span>,{" "}
        </Link>
        <Link href="https://www.instagram.com/_kaua_nasc_/" target="_blank">
          <span className="hover:underline">@kaua_nasc_</span>
        </Link>
      </div>
    </section>
  );
}

// PITAYA = https://www.instagram.com/_kaua_nasc_/
// PAIVA = https://www.instagram.com/kaynnandeson/
// GORDO = https://www.instagram.com/_otavio.silveira/
// CABEÇA = https://www.instagram.com/ryangomesss_/
