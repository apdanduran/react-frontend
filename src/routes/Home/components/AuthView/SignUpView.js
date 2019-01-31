import React from 'react';

const SignUpView = ({onViewChange2}) => (
    <div>
        <form className="form-inline">
            <div className="form-group mb-2">
                <input style = {{width:"400px", marginRight:"10px"}}type="text" className="form-control"/>
            </div> 
            <button type="submit" className ="btn btn-primary mb-2">Kayıt ol</button>
            <p>Zaten Üye misiniz ? <br/>
            O zaman giriş yapmak için <b><u><a style ={{fontSize:"15"}} href="#" onClick={ (e) => { onViewChange2(1);  e.preventDefault(); }}>  tıklayınız</a></u></b></p>
        </form>

    </div>
)
export default SignUpView;