import React from 'react'
import classes from './appbar.module.scss'
import footerLogo from '../Images/panacloudfootericon.png'
export default class Footer extends React.Component{
    render(){
        return(
            <div className={classes.footer}>
                <span className={classes.footContent}>© 2019 PIAIC. All rights reserved.</span>
                <div style={{position: 'absolute',right: 0}}>
                <div style={{width:'90px'}}>
                    <b>Powered by</b>
                    <img src={footerLogo} width='80' height='40' />
                </div>
                </div>
            </div>
        )
    }
}