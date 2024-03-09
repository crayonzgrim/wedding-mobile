import { Contact, Gallery, Main, TextDescription } from "./components";

export const App = () => {
  return (
    <div className="border border-dashed xl:border-red-700 lg:border-blue-700 md:border-green-700 sm:border-red-700 xl:px-80 lg:px-56 md:px-28 sm:px-28">
      <Main />

      <div className="h-[284px] flex items-end justify-center text-[50px] font-dancing text-[#FF8796] pb-10">
        Love
      </div>

      <TextDescription />

      <Contact />

      <Gallery />
    </div>
  );
};
