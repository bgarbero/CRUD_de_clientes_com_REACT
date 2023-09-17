import './index.css';
import crudService from '../../service/crud-service';
//hooks
import { useEffect, useState } from 'react'

function CRUD() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        crudService.obter()
            .then(response => {
                setClientes(response.data);
            })
            .catch(erro => {
                console.log(erro)
            });
    }, []);

    const editar = (id) => {
        alert(id)
    }

    const excluir = (id) => {
        alert(id)
    }

    return (

        <div className="container-fluid">
            {/*Titulo*/}
            <div className="row mt-3">
                <div className="col-sm-12">
                    <h4 id="titulo">Clientes</h4>
                    <hr />
                </div>
            </div>


            {/*Botão adicionar*/}
            <div className="row ">
                <div className="col-sm-3">
                    <button
                        id="btn-adicionar"
                        className="btn btn-primary btn-sm"
                    >
                        Adicionar
                    </button>
                </div>
            </div>


            {/*Colunas*/}
            <div className="row mt-3">
                <div className="col-sm-12">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Cadastro</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map(cliente => (
                                <tr>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpfOuCnpj}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.dataCadastro}</td>
                                    <td>
                                        <button id="btn-editar" onClick={editar} className="btn btn-outline-primary btn-sm mr-3">
                                            Editar
                                        </button>
                                        <button id="btn-excluir" onClick={excluir} className="btn btn-outline-primary btn-sm mr-3">
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/*Modal*/}
            <div className="row">
                {/* The Modal */}
                <div className="modal fade" id="modal-cliente">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Adicionar cliente</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <label for="id" className="form-label">Id</label>
                                        <input disabled type="text" className="form-control" id="id" />
                                    </div>

                                    <div className="col-sm-10">
                                        <label for="nome" className="form-label">Nome</label>
                                        <input type="text" className="form-control" id="nome" />
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-sm-4">
                                        <label for="cpf" className="form-label">CPF</label>
                                        <input type="text" className="form-control" id="cpf" />
                                    </div>
                                    <div className="col-sm-4">
                                        <label for="dataCadastro" className="form-label">Data de Cadastro</label>
                                        <input disabled type="date" className="form-control" id="dataCadastro" />
                                    </div>

                                    <div className="col-sm-4">
                                        <label for="telefone" className="form-label">Telefone</label>
                                        <input type="text" className="form-control" id="telefone" />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <label for="email" className="form-label">E-mail</label>
                                        <input type="text" className="form-control" id="email" />
                                    </div>
                                </div>

                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button id="btn-salvar" className="btn btn-primary btn-sm">Salvar</button>
                                <button id="btn-cancelar" className="btn btn-light btn-sm">Cancelar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CRUD; 