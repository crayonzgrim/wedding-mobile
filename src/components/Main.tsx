export const Main = () => {
  return (
    <main className="bg-[#FFE3E7] px-[3rem] flex flex-col justify-between items-center gap-10 relative">
      <div className="font-lobster flex flex-col items-center justify-center text-[#FF8796]">
        <h1 className="text-[7em] absolute top-10 left-[30%] drop-shadow-lg">
          Happy
        </h1>
        <h1 className="text-[7em] absolute top-[12%] left-[8%] drop-shadow-lg">
          Wedding Day!
        </h1>
      </div>

      <div className="h-[45rem] w-full mt-52">
        <img
          className="bg-[url('./assets/section-a.jpg')] bg-cover w-full h-full"
          loading="lazy"
        />
      </div>

      <div className="flex items-center justify-center flex-col mb-10 font-gowun">
        <p className="text-[62px] mb-8 tracking-widest">김 동 일 & 키 아 나</p>
        <div className="text-[32px] mb-8">
          <p className="mb-2">2024.04.21 일 오후 01:00 </p>
          <p>웨딩칼라디움 3층 비올라홀</p>
        </div>
      </div>
    </main>
  );
};
