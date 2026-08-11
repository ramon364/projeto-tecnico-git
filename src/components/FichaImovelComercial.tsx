

export default function FichaImovelComercial() {

    return(

        <div className="menu-cadastro">
            <form action="post">
                <fieldset>
                    <legend> Ficha De Cadastro </legend>
                    <label htmlFor="razao"> Razão Social: </label>
                    <input type="text" id="razao" name="razao" required /> <br />

                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" name="nome" required /> <br />

                    <label htmlFor="cnpj"> CNPJ: </label>
                    <label htmlFor="estadual"> Inscrição Estadual: </label>

                    <input type="number" name="estadual" id="estadual" step={0.1} required  /> <br />
                    <label htmlFor="email"> E-mail: </label>

                    <input type="email" id="email" name="email" required /> <br />
                    <label htmlFor="responsavel"> Nome Do Responsável: </label>

                    <input type="text" id="responsavel" name="responsavel" required /> <br />
                    <button className="botao"> Enviar </button> <br />
                </fieldset>
            </form>
        </div>

    );
}