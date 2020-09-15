import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props}/> {/*header reçoive icon ,titre et subtitre,*/ }
        <main className="contenant container-fluid">
            <div className="mt-3 p-3">
               {props.children}
            </div>
        </main>
    </React.Fragment>