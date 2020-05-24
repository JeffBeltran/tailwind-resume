function Card({ children, heading }) {
  return (
    <div class="bg-gray-50 text-teal-900 overflow-hidden shadow rounded-lg">
      {heading && (
        <div class="font-heading text-3xl border-b-2 border-dashed border-teal-400 px-4 py-5 sm:px-6">
          {heading}
        </div>
      )}
      <div class="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}

export default Card;
