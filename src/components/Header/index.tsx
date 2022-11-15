import { colors } from "colors";
import {
  StyledAvatar,
  StyledCycleIcon,
  StyledNavLinkIcon,
} from "commons/styled";
import ChipLabel from "components/ChipLabel";
import ToolTip from "components/ToolTip";
import BellIcon from "icons/BellIcon";
import GroupIcon from "icons/GroupIcon";
import HomeIcon from "icons/HomeIcon";
import MarketplaceIcon from "icons/MarketplaceIcon";
import MenuIcon from "icons/MenuIcon";
import MessengerIcon from "icons/MessengerIcon";
import PlayIcon from "icons/PlayIcon";
import SearchIcon from "icons/SearchIcon";
import WatchIcon from "icons/WatchIcon";
import { NavLink, StyledHeader, StyledLeft, StyledRight } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeft>
        <img src="./assets/facebook_logo.png" alt="" className="logo" />
        <div className="search-wrap">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm trên facebook"
          />
        </div>
      </StyledLeft>

      <NavLink>
        <ToolTip text="Trang chủ">
          <StyledNavLinkIcon>
            <HomeIcon />
          </StyledNavLinkIcon>
        </ToolTip>

        <ToolTip text="Watch">
          <StyledNavLinkIcon>
            <WatchIcon />
          </StyledNavLinkIcon>
        </ToolTip>

        <ToolTip text="Marketplace">
          <StyledNavLinkIcon>
            <MarketplaceIcon />
          </StyledNavLinkIcon>
        </ToolTip>

        <ToolTip text="">
          <StyledNavLinkIcon>
            <GroupIcon />
          </StyledNavLinkIcon>
        </ToolTip>

        <ToolTip text="Trò chơi">
          <StyledNavLinkIcon>
            <PlayIcon />
          </StyledNavLinkIcon>
        </ToolTip>
      </NavLink>

      <StyledRight>
        <ToolTip text="Menu">
          <ChipLabel text="">
            <StyledCycleIcon>
              <MenuIcon color={colors.textColor2} />
            </StyledCycleIcon>
          </ChipLabel>
        </ToolTip>
        <ToolTip text="Messenger">
          <ChipLabel text="10">
            <StyledCycleIcon>
              <MessengerIcon color={colors.textColor2} />
            </StyledCycleIcon>
          </ChipLabel>
        </ToolTip>
        <ToolTip text="Thông báo">
          <ChipLabel text="1">
            <StyledCycleIcon>
              <BellIcon color={colors.textColor2} />
            </StyledCycleIcon>
          </ChipLabel>
        </ToolTip>

        <StyledAvatar src="http://hanoimoi.com.vn/Uploads/images/phananh/2021/12/21/soccer.jpg" />
      </StyledRight>
    </StyledHeader>
  );
};

export default Header;
