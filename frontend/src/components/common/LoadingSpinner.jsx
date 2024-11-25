const LoadingSpinner = ({ size = "md" }) => {
  const sizeClass = `loading-${size}`;

  return <span className={`loading loading-bars ${sizeClass}`} />;
};

export default LoadingSpinner;