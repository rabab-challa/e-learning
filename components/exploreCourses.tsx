import Image from "next/image";
import SubjectCards from "../data/subjectCard";

interface SubjectCardProps {
  name: string;
  color: string;
}

const SubjectCard = ({ name, color }: SubjectCardProps) => {
  return (
    <div className="relative p-1 -rotate-10 w-18 h-75 2xl:w-20 2xl:h-80 flex items-center bg-white rounded-2xl shadow-sm">
        <Image src="/bgImg.png" 
        alt="box"
        width={200}
        height={600}
        className="w-17 h-70 rounded-2xl p-1" />
      <div
        className={`absolute inset-0 m-auto w-10 h-60 rounded-2xl flex items-center justify-center ${color}`}
      >
        <p className="[writing-mode:vertical-rl]  text-white text-base font-normal">
          {name}
        </p>
      </div>

    </div>
  );
};

const RowHeader = ({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) => (
  <div className="flex justify-between items-center mb-5">
    <h3 className="text-lg flex items-center gap-2 font-semibold text-black/90">
      <Image src={icon} alt="logo" width={20} height={20} className="w-5 h-5" />
      {title}
    </h3>
    <button className="text-blue-cyan text-sm  w-20 flex items-center gap-2 ">
      SEE ALL
      <Image src="/android-arrow-forward.png" alt="arrow" width={10} height={10} />
    </button>
  </div>
);

const Card = ({
  img,
  title,
  desc,
  borderClr,
} : {
  img : string;
  title : string;
  desc : string;
  borderClr : string;
}) => (
  <div className={`w-120 h-75 border ${borderClr} justify-center gap-5 border-3 bg-white pt-5 flex px-4 rounded-2xl`}>
    <div className="rounded-2xl">
      <Image src={img}
      alt="card"
      width={100}
      height={70} className="w-42 h-65 xl:w-47 xl:h-65" />
    </div>
    <div className="space-y-2 pt-5">
      <h2 className="font-medium text-xl text-black w-55 xl:w-55">{title}</h2>
      <p className="text-grey-text text-base text-normal w-55">{desc}</p>
      <div className="flex pr-5 justify-between">
        <Image
          src="/star5.png"
          alt="rating"
          width={40}
          height={10}
          className="w-18 h-3"
        />
        <p className="pl-3 text-base font-bold text-grey-text">
          $450
        </p>
      </div>
      <button className="text-blue-cyan roundee-2xl font-bold border-1 border-blue-cyan w-55 rounded-xl text-center py-1.5">EXPLORE</button>
    </div>
  </div>
);

const ExploreCourses = () => {
  return (
    <div className="mt-10 font-roboto" >

      {/* Background */}
      <div className="bg-blue-light7/30 w-[80%] px-20 pt-50 pb-15 rounded-br-[5%] overflow-visible ">

        <h1 className="text-black text-2xl font-semibold">
          Explore Course
        </h1>

        <p className="text-sm font-normal text-black/60 pt-2">
          Ut sed eros finibus, placerat orci id, dapibus.
        </p>

        {/* ROW 1 */}
        <div className="relative mt-15 mr-5 w-[125%] ">

          <RowHeader icon="/android-color-palette.png" title="Lorem Ipsum" />
          
          <div className="flex items-center justify-between mt-10 gap-8 ">

            <SubjectCard {...SubjectCards.UtSedEros} />

            <SubjectCard {...SubjectCards.CurabiturEgestas} />

            <SubjectCard {...SubjectCards.QuisqueConse} />

            <SubjectCard {...SubjectCards.CrasConvallis} />

            <SubjectCard {...SubjectCards.Vestibulumfauci} />

            <SubjectCard {...SubjectCards.UtSedEros2} />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu} />
            <Card img="/subcard1.png" borderClr="border-blue-dark6" title="Integerid Orc Sed Ante Tincidunt" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit Fugit fuga voluptatem laborum."  />

          </div>
          <div className="absolute w-full z-0 h-13 bg-black/5 -bottom-5 rounded-full"></div>
          
        </div>
        {/* ROW 2 */}
        <div className="relative mt-15 mr-5 w-[125%] ">

           <RowHeader icon="/android-globe.png" title="Quisque a Consequat" />

          <div className="flex items-center justify-between mt-10 z-10  gap-8 ">

            <SubjectCard {...SubjectCards.UtSedEros} />

            <SubjectCard {...SubjectCards.CurabiturEgestas} />

            <SubjectCard {...SubjectCards.QuisqueConse} />

            <SubjectCard {...SubjectCards.CrasConvallis} />

            <Card img="/subcard6.png" borderClr="border-pink-dark2" title="Integerid Orc Sed Ante Tincidunt" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit Fugit fuga voluptatem laborum."  />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu2} />

            <SubjectCard {...SubjectCards.UtSedEros2} />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu} />
            

          </div>
          <div className="absolute w-full z-0 h-13 bg-black/5 -bottom-5 rounded-full"></div>
        </div>

        {/* ROW 3 */}
        <div className="relative mt-15 mr-5 w-[125%] ">

          <RowHeader icon="/ribbon-b.png" title="Aenean Facilisis" />

          <div className="flex items-center justify-between mt-10 z-10  gap-8 ">

            <SubjectCard {...SubjectCards.UtSedEros} />

            <Card img="/subcard4.png" borderClr="border-blue-cyan" title="Integerid Orc Sed Ante Tincidunt" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit Fugit fuga voluptatem laborum." />

            <SubjectCard {...SubjectCards.CurabiturEgestas} />

            <SubjectCard {...SubjectCards.QuisqueConse} />

            <SubjectCard {...SubjectCards.CrasConvallis} />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu2} />

            <SubjectCard {...SubjectCards.UtSedEros2} />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu} />
            

          </div>
          <div className="absolute w-full z-10 h-13 bg-black/5 -bottom-5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;