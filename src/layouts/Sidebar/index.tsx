import { colors } from "colors";
import { StyledDivider } from "commons/styled";
import DownIcon from "icons/DownIcon";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px 0px" }} />
        <div className="label">Bạn bè</div>
      </StyledItem>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px -80px" }} />
        <div className="label">Nhóm</div>
      </StyledItem>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px -80px" }} />
        <div className="label">Nhóm</div>
      </StyledItem>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px -80px" }} />
        <div className="label">Nhóm</div>
      </StyledItem>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px -80px" }} />
        <div className="label">Nhóm</div>
      </StyledItem>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px -80px" }} />
        <div className="label">Nhóm</div>
      </StyledItem>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px -80px" }} />
        <div className="label">Nhóm</div>
      </StyledItem>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px -80px" }} />
        <div className="label">Nhóm</div>
      </StyledItem>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px -80px" }} />
        <div className="label">Nhóm</div>
      </StyledItem>
      <StyledItem>
        <div className="bg-img" style={{ backgroundPosition: "0px -80px" }} />
        <div className="label">Nhóm</div>
      </StyledItem>
      <StyledLoadmoreBtn>
        <StyledItem>
          <div className="icon">
            <DownIcon />
          </div>
          <div className="label">Xem thêm</div>
        </StyledItem>
      </StyledLoadmoreBtn>

      <StyledDivider />
      {/* short cut */}
      <StyledShortCut>
        <div className="title">Lối tắt của bạn</div>
        <div className="btn">Chỉnh sửa</div>
      </StyledShortCut>
      <StyledItem>
        <img
          src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
          alt=""
          className="shotcut-logo"
        />
        <div className="label">
          Liquid có văn phòng tại Nhật, Singapore và Việt Nam, Liquid có văn
          phòng tại Nhật, Singapore và Việt Nam
        </div>
      </StyledItem>
      <StyledItem>
        <img
          src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
          alt=""
          className="shotcut-logo"
        />
        <div className="label">Liquid có văn phòng tại Nhật</div>
      </StyledItem>
      <StyledItem>
        <img
          src="https://smarthome.worldtech.vn/wp-content/uploads/2017/10/hinh-ngoi-nha.jpg"
          alt=""
          className="shotcut-logo"
        />
        <div className="label">Liquid có văn phòng</div>
      </StyledItem>
      <StyledItem>
        <img
          src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
          alt=""
          className="shotcut-logo"
        />
        <div className="label">
          Liquid có văn phòng tại Nhật, Singapore và Việt Nam, Liquid có văn
          phòng tại Nhật, Singapore và Việt Nam
        </div>
      </StyledItem>
      <StyledItem>
        <img
          src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg"
          alt=""
          className="shotcut-logo"
        />
        <div className="label">Liquid có văn phòng tại Nhật</div>
      </StyledItem>
      <StyledItem>
        <img
          src="https://smarthome.worldtech.vn/wp-content/uploads/2017/10/hinh-ngoi-nha.jpg"
          alt=""
          className="shotcut-logo"
        />
        <div className="label">Liquid có văn phòng</div>
      </StyledItem>

      <StyledLoadmoreBtn>
        <StyledItem>
          <div className="icon">
            <DownIcon />
          </div>
          <div className="label">Xem thêm</div>
        </StyledItem>
      </StyledLoadmoreBtn>
    </StyledSidebar>
  );
};

const StyledLoadmoreBtn = styled.div`
  display: flex;

  align-items: center;
  cursor: pointer;

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${colors.bgColor};
    margin-right: 16px;
    margin-left: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    color: ${colors.textColor2};
  }
`;

const StyledShortCut = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px 10px 10px;

  .title {
    color: ${colors.textColor1};
    font-size: 17px;
    font-weight: bold;
    padding: 4px 8px;
  }

  .btn {
    color: ${colors.primaryColor};
    border: 1px solid ${colors.primaryColor};
    padding: 4px 8px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 5px;
    display: none;
  }

  &:hover .btn {
    display: block;
  }
`;

const StyledItem = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  color: ${colors.textColor2};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  border-radius: 10px;
  line-height: 1.6;
  width: 100%;

  &:hover {
    background-color: ${colors.hoverColor};
  }

  .bg-img {
    background-image: url("./assets/app_icon.png");
    height: 65px;
    width: 65px;
    transform: scale(0.5);
  }

  .shotcut-logo {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 16px;
    margin-left: 16px;
  }

  .label {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const StyledSidebar = styled.div`
  width: 100%;
  max-width: 350px;
  height: calc(100vh - 56px - 1px);
  padding: 20px 8px;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.hoverColor};
    border-radius: 10px;
  }

  /* &:hover &::-webkit-scrollbar-thumb {
    background: ${colors.hoverColor};
  } */

  /* .tst {
    color: #fff;
    display: none;
  }

  &:hover .tst {
    display: block;
  } */
`;

export default Sidebar;
