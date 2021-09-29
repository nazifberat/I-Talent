import { Layout, Skeleton } from "antd";
import PropTypes from "prop-types";

import "./SideNavView.less";

const { Sider } = Layout;

const SideNavView = ({
  displaySideBar,
  siderWidth,
  sideBarContent,
  loading,
}) => {
  if (displaySideBar) {
    return (
      <Sider
        breakpoint="lg"
        className="app-sider"
        collapsedWidth="0"
        role="navigation"
        width={siderWidth}
        zeroWidthTriggerStyle={{ backgroundColor: "#192e2f", bottom: "64px" }}
      >
        {/* render content of side bar */}
        <h2 className="visually-hidden">Sidebar Navigation</h2>
        {loading ? (
          <div style={{ margin: 32 }}>
            <Skeleton active />
          </div>
        ) : (
          <div className="app-sider-content">{sideBarContent}</div>
        )}
      </Sider>
    );
  }
  return <Sider width="0" />;
};

SideNavView.propTypes = {
  displaySideBar: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  sideBarContent: PropTypes.node.isRequired,
  siderWidth: PropTypes.number.isRequired,
};

export default SideNavView;
