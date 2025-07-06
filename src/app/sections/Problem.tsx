import Image from "next/image";

const Problem = () => {
  return (
    <section className="bg-[#f5f9f3] px-6 lg:px-20 py-16 text-center text-[#3a4d4a]">
      {/* Nagłówek */}
      <h2 className="text-xl lg:text-4xl font-medium leading-snug lg:leading-snug mb-10 lg:mb-16 max-w-3xl mx-auto">
        You’re on vacation. You look great. But… <br />
        <span className="font-semibold">
          where’s the perfect spot for a photo?
        </span>
      </h2>

      {/* Grid ze zdjęciami */}
      <div className="mx-auto max-w-xs lg:max-w-4xl mb-10">
        {/* Mobile: układ kolumnowy z centralnym zdjęciem */}
        <div className="flex flex-col items-center space-y-4 lg:hidden">
          <div className="flex justify-between w-full space-x-4">
            <div className="relative w-1/2 h-40">
              <Image
                src="/problem/photo1.png"
                alt="Travel photo 1"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative w-1/2 h-40">
              <Image
                src="/problem/photo2.png"
                alt="Travel photo 2"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="relative w-[70%] h-44">
            <Image
              src="/problem/photo3.png"
              alt="Travel photo 3"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex justify-between w-full space-x-4">
            <div className="relative w-1/2 h-40">
              <Image
                src="/problem/photo4.png"
                alt="Travel photo 4"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative w-1/2 h-40">
              <Image
                src="/problem/photo5.png"
                alt="Travel photo 5"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Desktop: układ gridowy */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-center">
          <div className="space-y-6">
            <div className="relative w-full h-60">
              <Image
                src="/problem/photo1.png"
                alt="Travel photo 1"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative w-full h-60">
              <Image
                src="/problem/photo4.png"
                alt="Travel photo 4"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-60 h-80">
              <Image
                src="/problem/photo3.png"
                alt="Travel photo 3"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative w-full h-60">
              <Image
                src="/problem/photo2.png"
                alt="Travel photo 2"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative w-full h-60">
              <Image
                src="/problem/photo5.png"
                alt="Travel photo 5"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Opis */}
      <p className="text-sm lg:text-xl leading-relaxed max-w-md lg:max-w-3xl mx-auto">
        You’ve spent hours picking the perfect outfit. You’re in a new city,
        feeling alive. But when it’s time to take that one great photo… <br />
        you don’t know where to go?
      </p>
    </section>
  );
};

export default Problem;
