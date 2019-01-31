import React from 'react';

const PasswordReset = ({onViewChange3}) => (
    <div className="home-container">    
    <form className="form-inline">
        <div className="form-group mb-2">
            <input type="text" className="form-control"/>
        </div> 
        <div className="form-group mx-sm-3 mb-2">
            <input type="password" className="form-control"/>
        </div>
        <button type="submit" className ="btn btn-primary mb-2" >Giriş Yap</button>
        <p>Şifrenizi hatırlıyor ve giriş yapmak istiyorsanız <b><u><a style ={{fontSize:"15"}} href="#" onClick={ (e) => { onViewChange3(1);  e.preventDefault(); }}> tıklayınız</a></u></b></p>
    </form>
</div>

)

export default PasswordReset