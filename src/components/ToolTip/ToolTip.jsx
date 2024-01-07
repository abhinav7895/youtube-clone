const ToolTip = ({ children, tooltip }) => {
  return (
    <div
      className="group relative flex"
    >
      {children}
      {tooltip ? (
        <span
          className="invisible text-[12px] group-hover:visible opacity-0 group-hover:opacity-100 transition bg-gray-500 text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};

export default ToolTip;
