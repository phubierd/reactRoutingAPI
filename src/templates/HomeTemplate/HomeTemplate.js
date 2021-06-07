import React from 'react'
import Header from '../../components/Header/Header'
import {Route} from 'react-router'



//HOC: higher order component

export default function HomeTemplate(props) {

    //props = {component: Home, path:'/home'}
    return (
            <Route path={props.path} exact render={(propsRoute)=>{
                return <div>
                    <Header/>
                    <props.component {...propsRoute}/>
                </div>
            }}/>
            
    )
}
