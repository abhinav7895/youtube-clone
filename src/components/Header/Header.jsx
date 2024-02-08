import React from "react";
import {
  hamburgerIcon,
  youtubeLogo,
  searchIcon,
  micIcon,
  liveIcon,
  notificationIcon,
  userIcon,
} from "../../assets/icons";
import { Link } from "react-router-dom";
import { toggleSideBar } from "../../utilities/sideBarSlice";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import ToolTip from "../ToolTip/ToolTip";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleSideBar());
  }

  return (
    <div className="w-full px-6 h-15  flex justify-between items-center h-[56px] fixed top-0 bg-white z-20">

      <div className="flex items-center gap-4 flex-shrink-0 sm:pr-10">
        <div to={"/"}>
          <Button onClick={toggleMenu} className={'flex items-center'} src={hamburgerIcon} alt="hamburger"></Button>
        </div>
        <Link className="flex">
          <Button className="w-[100px]" src={youtubeLogo} alt="hamburger" />
          <sup className="text-[10px]">IN</sup>
        </Link>
      </div>

      <div className="hidden gap-6 sm:flex flex-grow max-w-[600px]">
        <div className="flex w-full rounded-full">
          <input
            className="rounded-l-full bg-gray-50 border-gray-400 px-3 py-[3px] border flex-grow outline-none focus:border focus:border-blue-700 shadow-inner"
            type="search"
            name=""
            id=""
            placeholder="Search"
          />
          <ToolTip tooltip={"Search"}>
            <Button
              className="bg-gray-200 px-4 py-[3px] rounded-r-full border-y border-r border-gray-400 flex-shrink-0"
              src={searchIcon}
              alt="searchIcon"
            />
          </ToolTip>
        </div>
        <ToolTip tooltip={"Search with your voice"}>
          <Button
            className="bg-gray-200 hover:bg-gray-300 w-10 h-10 flex justify-center items-center flex-shrink-0 rounded-full border border-gray-300"
            src={micIcon}
            alt="micIcon"
          />
        </ToolTip>
      </div>

      <div className="flex flex-shrink-0 sm:pl-10 justify-end">
        <div className="flex gap-4 mr-4 xsm:mr-0  sm:hidden">
          <ToolTip tooltip={"Search"}>
            <Button src={searchIcon} alt={"searchIcon"} />
          </ToolTip>
          <ToolTip tooltip={"Search with your voice"}>
            <Button className="xsm:hidden" src={micIcon} alt={"micIcon"} />
          </ToolTip>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          <ToolTip tooltip={"Create"}>
            <Button src={liveIcon} alt={liveIcon} />
          </ToolTip>
          <ToolTip tooltip={"Notifications"}>
            <Button
              className="xsm:hidden"
              src={notificationIcon}
              alt="notificationIcon"
            />
          </ToolTip>
          <Button
            customClass="w-8 rounded-full"
            src={userIcon}
            alt="userImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
