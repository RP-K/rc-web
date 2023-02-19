import { useState } from "react";
import Arrow from "../../../assets/icon/Arrow";

const CaseCard = ({ isActive = false }) => {
  const [isCaseOpen, setIsCaseOpen] = useState(false);
  const [isSubGroupAccordionOpen, setIsSubGroupAccordionOpen] = useState(false);

  const toggleCaseAccordion = () => {
    setIsCaseOpen(!isCaseOpen);
  };
  const toggleSubGroupAccordion = () => {
    setIsSubGroupAccordionOpen(!isSubGroupAccordionOpen);
  };
  const name = "Test-Case";
  const caseId = "1234-8908";

  return (
    <div
      className={`border my-1 py-2 rounded ${
        isActive ? "border-secondary-main border-[2px] bg-white" : ""
      }`}
    >
      <Accordion
        isOpen={isCaseOpen}
        title={caseId}
        subTitle={name}
        onClick={toggleCaseAccordion}
      />
      <div
        className={`max-h-0 overflow-hidden transition-all ease-in-out duration-500 ${
          isCaseOpen ? "max-h-screen px-1" : ""
        }`}
      >
        <div className="pl-3 pr-1 py-[2px]">
          <p className="text-sm text-gray-800 pb-1 font-subtitle">
            Case Members
          </p>
          <div className="cursor-pointer flex justify-between items-center gap-x-2 mb-2">
            <div className="overflow-hidden flex mr-4">
              {[...Array(15).keys()].map((i, j) => (
                <img
                  className="w-10 h-10 rounded-full -mr-2"
                  src="https://www.material-tailwind.com/img/face-2.jpg"
                  alt="p"
                  key={j}
                />
              ))}
            </div>
            <div>
              <Arrow rotate="-rotate-90" />
            </div>
          </div>
          <Accordion
            isOpen={isSubGroupAccordionOpen}
            subTitle="SubGroups"
            onClick={toggleSubGroupAccordion}
            padX={false}
          />
          <div
            className={`max-h-0 overflow-hidden transition-all ease-in-out duration-500 ${
              isSubGroupAccordionOpen ? "max-h-screen px-1" : ""
            }`}
          >
            <div className="flex flex-wrap gap-y-2 gap-x-3 my-2">
              {[...Array(3).keys()].map((i, j) => (
                <button
                  className="border border-primary-main px-2 py-1 rounded text-ellipsis overflow-hidden"
                  key={j}
                >
                  {"SubGroups".repeat(j + 1)}
                </button>
              ))}
            </div>
          </div>
          <div className="cursor-pointer flex justify-between items-center gap-x-2 my-2">
            <p className="font-subtitle text-sm">Shared Files</p>
            <div>
              <Arrow rotate="-rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;

const Accordion = ({ onClick, title, subTitle, isOpen, padX = true }) => (
  <div
    className={`"py-[6px] cursor-pointer flex justify-between items-center gap-x-2 " ${
      !padX ? "px-0" : "px-2"
    }`}
    onClick={onClick}
  >
    <div>
      {title && <span className="font-medium font-title mr-3">{title}</span>}
      <span className="text-sm font-subtitle">{subTitle}</span>
    </div>
    <Arrow isOpen={isOpen} />
  </div>
);
