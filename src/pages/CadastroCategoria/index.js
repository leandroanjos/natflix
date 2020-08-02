import React, { useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../components/Carousel/components/FormField";

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]) 
  const [values, setValues] = useState(initialValues)

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  return ( 
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event)=>{
          event.preventDefault()
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(initialValues)
        }
      }>
        
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {
          categorias.map((categoria, index) => {
            return (
              <li key={`categoria-${index}`}>{categoria.nome}</li>
            )
          })
        }
      </ul>


      <Link to="/">
        Voltar para a Home
      </Link>        
    </PageDefault>
  );
}

export default CadastroCategoria;