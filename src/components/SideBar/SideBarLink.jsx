import { Link, useLocation } from "react-router-dom";
const SideBarLink = ({ src, alt, name, customClass, to }) => {
  const { pathname } = useLocation();
  
  return (
    <Link to={to}>
      <div
        className={`cursor-pointer gap-2 items-center flex px-3 py-2 hover:bg-gray-100 hover:rounded-xl text-[14px] ${
          to === pathname
            ? "bg-gray-200 font-semibold rounded-xl hover:bg-gray-300"
            : ""
        }`}
      >
        <img className={`w-[24px] ${customClass}`} src={src} alt={alt} />
        {name}
      </div>
    </Link>
  );
};

export default SideBarLink;
