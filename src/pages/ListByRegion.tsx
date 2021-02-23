import { Descriptions } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import {
    useParams
} from "react-router-dom";
import { getInfoById, Library } from '../server';

interface Props {
    setTitle: (title: string) => void
}

const ListByRegion = ({setTitle}: Props) => {
    const {id} = useParams<{id: string}>();

    const [curentLib, setCurrentLib] = useState<Library>();

    const data = useMemo(() => {
        const library = getInfoById(+id);
        
        if(!library) return;

        setCurrentLib(library);
        return {
            order: library.order,
            fullname: library.fullname,
            libraries: library.libraries,
            subscribers: library.subscribers,
            territory: library.territory,
            employees: library.employees
        };

    }, [id]);

    useEffect(() => {
        if(!curentLib) return;

        setTitle(curentLib.fullname);
        return () => {            
            setTitle('');
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curentLib]);
    
    return <>
        {
            data && 
            <Descriptions
                title="Library info:"
            >
                <Descriptions.Item label="Order">{data.order}</Descriptions.Item>
                <Descriptions.Item label="Fullname">{data.fullname}</Descriptions.Item>
                <Descriptions.Item label="Libraries">{data.libraries}</Descriptions.Item>
                <Descriptions.Item label="Subscribers">{data.subscribers}</Descriptions.Item>
                <Descriptions.Item label="Territory">{data.territory}</Descriptions.Item>
                <Descriptions.Item label="Employees">{data.employees}</Descriptions.Item>
            </Descriptions>
        }</>;
};

export default ListByRegion;