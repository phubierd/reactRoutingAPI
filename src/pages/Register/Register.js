import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { dangKyAction } from '../../redux/actions/UserAction';

export default function Register() {

    const dispatch = useDispatch();

    // const [state,setState] = useState({
    //     taiKhoan:'',
    //     matKhau:'',
    //     email:'',
    //     soDt:''
    // })


    // const handleChange = (event)=>{
    //     let {name,value} = event.target
    //     setState ({
    //         ...state,
    //         [name]:value
    //     })
    // }

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            hoTen: '',
        },

        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tai Khoan khong duoc bo trong!!!'),
            matKhau: Yup.string().required('mật khẩu không được bỏ trống')
                .min(6, 'mật khẩu tối thiểu 6-32 ký tự !')
                .max(32, 'mật khẩu tối thiểu 6-32 ký tự !'),
            email: Yup.string().email('email không hợp lệ').required('ko dc bỏ trống'),
            soDt: Yup.string().matches(/^[0-9]+$/, 'so dien thoai k hợp lệ'),
            hoTen:Yup.string().required('Họ tên không được bỏ trống!')
        }),

        onSubmit: (values) => {
            //values là object chứa giá trị của các input
            // console.log(values)
            const action = dangKyAction(values);
            dispatch (action)
            // dispatch(dangKyAction(values))
        }
    })

    const { handleChange,touched,errors } = formik

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Đăng Ký</h3>
            <div className="form-group">
                <p>Tai Khoan</p>
                <input name="taiKhoan" className="form-control" onChange={handleChange} onBlur={formik.handleBlur}></input>
                {touched.taiKhoan && errors.taiKhoan && <p className="text text-danger">{errors.taiKhoan}</p>}
            </div>
            <div className="form-group">
                <p>Ho Ten</p>
                <input name="hoTen" className="form-control" onChange={handleChange} onBlur={formik.handleBlur}></input>
                {touched.hoTen && errors.hoTen && <p className="text text-danger">{errors.hoTen}</p>}
            </div>
            <div className="form-group">
                <p>Password</p>
                <input name="matKhau" className="form-control" onChange={handleChange} onBlur={formik.handleBlur}></input>
                {touched.matKhau && errors.matKhau && <p className="text text-danger">{errors.matKhau}</p>}
            </div>
            <div className="form-group">
                <p>Email</p>
                <input name="email" className="form-control" onChange={handleChange} onBlur={formik.handleBlur}></input>
                {touched.email && errors.email && <p className="text text-danger">{errors.email}</p>}
            </div>
            <div className="form-group">
                <p>So Dien Thoai</p>
                <input name="soDt" className="form-control" onChange={handleChange} onBlur={formik.handleBlur}></input>
                {touched.soDt && errors.soDt && <p className="text text-danger">{errors.soDt}</p>}
            </div>
            <div className="form-group">
                <p>Ma Nhom</p>
                <select name="maNhom" className="maNhom">
                    <option value="GP01">Group 1</option>
                    <option value="GP02">Group 2</option>
                    <option value="GP03">Group 3</option>
                    <option value="GP04">Group 4</option>
                </select>
            </div>
            <div className="form-group">
                <button className="btn btn-info">Dang Ky</button>
            </div>
        </form>
    )
}
