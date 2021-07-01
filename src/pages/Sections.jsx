import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../contexts/MainContext";
import { Modal, Button, Tag, Table, Row, Col } from "antd";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import moment from "moment";

const Sections = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { mainData, getCharactersFriends, getEpisode, selectedFriends } =
    useContext(MainContext);
  const [visible, setVisible] = useState(false);

  const getCharacters = (ids = []) => {
    getCharactersFriends(ids);
  };

  const findIds = (data = []) => {
    let ids = [];
    data.map((item) => ids.push(parseInt(item?.slice(42))));
    return ids;
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getEpisode(currentPage);
  }, [currentPage]);

  let selectedFriendsMixed = selectedFriends?.slice(
    0,
    Math.floor(Math.random() * (19 - 9 + 1) + 9)
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Episode",
      dataIndex: "episode",
      key: "episode",
      render: (episode) => {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return <Tag color={color}>{episode}</Tag>;
      },
    },
    {
      title: "Air Date",
      dataIndex: "air_date",
      key: "airDate",
    },
    {
      title: "Created Date",
      dataIndex: "created",
      key: "createdDate",
      render: (date) => <span>{moment(date).format("LLL")}</span>,
    },
    {
      title: "",
      dataIndex: "id",
      key: "action",
      render: (name, data) => {
        return (
          <div style={{ display: "flex", gap: "5px" }}>
            <Button
              className="sections-button"
              onClickCapture={() => getCharacters(findIds(data.characters))}
              onClick={() => setVisible(true)}
              type="primary"
            >
              Characters
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ marginTop: "1rem" }}>
      <Row justify="center">
        <Col span={20}>
          <Table
            dataSource={mainData.results}
            className="table"
            columns={columns}
            size="small"
            pagination={{
              position: ["bottomRight"],
              pagesize: 20,
              total: mainData?.info?.count,
              defaultPageSize: 20,
              defaultCurrent: 1,
              current: currentPage,
              onChange: (page) => setCurrentPage(page),
            }}
          />
          <Modal
            title="CHARACTERS"
            centered
            visible={visible}
            onCancel={() => setVisible(false)}
            width={1000}
          >
            {selectedFriendsMixed &&
              selectedFriendsMixed.map((character) => {
                return (
                  <Link to={`/character/${character.id}`}>
                    <Card name={character.name} img={character.image} />
                  </Link>
                );
              })}
          </Modal>
        </Col>
      </Row>
    </div>
  );
};
export default Sections;
