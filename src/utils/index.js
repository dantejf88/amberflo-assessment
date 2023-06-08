
export const columns = [
    {
      title: 'Name',
      dataIndex: 'display_name',
      key: 'display_name',
      sorter: (a, b) => a.display_name.localeCompare(b.display_name),
      render: (text) => <p>{text}</p>
    },
    {
      title: 'Api name',
      dataIndex: 'api_name',
      key: 'api_name',
      sorter: (a, b) => a.api_name.localeCompare(b.api_name),
      render: (text) => <p>{text}</p>
    },
    {
      title: 'Is Active',
      dataIndex: 'active',
      key: 'active',
      sorter: (a, b) => a.active - b.active,
      render: (text) => <p>{text ? 'true' : 'false'}</p>
    },
    {
      title: 'Used for billing',
      dataIndex: 'used_for_billing',
      key: 'used_for_billing',
      sorter: (a, b) => a.used_for_billing - b.used_for_billing,
      render: (text) => <p>{text ? 'true' : 'false'}</p>
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      sorter: (a, b) => a.type.localeCompare(b.type),
      render: (text) => <p>{text}</p>
    },
  ]