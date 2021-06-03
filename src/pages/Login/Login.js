import React, { Component } from 'react'

export default class Login extends Component {

    dangNhap = (event) => {
        //chặn sự kiện submit của browser
        event.preventDefault();

        //xu ly xong => chuyển hướng

        alert('đăng nhập thành công!');

        //.history.push('/home'):  chuyển đến path tương ứng
        // this.props.history.push('/home')

        //.history.replace('/pathName'): thay đổi trang hiện tại bằng path tương ứng
        // this.props.history.replace('register') //ung dung cho OTP (back về ko dc)

        //.history.goBack() => chuyển đến trang trước đó
        this.props.history.goBack();
    }





    render() {
        console.log('props', this.props)



        return (
            <div className='container'>
                <h3>Login</h3>
                <form className='form' onSubmit={this.dangNhap}>
                    <div className='form-group'>
                        <p>tai khoan</p>
                        <input className='form-control' name='taiKhoan'></input>
                    </div>
                    <div className='form-group'>
                        <p>mat khau</p>
                        <input type='password' className='form-control' name='matKhau'></input>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success'>Dang Nhap</button>
                    </div>
                </form>
            </div>
        )
    }
}
