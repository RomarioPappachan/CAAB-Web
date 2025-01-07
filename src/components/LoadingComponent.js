function LoadingComponent() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#000000c1]">
      <div className="size-24 rounded-full animate-scale-up-down">
        <img
          src="/caab-score-icon.jpg"
          alt="Logo"
          className="w-full object-cover rounded-full"
        />
      </div>
    </div>
  );
}

export default LoadingComponent;
