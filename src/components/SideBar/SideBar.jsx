import React, { useEffect } from "react";
import SideBarLink from "./SideBarLink";
import {
  homeIcon,
  shortsIcon,
  subsIcon,
  user,
  historyIcon,
  yourVideosIcon,
  watchLaterIcon,
  downloadsIcon,
  trendingIcon,
  shoppingIcon,
  musicIcon,
  filmsIcon,
  liveModeIcon,
  gamingIcon,
  newsIcon,
  sportsIcon,
  learningIcon,
  fashionBeautyIcon,
  podcastIcon,
  premiumIcon,
  studioIcon,
  ytmusicIcon,
  kidsIcon,
  settingsIcon,
  reportIcon,
  helpIcon,
  feedbackIcon,
  userIcon,
} from "../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideBar } from "../../utilities/sideBarSlice";

const SideBar = () => {
  const isOpen = useSelector(store => store.sideBar.isOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleIsOpen = (e) => {
      if (window.innerWidth > 758) {
        dispatch(toggleSideBar(true));
      }
    }
    handleIsOpen()
  },[]);
  return (
    <div  className={` bg-white flex flex-col fixed justify-start h-full overflow-y-auto  transition-transform duration-100 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-[224px]'}`}>
      {/* main  */}
      <div className="w-[210px] pl-3 mt-4">
        <SideBarLink to="/" name={"Home"} src={homeIcon} alt={"Home"} />
        <SideBarLink  name={"Shorts"} src={shortsIcon} alt={"Shorts"} />
        <SideBarLink
          name={"Subscriptions"}
          src={subsIcon}
          alt={"Subscriptions"}
        />
        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
      </div>

      {/* you  */}
      <div className="w-[210px] pl-3">
        <div className="font-semibold px-3 py-2">You</div>
        <SideBarLink name={"Your channel"} src={user} alt={"user image"} />
        <SideBarLink name={"History"} src={historyIcon} alt={"history image"} />
        <SideBarLink
          name={"Your videos"}
          src={yourVideosIcon}
          alt={"your videos image"}
        />
        <SideBarLink
          name={"Watch Later"}
          src={watchLaterIcon}
          alt={"watch later image"}
        />
        <SideBarLink
          name={"Downloads"}
          src={downloadsIcon}
          alt={"download image"}
        />
        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
      </div>

      {/* Subscriptions  */}
      <div className="w-[210px] pl-3">
        <div className="font-semibold px-3 py-2">Subscriptions</div>
        <SideBarLink
          customClass={"rounded-full"}
          name={"Abhinav Yadav"}
          src={userIcon}
          alt={"user image"}
        />
        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
      </div>

      {/* Explore  */}
      <div className="w-[210px] pl-3">
        <div className="font-semibold px-3 py-2">Explore</div>
        <SideBarLink
          name={"Trending"}
          src={trendingIcon}
          alt={"trending image"}
        />
        <SideBarLink
          name={"Shopping"}
          src={shoppingIcon}
          alt={"shopping image"}
        />
        <SideBarLink name={"Music"} src={musicIcon} alt={"music image"} />
        <SideBarLink name={"Films"} src={filmsIcon} alt={"films image"} />
        <SideBarLink name={"Live"} src={liveModeIcon} alt={"live image"} />
        <SideBarLink name={"Gaming"} src={gamingIcon} alt={"gaming image"} />
        <SideBarLink name={"News"} src={newsIcon} alt={"news image"} />
        <SideBarLink name={"Sport"} src={sportsIcon} alt={"sport image"} />
        <SideBarLink
          name={"Learning"}
          src={learningIcon}
          alt={"learning image"}
        />
        <SideBarLink
          name={"Fashion & Beauty"}
          src={fashionBeautyIcon}
          alt={"fashin and beauty image"}
        />
        <SideBarLink
          name={"Podcasts"}
          src={podcastIcon}
          alt={"podcasts image"}
        />
        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
      </div>

      {/* More from Youtube  */}
      <div className="w-[210px] pl-3">
        <div className="font-semibold px-3 py-2">More from Youtube</div>
        <SideBarLink
          name={"YouTube Premium"}
          src={premiumIcon}
          alt={"premium image"}
        />
        <SideBarLink
          name={"YouTube Studio"}
          src={studioIcon}
          alt={"studio image"}
        />
        <SideBarLink
          name={"YouTube Music"}
          src={ytmusicIcon}
          alt={"yt music image"}
        />
        <SideBarLink name={"YouTube Kids"} src={kidsIcon} alt={"kids image"} />
        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
      </div>

      {/* settings  */}
      <div className="w-[210px] pl-3">
        <SideBarLink
          name={"Settings"}
          src={settingsIcon}
          alt={"settings image"}
        />
        <SideBarLink
          name={"Report history"}
          src={reportIcon}
          alt={"Report history image"}
        />
        <SideBarLink name={"Help"} src={helpIcon} alt={"help image"} />
        <SideBarLink
          name={"Send feedback"}
          src={feedbackIcon}
          alt={"Send feedback image"}
        />
        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
      </div>
      <div className="w-[210px] pl-3 font-semibold text-[12px] text-gray-600 flex flex-col gap-2">
        <div className=" flex flex-wrap gap-[3px]">
          <a href="">About</a>
          <a href="">Press</a>
          <a href="">Copyright</a>
          <a href="">Contact us</a>
          <a href="">Creator</a>
          <a href="">Developers</a>
        </div>

        <div className=" flex flex-wrap gap-[3px]">
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Policy & Safety</a>
          <a href="">How YouTube works us</a>
          <a href="">Test new features</a>
        </div>

        <div className="my-4 font-medium text-gray-400">
          <p>@2024 Google LLC</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
