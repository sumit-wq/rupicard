import React, { useState } from "react";
import Cross from ".././assets/cross.svg";
import Tick from ".././assets/tick.svg";
function Apply({
  value,
  handleInputChange,
  checked,
  handleCheckbox,
  clearInput,
  wrapperClassName,
}) {
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
  return (
    <>
      <form className={wrapperClassName}>
        <div className=" bg-black max-w-[330px] rounded-xl flex p-1 pl-2 justify-between">
          <div className="flex ">
            <input
              type="number"
              placeholder="Enter Phone Number"
              value={value}
              onChange={handleInputChange}
              className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
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
          <button
            type="submit"
            className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-yellow-btn rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
            disabled={!Boolean(checked && isValidInput())}
          >
            <span>Apply Now</span>
          </button>
        </div>
        <div className=" max-w-[330px] flex gap-1">
          <input
            id="apply-now-label"
            name="apply-now-label"
            type="checkbox"
            checked={checked}
            onChange={handleCheckbox}
          />
          <label
            className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
            htmlFor="apply-now-label"
          >
            You agree to be contacted by Uni Cards over Call, SMS, Email or
            WhatsApp to guide you through your application.
          </label>
        </div>
      </form>
    </>
  );
}

export default Apply;
