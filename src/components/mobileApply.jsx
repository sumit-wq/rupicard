import React from "react";
import Cross from ".././assets/cross.svg";
import Tick from ".././assets/tick.svg";

export default function MobileApply({
  value,
  handleInputChange,
  checked,
  handleCheckbox,
  clearInput,
  wrapperClassName,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isValidInput = () => {
    return value?.trim()?.length === 10;
  };

  const srcImg = () => {
    if (isValidInput()) return Tick;
    if (value && !isValidInput()) return Cross;
    return "";
  };
  const handleCrossClick = (e) => {
    if (isValidInput()) {
      e.stopPropagation();
    } else {
      clearInput();
    }
  };
  const handleApplyClick = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };
  return (
    <form className="md:hidden fixed bottom-0 z-50 gradient-bg-black p-2 w-[100%]">
      <div className="mx-auto transition-all ease-in w-[90vw] flex justify-center items-center flex-col">
        {isOpen && (
          <div className="w-[90vw] flex phone-input w-full justify-center items-center text-lg border-0  rounded-tr-xl rounded-tl-xl py-3">
            <input
              type="number"
              placeholder="Enter Phone Number"
              value={value}
              onChange={handleInputChange}
              className="w-[90%] outline-none bg-transparent"
              autoFocus={true}
            />
            <span
              className="cursor-pointer w-6 flex items-center justify-end h-full"
              onClick={handleCrossClick}
            >
              {srcImg() && (
                <img className="h-[16px] w-[16px]" src={srcImg()} alt="cross" />
              )}
            </span>
          </div>
        )}
        <div
          onClick={handleApplyClick}
          className="cursor-pointer self-center w-full p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
        >
          <span className="w-full flex justify-between items-center text-black ">
            <span>Apply Now</span>
            <img
              className="w-[21px]"
              src={"https://www.uni.cards/images/right_arrow.svg"}
              alt="arrow"
            />
          </span>
        </div>
        {isOpen && (
          <div className="w-[90vw] my-4  flex gap-1">
            <input
              id="apply-now-label-1"
              name="apply-now-label-1"
              type="checkbox"
              checked={checked}
              onChange={handleCheckbox}
            />
            <label
              className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
              htmlFor="apply-now-label-1"
            >
              You agree to be contacted by Uni Cards over Call, SMS, Email or
              WhatsApp to guide you through your application.
            </label>
          </div>
        )}
      </div>
    </form>
  );
}
