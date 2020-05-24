function Card({ children, heading }) {
  return (
    <div className="overflow-hidden text-teal-900 rounded-lg shadow bg-gray-50">
      {heading && (
        <div className="px-4 py-5 text-3xl border-b-2 border-teal-400 border-dashed font-heading sm:px-6">
          {heading}
        </div>
      )}
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}

export default Card;
