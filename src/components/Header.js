import React from 'react';
import {Link} from 'react-router';





class Header extends React.Component{

    constructor(){
        super();
        this.state = { //ekran 956pxden küçükse kapalı
            isNavOpen: false 
        }
    }

    buttonClicked(){
      this.setState({
          isNavOpen : !this.state.isNavOpen
        })
    }

    render(){
      return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-light container justify-content-between">
                    
                    <a className="navbar-brand" >Three Plus One </a>  
                    <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse" style={{display:this.state.isNavOpen ? "block" : "none" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" activeClassName="active" >Gelen Kutusu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/stoktakibi"  className="nav-link" activeClassName="active" >Stok Takibi</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/kargotakibi"  className="nav-link" activeClassName="active" > Kargo Takibi </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/e-fatura"  className="nav-link " activeClassName="active">E-Fatura</Link>
                            </li>
                        </ul>
                    </div>
                
                </nav> 
            </header>
        )
    }
}
export default Header
