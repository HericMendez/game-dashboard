import React, { useState, useEffect, useCallback } from "react";
import { Table, Tooltip, Button, Drawer } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import GameProfile from "../GameProfile";

const CustomTable = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, total: 0 });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const showDrawer = (record) => {
    setSelectedRecord(record);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Função para deletar um item da lista
  const deleteItem = (record) => {
    setData((prevData) =>
      prevData.filter((item) => item.login.uuid !== record.login.uuid)
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      render: (name) => `${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "",
      dataIndex: "",
      width: "20%",
      render: (record) => (
        <div className="d-flex justify-content-end align-items-end">
          <>
            <Tooltip title="View">
              <Button
                primary
                onClick={() => showDrawer(record)}
                Bg="#ffffff"
                className="me-2 btn btn-outline-primary"
                icon={<EyeOutlined style={{ fontSize: 22 }} />}
                size="small"
              />
            </Tooltip>

            <Tooltip title="Delete">
              <Button
                danger
                onClick={() => deleteItem(record)} // Chama a função deleteItem
                Bg="#ffffff"
                icon={<DeleteOutlined style={{ fontSize: 22 }} />}
                size="small"
              />
            </Tooltip>
          </>
        </div>
      ),
    },
  ];

  const fetchData = useCallback((params = {}) => {
    setLoading(true);
    fetch(`https://randomuser.me/api?results=10&page=${params.page || 1}`)
      .then((response) => response.json())
      .then((data) => {
        setPagination((prev) => ({
          ...prev,
          total: 200, // Exemplo, a total de registros
        }));
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...pagination };
    pager.current = pagination.current;
    setPagination(pager);
    fetchData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  return (
    <>
      <Table
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />

      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        width={"50%"}
      >
        {selectedRecord && (
          <>
          <GameProfile/>
          </>
        )}
      </Drawer>
    </>
  );
};

export default CustomTable;
