import Image from "next/image";
import SubjectCards from "../data/subjectCard";

interface SubjectCardProps {
  name: string;
  color: string;
}

const SubjectCard = ({ name, color }: SubjectCardProps) => {
  return (
    <div className="relative p-1 -rotate-10 w-18 flex items-center h-70 bg-white rounded-2xl shadow-sm">
        <Image src="/bgImg.png" 
        alt="box"
        width={200}
        height={600}
        className="w-17 h-65 rounded-2xl p-1" />
      <div
        className={`absolute inset-0 m-auto w-10 h-55 rounded-2xl flex items-center justify-center ${color}`}
      >
        <p className="[writing-mode:vertical-rl]  text-white text-base font-normal">
          {name}
        </p>
      </div>

    </div>
  );
};


const ExploreCourses = () => {
  return (
    <div className="mt-10 {roboto.classname}" >

      {/* Background */}
      <div className="bg-blue-light7/30 w-280 pl-30 pt-50 pb-15 max-h rounded-br-[60px] overflow-visable ">

        <h1 className="text-black text-2xl font-semibold">
          Explore Course
        </h1>

        <p className="text-sm font-normal text-black/60 pt-2">
          Ut sed eros finibus, placerat orci id, dapibus.
        </p>

        {/* ROW 1 */}
        <div className="relative mt-15 mr-5  w-max">

          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl flex items-center gap-2 font-semibold text-black/90">
            <Image src="/android-color-palette.png" 
            alt="logo"
            width={8}
            height={8}
            className="w-5 h-5"
            />
              Lorem Ipsum
            </h3>

            <button className="text-blue-cyan text-sm flex w-30 items-center gap-2">
              SEE ALL 
              <Image src="/android-arrow-forward.png"
              alt="arrow"
              width={10}
              height={10}
              />
            </button>
          </div>

          <div className="flex items-center mt-10 z-10 gap-8">

            <SubjectCard {...SubjectCards.UtSedEros} />

            <SubjectCard {...SubjectCards.CurabiturEgestas} />

            <SubjectCard {...SubjectCards.QuisqueConse} />

            <SubjectCard {...SubjectCards.CrasConvallis} />

            <SubjectCard {...SubjectCards.Vestibulumfauci} />

            <SubjectCard {...SubjectCards.UtSedEros2} />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu} />
            <Image
              src="/subcard1.png"
              alt="course"
              width={450}
              height={280}
              className="rounded-2xl"
            />

          </div>
          <div className="absolute w-295 z-0 h-13 bg-black/5 -bottom-5 rounded-xl"></div>
        </div>
        {/* ROW 2 */}
        <div className="relative mt-15 mr-5  w-max">

          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl flex items-center gap-2 font-semibold text-black/90">
            <Image src="/android-globe.png" 
            alt="logo"
            width={8}
            height={8}
            className="w-5 h-5"
            />
              Quisque a Consequat
            </h3>

            <button className="text-blue-cyan text-sm flex w-30 items-center gap-2">
              SEE ALL 
              <Image src="/android-arrow-forward.png"
              alt="arrow"
              width={10}
              height={10}
              />
            </button>
          </div>

          <div className="flex items-center mt-10 z-0 gap-8">

            <SubjectCard {...SubjectCards.UtSedEros} />

            <SubjectCard {...SubjectCards.CurabiturEgestas} />

            <SubjectCard {...SubjectCards.QuisqueConse} />

            <SubjectCard {...SubjectCards.CrasConvallis} />

            <Image
              src="/subcard2.png"
              alt="course"
              width={450}
              height={280}
              className="rounded-2xl"
            />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu2} />

            <SubjectCard {...SubjectCards.UtSedEros2} />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu} />
            

          </div>
          <div className="absolute w-295 z-0 h-13 bg-black/5 -bottom-5 rounded-xl"></div>
        </div>

        {/* ROW 3 */}
        <div className="relative mt-15 mr-5  w-max">

          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl flex items-center gap-2 font-semibold text-black/90">
            <Image src="/ribbon-b.png" 
            alt="logo"
            width={8}
            height={8}
            className="w-5 h-5"
            />
              Aenean Facilisis
            </h3>

            <button className="text-blue-cyan text-sm flex w-30 items-center gap-2">
              SEE ALL 
              <Image src="/android-arrow-forward.png"
              alt="arrow"
              width={10}
              height={10}
              />
            </button>
          </div>

          <div className="flex items-center mt-10 z-30 gap-8">

            <SubjectCard {...SubjectCards.UtSedEros} />

            <Image
              src="/subcard3.png"
              alt="course"
              width={450}
              height={280}
              className="rounded-2xl"
            />

            <SubjectCard {...SubjectCards.CurabiturEgestas} />

            <SubjectCard {...SubjectCards.QuisqueConse} />

            <SubjectCard {...SubjectCards.CrasConvallis} />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu2} />

            <SubjectCard {...SubjectCards.UtSedEros2} />

            <SubjectCard {...SubjectCards.Vestibulumfaucibu} />
            

          </div>
          <div className="absolute w-295 z-10 h-13 bg-black/5 -bottom-5 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;