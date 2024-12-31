import React, { useState } from "react";
import texture from "../../../assets/images/textures/Texture.png";
import dreamrunnerimg from "../../../assets/images/bg/dreamrunnerbg.png";
import dreamrunnerlogo from "../../../assets/images/bg/dreamrunnerlogo.png";
import twitterButton from "../../../assets/images/buttons/twitterbutton.png";
import whitepaperButton from "../../../assets/images/buttons/whitepaperbutton.png";
import discordButton from "../../../assets/images/buttons/discordbutton.png";
import loadingImg from "../../../assets/images/dreamrunnerpfp/loading.png";
import promptImg from "../../../assets/images/dreamrunnerpfp/promptnobutton.png";
import createFlairImg from "../../../assets/images/dreamrunnerpfp/createflair.png";
import generateBtn from "../../../assets/images/dreamrunnerpfp/generate.png";
import confirmBtn from "../../../assets/images/dreamrunnerpfp/confirm.png";
import nameTextbox from "../../../assets/images/dreamrunnerpfp/nametextbox.png";

// Enum for mint phases
const MINT_PHASES = {
  LOADING: 0,
  CHOOSE_RUNNER: 1,
  NAME_RUNNER: 2,
  SHARE_RUNNER: 3,
  WHITELIST_SECURED: 4,
};

const PFPMint = () => {
  const [currentPhase, setCurrentPhase] = useState(MINT_PHASES.LOADING);
  const [promptText, setPromptText] = useState("");
  const [selectedRunner, setSelectedRunner] = useState(null);

  const nextPhase = () => {
    setCurrentPhase((prev) =>
      prev < MINT_PHASES.WHITELIST_SECURED ? prev + 1 : prev
    );
  };

  const prevPhase = () => {
    setCurrentPhase((prev) => (prev > MINT_PHASES.LOADING ? prev - 1 : prev));
  };

  const handleGenerate = () => {
    // Placeholder for API call
    console.log("Generating with prompt:", promptText);
    // Move to next phase
    nextPhase();
  };

  // Render current phase content
  const renderPhaseContent = () => {
    switch (currentPhase) {
      case MINT_PHASES.LOADING:
        return (
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center items-center gap-8 mt-[200px]">
              <img
                src={loadingImg}
                alt="Loading"
                className="w-[200px] md:w-[250px] h-auto"
              />
              <img
                src={loadingImg}
                alt="Loading"
                className="w-[200px] md:w-[250px] h-auto"
              />
              <img
                src={loadingImg}
                alt="Loading"
                className="w-[200px] md:w-[250px] h-auto"
              />
            </div>

            <h2
              className="text-xs md:text-lg !font-[AveriaSerifLibre-Bold] text-[#858585]"
              style={{
                background:
                  "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter:
                  "drop-shadow(0 4px 6px rgba(0,0,0,0.9)) drop-shadow(0 1px 3px rgba(0,0,0,0.9))",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              DISCOVER YOUR LEGACY
            </h2>

            <div className="relative">
              <img
                src={promptImg}
                alt="Prompt"
                className="w-[400px] md:w-[500px] h-auto"
              />
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="Enter your dream prompt..."
                className="absolute top-[10%] left-[3%] w-[67%] h-[80%] px-4 py-2 text-[#fcdfc5] placeholder-[#858585] !font-[AveriaSerifLibre] resize-none bg-transparent border-none outline-none"
              />
              <div className="absolute right-[3%] top-1/2 -translate-y-1/2">
                <button onClick={handleGenerate}>
                  <img
                    src={generateBtn}
                    alt="Generate"
                    className="h-12 w-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      case MINT_PHASES.CHOOSE_RUNNER:
        return (
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center items-center gap-8 mt-[200px]">
              {[1, 2, 3].map((id) => (
                <div key={id} className="relative">
                  {selectedRunner === id && (
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        background: `
                          linear-gradient(to right, 
                            rgba(64,255,220,0) 0%, 
                            rgba(64,255,220,0.2) 50%, 
                            rgba(64,255,220,0) 100%
                          ),
                          linear-gradient(to bottom, 
                            rgba(64,255,220,0) 0%, 
                            rgba(64,255,220,0.2) 50%, 
                            rgba(64,255,220,0) 100%
                          )
                        `,
                        transform: "scale(1.1)",
                        filter: "blur(15px)",
                        animation: "pulse 2s infinite",
                      }}
                    />
                  )}
                  <img
                    src={loadingImg}
                    alt={`Dreamrunner ${id}`}
                    className={`w-[200px] md:w-[250px] h-auto cursor-pointer transition-all duration-300 hover:scale-105 relative z-10
                      ${
                        selectedRunner && selectedRunner !== id
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    onClick={() => setSelectedRunner(id)}
                  />
                </div>
              ))}
            </div>

            <h2
              className="text-xs md:text-lg !font-[AveriaSerifLibre-Bold] text-[#858585]"
              style={{
                background:
                  "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter:
                  "drop-shadow(0 4px 6px rgba(0,0,0,0.9)) drop-shadow(0 1px 3px rgba(0,0,0,0.9))",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Choose a Dreamrunner or enter a new prompt
            </h2>

            <div className="relative">
              <img
                src={promptImg}
                alt="Prompt"
                className="w-[400px] md:w-[500px] h-auto"
              />
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="Enter your dream prompt..."
                className="absolute top-[10%] left-[3%] w-[67%] h-[80%] px-4 py-2 text-[#fcdfc5] placeholder-[#858585] !font-[AveriaSerifLibre] resize-none bg-transparent border-none outline-none"
              />
              <div className="absolute right-[3%] top-1/2 -translate-y-1/2 flex flex-col gap-0">
                {selectedRunner && (
                  <button onClick={nextPhase}>
                    <img
                      src={confirmBtn}
                      alt="Confirm"
                      className="h-12 w-auto"
                    />
                  </button>
                )}
                <button onClick={handleGenerate}>
                  <img
                    src={generateBtn}
                    alt="Generate"
                    className="h-12 w-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      case MINT_PHASES.NAME_RUNNER:
        return (
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center items-center mt-[200px]">
              <img
                src={loadingImg}
                alt="Selected Dreamrunner"
                className="w-[200px] md:w-[250px] h-auto"
              />
            </div>

            <h2
              className="text-xs md:text-lg !font-[AveriaSerifLibre-Bold] text-[#858585]"
              style={{
                background:
                  "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter:
                  "drop-shadow(0 4px 6px rgba(0,0,0,0.9)) drop-shadow(0 1px 3px rgba(0,0,0,0.9))",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              KEEP IT CLEAN - INAPPROPRIATE NAMES WILL RESULT IN LOSING
              WHITELIST
            </h2>

            <div className="relative">
              <img
                src={nameTextbox}
                alt="Name Input"
                className="w-[400px] md:w-[500px] h-auto"
              />
              <input
                type="text"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="Enter name..."
                className="absolute top-[20%] left-[3%] w-[67%] px-4 text-[#fcdfc5] placeholder-[#858585] !font-[AveriaSerifLibre] bg-transparent border-none outline-none border-2 border-red-500"
                style={{
                  borderImage: "linear-gradient(to right, #ff0000, #ff4444) 1",
                }}
              />
              <button
                onClick={nextPhase}
                className="absolute right-[3%] top-1/2 -translate-y-1/2"
              >
                <img src={confirmBtn} alt="Confirm" className="h-12 w-auto" />
              </button>
            </div>
          </div>
        );
      case MINT_PHASES.SHARE_RUNNER:
        return (
          <div className="text-white text-center">
            Share Your Dreamrunner Phase
          </div>
        );
      case MINT_PHASES.WHITELIST_SECURED:
        return (
          <div className="text-white text-center">Whitelist Secured Phase</div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4 min-w-[320px] max-w-[100vw] overflow-x-hidden relative">
      {/* Background elements */}
      <div className="absolute left-1/2 top-[10%] -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <img
          src={createFlairImg}
          alt="Create Flair"
          className="w-[400px] md:w-[500px] h-auto"
        />
        <img
          src={dreamrunnerlogo}
          alt="Dreamrunner Logo"
          className="w-[400px] md:w-[500px] h-auto"
        />
      </div>

      <div
        className="absolute inset-0 top-[7%] z-0"
        style={{
          backgroundImage: `url(${dreamrunnerimg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
          mixBlendMode: "normal",
          transform: "scale(0.75)",
          transformOrigin: "center center",
        }}
      />

      {/* Debug Navigation Arrows */}
      <div className="fixed inset-y-0 left-4 flex items-center z-50">
        <button
          onClick={prevPhase}
          className="text-white text-4xl opacity-50 hover:opacity-100"
        >
          ←
        </button>
      </div>
      <div className="fixed inset-y-0 right-4 flex items-center z-50">
        <button
          onClick={nextPhase}
          className="text-white text-4xl opacity-50 hover:opacity-100"
        >
          →
        </button>
      </div>

      {/* Phase Content */}
      <div className="flex-1 flex items-center justify-center z-10">
        {renderPhaseContent()}
      </div>

      {/* Footer */}
      <div className="mt-auto w-full text-center z-10">
        <a
          href="https://dreampro.ai"
          className="text-[#fcdfc5] !font-[AveriaSerifLibre] text-xs md:text-sm hover:text-[#858585] transition-colors"
          style={{
            background:
              "linear-gradient(180deg, #fcdfc5 0%, #a88d6b 50%, #fcdfc5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
          }}
        >
          &lt; RETURN TO HOME
        </a>
      </div>
    </div>
  );
};

export default PFPMint;
