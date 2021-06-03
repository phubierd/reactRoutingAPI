import React from 'react'
import Header from '../../components/Header/Header'
import { Route } from 'react-router'



//HOC: higher or component

export default function HomeTemplate(props) {

    //props = {component: Home, path:'/home'}
    return (

        <Route path={props.path} exact render={(propsRoute) => {
            return <div className="row">
                <div className="col-6">
                    <img style={{ height: '100vh' }} src="https://picsum.photos/200/200" alt="..." />
                </div>
                <div className="col-6">
                    <props.component {...propsRoute}/>

                </div>

            </div>
        }} />


    )
}
