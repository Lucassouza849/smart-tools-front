import './formconfiguracoes.css';
// import avatar from '../../assets/index/boneco-sentado-home.png';
import { useState } from 'react';
import api from '../../services/api';
import toast from 'react-hot-toast';

const atualizaOficinaValues = {
    nomeOficina: '',
    cnpjOficina: '',
    telefoneOficina: ''
}


function FormConfiguracoes(){

    const [values, setValues] = useState(atualizaOficinaValues);
    // const history = useHistory();

    function onChange(ev){
        const {name, value} = ev.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    function handlerSucessClient(){
        toast.success('Oficina atualizada com sucesso!');
    }

    async function onSubmit(ev){
        ev.preventDefault();

        api.post('/oficinas', values)
        .then((response => {
            handlerSucessClient();
            ev.preventDefault();
        }))
    }

    return(
        <div className="container__configuracoes">
            {/* <div className="configuracoes__avatar">
                <div className="title__avatar">
                    <h3>Trocar Avatar</h3>  
                    <input type="file" placeholder="envie seu arquivo"/>
                </div>

                <div className="img__avatar">
                    <img src={avatar} alt="avatar" />
                </div>
            </div> */}

            <form className="form__config__user" onSubmit={onSubmit}>
                 <div className="item__forms__config">
                <div className="title__config">
                        <label>Telefone da Oficina</label>
                    </div>
                    <div className="input__config">
                        <input type="text" name="telefoneOficina" id="telefoneOficina" onChange={onChange}/>
                    </div>     
                </div> 

                

                <div className="item__forms__config">
                    <div className="title__config">
                        <label>Nome da oficina</label>
                    </div>
                    <div className="input__config">
                        <input type="text" name="nomeOficina" id="nomeOficina" onChange={onChange}/>
                    </div>                    
                </div>

                <div className="item__forms__config">
                <div className="title__config">
                        <label>CNPJ</label>
                    </div>
                    <div className="input__config">
                        <input type="text" name="cnpjOficina" id="cnpjOficina" onChange={onChange}/>
                    </div>     
                </div>
                
                <div className="item__forms__config">
                    <button type="submit">Atualizar</button>
                </div>                
            </form>


        </div>
        
  
    );
}

export default FormConfiguracoes;