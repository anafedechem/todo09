import styles from './Form.module.css'

function Form() {
    function enviarFormulario(e){
        e.preventDefault()
        console.log('enviou o formulario');
    }

    return (
        
        <div className={styles.Form}>
            <h1>Meu cadastro:</h1>
            <form onSubmit={enviarFormulario}>
                <div>
                    <label for="nome">Seu nome</label><br />
                    <input type="text" placeholder="Digite seu nome" id="nome"/><br/><br />
                    
                    <label for="email">Email</label><br />
                    <input type="email" placeholder="Digite seu email" /><br/><br />

                    <label for="cpf">CPF</label><br />
                    <input type="text" placeholder="CPF sem pontos ou traços"/><br/>
                </div>
                    <input type="radio" name="sexo"/>Masculino
                    <input type="radio" name="sexo"/>Feminino
                <div>
                    <input id={styles.btnEnviar} type="submit" value="Enviar" />
                </div>
            </form>
        </div>

    )
}

export default Form