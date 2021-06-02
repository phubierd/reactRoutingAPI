import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {getApiFilmAction} from '../../redux/actions/FilmActions'




class Home extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh Sách Phim</h3>
                <div className="row">
                    {this.props.arrFilm.map((film, index) => {
                        return <div className="col-4" key={index}>
                            <div className="card text-white bg-primary">
                                <img className="card-img-top" src={film.hinhAnh} alt />
                                <div className="card-body">
                                    <h4 className="card-title">{film.tenPhim}</h4>
                                    <p className="card-text">{film.moTa}</p>
                                </div>
                            </div>

                        </div>
                    })}
                </div>
            </div>
        )
    }
    
    
    async componentDidMount() {
        // dispatch loai 1 : => dispatch action la object {typeof,data}

        // const action = {
        //     type:'abc',
        //     data:{}
        // }

        // dispatch loai 2: => dispatch action là call back function
        const action = getApiFilmAction('GP01');

        this.props.dispatch(action)
    }


}


const mapStateToProps = (state) => {
    return {
        arrFilm: state.FilmReducer.arrFilm
    }
}
export default connect(mapStateToProps)(Home)