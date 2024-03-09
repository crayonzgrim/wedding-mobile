import { Mail, PhoneCall, Play } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export const Contact = () => {
  const [isRotate, setIsRotate] = useState(false);

  return (
    <div className="bg-gray-100 py-[66px]">
      <div className="flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center flex-col">
          <div className="mb-2 text-[18px] font-extrabold font-gowun">
            신랑에게 연락하기
          </div>
          <div className="flex items-center gap-5">
            <PhoneCall />
            <Mail />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center flex-col">
          <div className="mb-2 text-[18px] font-bold font-gowun">
            신부에게 연락하기
          </div>
          <div className="flex items-center gap-5">
            <PhoneCall />
            <Mail />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10 px-[20%] font-gowun">
        <p>신랑 측 혼주 </p>
        <button onClick={() => setIsRotate((prev) => !prev)}>
          <Play
            className={cn("rotate-90 transition-all ease-linear fill-[#333]", {
              "-rotate-90 transition-all ease-linear": isRotate,
              // "animate-spin": rotate,
            })}
            size={12}
          />
        </button>
        <p>신부 측 혼주 </p>
      </div>

      {isRotate ? (
        <>
          <div className="flex items-center justify-between mt-10 font-gowun">
            <div className="flex flex-col items-center justify-between flex-1">
              <div>
                <div className="flex items-end gap-3">
                  <p className="text-[12px] font-light">아버지</p>
                  <p className="text-[18px] font-bold">김호심</p>
                </div>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <PhoneCall />
                  <Mail />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-1">
              <div>
                <div className="flex items-end gap-3">
                  <p className="text-[12px] font-light">Father</p>
                  <p className="text-[18px] font-bold">
                    Norman Richard Elliott
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <PhoneCall />
                  <Mail />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-10 font-gowun">
            <div className="flex flex-col items-center justify-between flex-1">
              <div>
                <div className="flex items-end gap-3">
                  <p className="text-[12px] font-light">어머니</p>
                  <p className="text-[18px] font-bold">이계자</p>
                </div>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <PhoneCall />
                  <Mail />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-1">
              <div>
                <div className="flex items-end gap-3">
                  <p className="text-[12px] font-light">Mother</p>
                  <p className="text-[18px] font-bold">Lorinda Gayle Elliott</p>
                </div>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <PhoneCall />
                  <Mail />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
