const Arrow = ({ isOpen = false, rotate = "rotate-0" }) => (
  <svg
    className={`w-4 h-4 text-gray-400 transition-transform ease-in-out duration-500 transform ${
      isOpen ? "rotate-180" : rotate
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

export default Arrow;
