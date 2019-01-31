import React from 'react';

const LoginView = (props) => ( 

    <div className="home-container">    
        <form className="form-inline">
            <div className="form-group mb-2">
                <input type="text" className="form-control"/>
            </div> 
            <div className="form-group mx-sm-3 mb-2">
                <input type="password" className="form-control"/>
            </div>
            <button type="submit" className ="btn btn-primary mb-2" >Giriş Yap</button>
            <p>Kayıt olmak için<b><u><a style ={{fontSize:"15"}} href="#" onClick={ (e) => { props.onViewChange(2);  e.preventDefault(); }}> tıklayınız</a></u></b>
            <br/>Şifreni unuttuysanız<b><u><a style ={{fontSize:"15", marginRight:"auto", marginLeft:"auto"}} href="#" onClick={ (e) => { props.onViewChange(3);  e.preventDefault(); }}> tıklayınız</a></u></b></p>

        </form>

    </div>

)

export default LoginView;