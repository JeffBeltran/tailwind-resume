function TextBlock({ children }) {
  return (
    <p className="text-xl leading-relaxed tracking-wide font-body">
      {children}
    </p>
  );
}

export default TextBlock;
