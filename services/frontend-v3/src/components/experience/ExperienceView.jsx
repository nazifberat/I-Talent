import React from "react";
import { Row, Col, Avatar, List } from "antd";
import { ContainerOutlined } from "@ant-design/icons";

function ExperienceView(props) {
  /* Component Styles */
  const styles = {
    card: {
      height: "100%",
    },
    avatar: {
      backgroundColor: "#007471",
    },
  };
  const generateExperienceInfoList = (dataSource) => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item extra={item.duration}>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={styles.avatar}
                  size="large"
                  icon={<ContainerOutlined />}
                  shape="square"
                />
              }
              title={item.jobTitle}
              description={item.organizationName}
            />
          </List.Item>
        )}
      />
    );
  };

  const experienceInfo = props.experienceInfo;

  return (
    <Row>
      <Col xs={24} lg={24}>
        {generateExperienceInfoList(experienceInfo)}
      </Col>
    </Row>
  );
}

export default ExperienceView;
