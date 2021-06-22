import { useFormik } from 'formik';
import React from 'react'
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { themPhimAction } from '../redux/actions/FilmActions';



export default function ThemPhim(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            maPhim: '',
            tenPhim: '',
            trailer: '',
            moTa: '',
            maNhom: '',
            ngayKhoiChieu: '',
            danhGia: '10',
        },
        onSubmit: (values) => {
            // console.log('values', values)

            //biến đổi đối tượng thành form data
            let formData = new FormData();
            for(let key in values){

                //xử lý nếu duyệt tới trường hình ảnh dạng file thì đưa vào dối tượng formData với 3 tham số
                if(key==='hinhAnh'){
                    formData.append('File',values[key],values[key].name)
                }else{
                    formData.append(key,values[key])
                }
                formData.append(key,values[key]);
            }

            dispatch(themPhimAction(formData))
            // formData.forEach((value,key)=>{
            //     console.log('formdata',key,value)
            // })


        }
    });


    const dateFormat = 'DD/MM/YYYY';

    const changeFile = (e) => {
        let file = e.target.files[0];
        formik.setFieldValue('hinhAnh', file);
        console.log(file)
    }

    const changeDate = (values, dateString) => {
        formik.setFieldValue('ngayKhoiChieu', dateString);
        console.log('value', dateString)
    }

    return (
        <form className="container" onSubmit={formik.handleSubmit} style={{ minHeight: '100vh' }}>
            <h3>Thêm Phim</h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <p>Mã Phim</p>
                        <input className="form-control" name="maPhim" onChange={formik.handleChange} />
                    </div>
                    <div className="form-group">
                        <p>Tên Phim</p>
                        <input className="form-control" name="tenPhim" onChange={formik.handleChange} />
                    </div>
                   
                    <div className="form-group">
                        <p>Mô Tả Phim</p>
                        <input className="form-control" name="moTa" onChange={formik.handleChange} />
                    </div>
                </div>
                <div className="col6">
                    <div className="form-group">
                        <p>Ngày khơi chiếu</p>
                        <DatePicker onChange={changeDate} defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                    </div>
                    <div className="form-group">
                        <p>Trailer</p>
                        <input className="form-control" name="trailer" onChange={formik.handleChange} />
                    </div>
                    <div className="form-group">
                        <p>Hinh Anh</p>
                        <input className="form-control" name="hinhAnh" type="file" onChange={changeFile} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Thêm Phim</button>
                    </div>

                </div>
            </div>
            <button className="btn btn-primary" onClick={() => {
                props.history.goBack();
            }}>Trở về</button>

        </form>
    )
}
