import { Table } from 'antd';
import { useHistory } from "react-router-dom";
import { AllLybraries, getRegions } from '../server';

const List = () => {
    const history = useHistory();
    const regions = getRegions();

    const columns = [
        {
            title: 'Order',
            dataIndex: 'order',
            key: 'order',
        },
        {
            title: 'Name',
            dataIndex: 'fullname',
            key: 'fullname'
        },
        {
            title: '#Libraries',
            dataIndex: 'libraries',
            key: 'libraries',
            sorter: (a: AllLybraries, b: AllLybraries) => a.libraries - b.libraries,
        },
    ];
    return <Table dataSource={regions} columns={columns} rowKey='order' onRow={(record)=> {
        return {
            onClick: () => history.push(`/list-by-region/${record.order}`)
        };
    }}/>;
};

export default List;