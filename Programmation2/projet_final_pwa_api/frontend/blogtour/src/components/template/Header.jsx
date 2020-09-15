import './Header.css'
import React from 'react'

export default props =>
<header className="header d-none d-sm-flex flex-column" /* header disparait dans les écrans < sm*/>
    <h1 className="mt-3 ml-3"> {props.titre}
    </h1>
<p className="ml-3 lead text-muted">{props.subtitre}</p>
</header>