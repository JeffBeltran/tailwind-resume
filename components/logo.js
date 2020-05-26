function Logo() {
  return (
    <svg
      aria-hidden="true"
      data-icon="mountain"
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <g className="fa-group">
        <path
          className="text-teal-400"
          fill="currentColor"
          d="M256 242.75l-66.66-66.67L293.08 14.7a32 32 0 0153.84 0L460.9 192H306.75l-9.37 9.37z"
          opacity=".7"
        />
        <path
          className="text-teal-900"
          fill="currentColor"
          d="M636.09 495.33A32 32 0 01608 512H32a32 32 0 01-26.92-49.3l166.55-259.07L256 288l64-64h161.47l153.45 238.7a32 32 0 011.17 32.63z"
        />
      </g>
    </svg>
  );
}

export default Logo;
