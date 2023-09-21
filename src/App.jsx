import { useState, useRef } from "react";
import "./App.css";
import UniLogo from "./assets/uniLogo.svg";
import Cross from "./assets/cross.svg";
import Arrow from "./assets/arrow.svg";
import VideoBg from "./assets/nxt_wave_bg.mp4";
import Hamburger from "./assets/hamburger.svg";
import ScrollAnimatedSection from "./components/animateOnScroll";
import useToggle from "./hooks/useToggle";
import Apply from "./components/apply";
import MobileApply from "./components/mobileApply";
import useIsVisible from "./hooks/useIsVisible";

function App() {
  const [isOpen, toggleOpen, handleOpen] = useToggle(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);
  return (
    <div className="flex flex-col">
      <header className="flex flex-col banner-container">
        <nav className="w-full self-center max-w-7xl md:px-[48px] px-[20px] py-2 bg-transparent flex justify-between items-center">
          <img
            className="max-w-[120px] max-h-[90px] cursor-pointer"
            src={UniLogo}
            alt="unilogo"
          />
          <div className="hidden md:flex cursor-pointer  ">
            <a
              href="https://paychek.uni.club/"
              className="no-underline visited:text-white text-white font-medium hover:text-teal-400 bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]"
            >
              Uni Paychek
            </a>
          </div>
          <div className="flex md:hidden">
            <button className="" onClick={toggleOpen}>
              {isOpen ? (
                <img src={Cross} alt="cross" />
              ) : (
                <img src={Hamburger} alt="hamburger" />
              )}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="md:hidden max-w-7xl bg-navbar-mobile cursor-pointer py-4 px-3">
            <a
              href="https://paychek.uni.club/"
              className="flex text-white justify-between"
            >
              <span> Uni Paycheck</span>
              <img className="h-6 w-6 text-white" src={Arrow} alt="arrow" />
            </a>
          </div>
        )}
        <video loop muted autoPlay playsInline>
          <source src={VideoBg}></source>
        </video>
        {/**Banner content */}
        <section className="m-auto max-w-7xl self-center flex flex-col md:flex-row-reverse mx-auto w-full justify-center z-1 bg-transparent">
          <img
            className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] md:mx-6 mx-auto"
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            alt="banner"
          />
          <div className="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
            <h1 className="font-normal mx-auto md:mx-0 max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
              <strong>NX Wave.</strong>
              The next-gen credit card for those who love rewards.
            </h1>
            <p className="font-medium mx-auto md:mx-0 text-sm md:text-base md:mb-9 mt-4 flex gap-2">
              1% Cashback
              <span className="text-black font-bold">+</span>
              5x Rewards
              <span className="text-black font-bold">+</span>
              Zero Forex Markup
            </p>
            <Apply
              wrapperClassName="gap-4 hidden md:flex flex-col"
              clearInput={() => setPhoneNumber("")}
              checked={checkBox}
              handleCheckbox={(e) => setCheckBox(e.target.checked)}
              value={phoneNumber}
              handleInputChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div ref={elemRef}></div>
          </div>
        </section>
      </header>
      <section className="max-w-7xl px-6 md:px-4 flex flex-col gap-16 mx-auto py-[150px]">
        <h1 className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] text-black md:pb-16 font-medium">
          <ScrollAnimatedSection className="text-slide-up-animation">
            Earn 1% assured cashback{" "}
            <span className="text-gray-400">on your spends. Get 5X</span>
          </ScrollAnimatedSection>
          <ScrollAnimatedSection className="text-animation-delay-2">
            more value than cashback{" "}
            <span className="text-gray-400">at the Uni Store. Enjoy</span>{" "}
          </ScrollAnimatedSection>
          <ScrollAnimatedSection className="text-animation-delay-3">
            <span className="text-gray-400">round the clock</span> Whatsapp
            support. <span className="text-gray-400"> And it's</span>
          </ScrollAnimatedSection>
          <ScrollAnimatedSection className="text-animation-delay-4">
            lifetime free{" "}
            <span className="text-gray-400">
              ; no joining fee, no annual charges.
            </span>
          </ScrollAnimatedSection>
        </h1>
        <ScrollAnimatedSection
          wrapperClassName="p-[8px] w-[96px] h-[96px] md:h-[150px] md:w-[150px] flex justify-center items-center rounded-full gradient-color self-center "
          className="arrow-animation"
        >
          <img
            src="https://www.uni.cards/images/down_arrow.svg"
            alt="arrow-down"
          />
        </ScrollAnimatedSection>
      </section>
      <section className="w-full max-w-7xl mx-auto md:px-4 px-8 flex justify-center flex-col">
        <div className="flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-between md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2] w-full md:w-[50%]">
            <span>
              <strong>1% assured cashback on your spends.</strong>{" "}
              <span className="text-[#9EA7AE]">
                The more you spend, the more you earn.{" "}
              </span>
            </span>
            <span className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
              Not applicable on fuel purchase, rent & wallet transfers, ATM
              withdrawals & international transactions.
            </span>
          </div>
          <div className="w-full my-10 md:my-0 lg:pt-0 md:w-[50%] ">
            <img
              className="w-[280px] lg:w-[448px] mx-auto"
              src="https://www.uni.cards/images/one_percent_cashback.png"
            />
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto md:px-4 px-8 flex justify-center flex-col">
        <div className="flex md:items-center flex-col-reverse md:flex-row-reverse w-full font-medium justify-between md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2] w-full md:w-[50%]">
            <span>
              <strong>5x more value than your cashback,.</strong>{" "}
              <span className="text-[#9EA7AE]">only at the Uni Store.</span>
            </span>
            {/* <span className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.</span> */}
          </div>
          <div className="w-full my-10 md:my-0 lg:pt-0 md:w-[50%] ">
            <img
              className="w-[280px] lg:w-[448px] mx-auto"
              src="https://www.uni.cards/images/five_x_rewards.png"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto md:px-4 px-8 flex justify-center flex-col">
        <div className="flex md:items-center flex-col-reverse md:flex-row w-full font-medium justify-between md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2] w-full md:w-[50%]">
            <span>
              <strong>Zero Forex Markup.</strong>{" "}
              <span className="text-[#9EA7AE]">
                Go international, without any fees.
              </span>
            </span>
            {/* <span className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.</span> */}
          </div>
          <div className="w-full my-10 md:my-0 lg:pt-0 md:w-[50%] ">
            <img
              className="w-[280px] lg:w-[448px] mx-auto"
              src="https://www.uni.cards/images/forex_globe.png"
            />
          </div>
        </div>
      </section>
      <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
        <p className="mx-auto">
          Lifetime <span className="text-teal-400">free. </span>
          <span className="block sm:inline-block md:text-center">
            No joining fee.
          </span>
          <span className="block md:text-center"> No annual charges. </span>
        </p>
      </div>
      <section className="mt-[100px] bg-black flex flex-col gap-4 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-4">
          <div className="w-full m-auto md:w-[48%]">
            <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
              We’ve all heard of instant groceries, now say hello to
              <span className="gradient-color-txt">
                <br /> instant credit.
              </span>
            </p>
            <p className="text-[#BFC9CC] text-[14px] md:text-2xl">
              0% hassle, 100% paperless. Get your <br /> Uni Card instantly.
            </p>
          </div>
          <div className="w-full mx-auto md:w-[490px]">
            <img
              src="https://www.uni.cards/images/nx-wave/app_screen_1.webp"
              alt=""
              className="w-full m-auto "
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-4">
          <div className="w-full m-auto md:w-[48%]">
            <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
              With Uni,
              <span className="gradient-color-txt">
                <br /> you’re always in control.
              </span>
            </p>
            <p className="text-[#BFC9CC] text-[14px] md:text-2xl">
              Set your own payment limits. Choose how and where you spend. Lock
              and unlock your card. All right from the app.
            </p>
          </div>
          <div className="w-full mx-auto md:w-[490px]">
            <img
              src="https://www.uni.cards/images/nx-wave/app_screen_2.webp"
              alt=""
              className="w-full m-auto "
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-4"></div>
      </section>
      <section className="py-12 lg:py-[100px] bg-[#222627] lg:py-[120px]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:flex-col text-left md:text-center">
          <p className="mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]">
            <span>
              At Uni, we’re committed to{" "}
              <span className="uni-gradient-primary">
                {" "}
                delivering an unmatched credit experience{" "}
              </span>{" "}
              for millions of Indians.
            </span>
          </p>
          <p className="mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl">
            On this mission, we’ve partnered with some of the best in the
            business.
          </p>
          <div className="md:mt-24 flex flex-row justify-center flex-wrap">
            <div className="flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4">
              <img
                className="w-full h-full"
                src="	https://www.uni.cards/images/SBM.svg
"
                alt="sbm bank"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center text-center text-[#BFC9CC] text-base sm:text-xl md:text-2xl bg-black py-16 px-5 sm:px-8 md:px-12">
        <p className="max-w-3xl">
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </p>
      </section>
      <section className="py-12 bg-background-gradient lg:py-[100px] bg-cover gradient-color download-bg">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-around items-center my-4">
          <p className="mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight">
            Download now to get started
          </p>
        </div>
      </section>
      <footer></footer>

      {!isVisible && (
        <Apply
          wrapperClassName="gap-4 transition-all duration-150 ease-in hidden md:flex fixed bottom-0 flex justify-between w-full bg-gray-100 items-center px-8 py-4"
          clearInput={() => setPhoneNumber("")}
          checked={checkBox}
          handleCheckbox={(e) => setCheckBox(e.target.checked)}
          value={phoneNumber}
          handleInputChange={(e) => setPhoneNumber(e.target.value)}
        />
      )}

      <MobileApply
        wrapperClassName="gap-4 hidden md:flex flex-col"
        clearInput={() => setPhoneNumber("")}
        checked={checkBox}
        handleCheckbox={(e) => setCheckBox(e.target.checked)}
        value={phoneNumber}
        handleInputChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div className="mb-[90px]"></div>
    </div>
  );
}

export default App;
