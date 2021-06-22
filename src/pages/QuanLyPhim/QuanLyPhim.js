import React, { useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getApiFilmAction } from '../../redux/actions/FilmActions'

export default function QuanLyPhim() {

    const { arrFilm } = useSelector(state => state.FilmReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const action = getApiFilmAction('GP01');
        dispatch(action)
    }, [])



    const columns = [
        {
            title: 'Mã Phim',
            dataIndex: 'maPhim',
            key: 'maPhim',
            render: (text, film) => <span>{film.maPhim}</span>,
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
            render: (text, film) => <span>{film.tenPhim}</span>,
        },
        {
            title: 'Hinh Anh',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            render: (text, film) => <img src={film.hinhAnh} alt='...' width={50} height={50} />,
        },
        {
            title: 'Mo Ta',
            dataIndex: 'moTa',
            key: 'moTa',
            render: (text, film) => <section> {film.moTa?.length > 50 ? film.moTa.substr(0, 50) + '...' : film.moTa}</section>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <NavLink to='/'>Tạo Lịch Chiếu</NavLink>
                    <NavLink to='/'>Chỉnh sửa</NavLink>
                </Space>
            ),
        },
    ];

    const data = arrFilm;

    return (
        <div className="container" style={{ minHeight: '100vh' }}>
            <NavLink className="mb-2 btn btn-primary" to="/admin/addfilm">Them Phim</NavLink>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
