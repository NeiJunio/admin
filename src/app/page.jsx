'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import FullCalendar from "./components/agenda/page";

export default function Home() {

    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a exibição do modal


    useEffect(() => {
        const buttons = document.querySelectorAll(`.${styles.sidebar} button`);
        const sections = document.querySelectorAll(`.${styles.content_section}`);

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const targetId = button.getAttribute("data-target").substring(1);

                sections.forEach(section => {
                    if (section.id === targetId) {
                        section.classList.remove(styles.hidden);
                    } else {
                        section.classList.add(styles.hidden);
                    }
                });

                buttons.forEach(btn => {
                    if (btn === button) {
                        btn.classList.add(styles.active);
                    } else {
                        btn.classList.remove(styles.active);
                    }
                });
            });
        });
    }, []);


    return (
        <div className={styles.grid_container}>
            <div className={styles.header}>
                <h1>Painel Administrativo da Mecânica</h1>
            </div>
            <div className={styles.sidebar}>
                <button data-target="#clientes">Clientes</button>
                <button data-target="#veiculos">Veículos</button>
                <button data-target="#servicos">Serviços</button>
                <button data-target="#agenda">Agenda</button>
                <button data-target="#historico">Histórico</button>
            </div>
            <div className={styles.main_content}>
                {/* SESSÃO CLIENTES */}
                <div id="clientes" className={`${styles.content_section} ${styles.hidden}`}>
                    <h2 className={styles.h2}>Gerenciamento de Clientes</h2>
                    <div className={styles.button_group}>
                        <button id="novoCliente">Novo</button>
                        <button id="alterarCliente">Alterar</button>
                        <button id="excluirCliente">Excluir</button>
                        <button id="localizarCliente">Localizar</button>
                    </div>

                    <form id="clienteForm" className={styles.form}>

                        <input type="hidden" id="clienteId" className={styles.input} />

                        <div className={styles.grid}>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label for="codigo_cliente" className={styles.label}>Código</label>
                                <input type="number" id="codigo_cliente" name="codigo_cliente" required className={styles.input} />
                            </div>

                            <div className={`${styles.grid_item} ${styles.grid_item_large}`}>
                                <label for="nome_cliente" className={styles.label} >Nome:</label>
                                <input type="text" id="nome_cliente" name="nome_cliente" required className={styles.input} placeholder="Nome Completo" />
                            </div>

                            <div className={`${styles.grid_item} ${styles.grid_item_medium}`}>
                                <label for="cpf_cliente" className={styles.label}>CPF:</label>
                                <input type="text" id="cpf_cliente" name="cpf_cliente" required className={styles.input} placeholder="xxx.xxx.xxx - xx" />
                            </div>
                        </div>

                        <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                            <label for="data_nasc_cliente" className={styles.label}>Data de nascimento:</label>
                            <input type="date" id="data_nasc_cliente" name="data_nasc_cliente" required className={styles.input} />
                        </div>

                        <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                            <label for="sexo_cliente" className={styles.label}>Sexo:</label>
                            <select id="sexo_cliente" name="sexo_cliente" required className={`${styles.select} ${styles.input_small_select}`}>
                                <option value="">Selecionar</option>
                                <option value="feminino">Feminino</option>
                                <option value="masculino">Masculino</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>

                        <div className={`${styles.grid_item} ${styles.grid_item_large}`}>
                            <label for="email_cliente" className={styles.label}>Email:</label>
                            <input type="email_cliente" id="email_cliente" name="email_cliente" required className={styles.input} placeholder="exemplo@exemplo.com" />
                        </div>

                        <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                            <label for="telefone_cliente" className={styles.label}>Telefone:</label>
                            <input type="tel" id="telefone_cliente" name="telefone_cliente" required className={styles.input} placeholder="(xx) xxxxxx - xxxxx" />
                        </div>

                        <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                            <label for="nivel_acesso" className={styles.label}>Nível de Acesso:</label>
                            <select id="nivel_acesso" name="nivel_acesso"
                                className={`${styles.select} ${styles.grid_item_small}`}>
                                <option value="user" className={styles.option}>Usuário</option>
                                <option value="admin" className={styles.option}>Administrador</option>
                            </select>
                        </div>
                        <div className={`${styles.grid_item} ${styles.grid_item_large} ${styles.grid_item_observacoes}`}>
                            <label htmlFor="observacoes_cliente" className={styles.label}>Observações</label>
                            <input type="text" id="observacoes_cliente" name="observacoes_cliente" required className={styles.input} />
                        </div>
                    </form>

                    <div className={styles.footer_form}>
                        <button type="button" onclick="cancelarAcao()" className={styles.button_cancel}>Cancelar</button>
                        <button type="submit" className={styles.button_submit}>Salvar</button>
                    </div>
                </div>

                {/* SESSÃO VEÍCULOS */}
                <div id="veiculos" className={`${styles.content_section} ${styles.hidden}`}>
                    <h2 className={styles.h2}>Gerenciamento de Veículos</h2>
                    <div className={styles.button_group}>
                        <button id="novoVeiculo">Novo</button>
                        <button id="alterarVeiculo">Alterar</button>
                        <button id="excluirVeiculo">Excluir</button>
                        <button id="localizarVeiculo">Localizar</button>
                    </div>
                    <form id="veiculoForm" className={styles.form}>

                        <input type="hidden" id="veiculoId" className={styles.input} />

                        <div className={styles.grid}>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="codigo_veiculo" className={styles.label}>Código:</label>
                                <input type="text" id="placa_veiculo" name="placa_veiculo" required className={styles.input} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_large}`}>
                                <label htmlFor="modelo_veiculo" className={styles.label}>Modelo:</label>
                                <input type="text" id="modelo_veiculo" name="modelo_veiculo" required className={styles.input} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="marca_veiculo" className={styles.label}>Marca:</label>
                                <input type="text" id="marca_veiculo" name="marca_veiculo" required className={styles.input} />
                                {/* <select id="marca" name="marca" required className={`${styles.select} ${styles.input_small_select}`}>
                                    <option value="Selecione">Selecione</option>
                                    <option value="Acura">Acura</option>
                                    <option value="Alfa Romeo">Alfa Romeo</option>
                                    <option value="Aston Martin">Aston Martin</option>
                                    <option value="Audi">Audi</option>
                                    <option value="Bentley">Bentley</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Bugatti">Bugatti</option>
                                    <option value="Buick">Buick</option>
                                    <option value="Cadillac">Cadillac</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                    <option value="Chrysler">Chrysler</option>
                                    <option value="Citroën">Citroën</option>
                                    <option value="Dodge">Dodge</option>
                                    <option value="Ferrari">Ferrari</option>
                                    <option value="Fiat">Fiat</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Genesis">Genesis</option>
                                    <option value="GMC">GMC</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="Infiniti">Infiniti</option>
                                    <option value="Jaguar">Jaguar</option>
                                    <option value="Jeep">Jeep</option>
                                    <option value="Kia">Kia</option>
                                    <option value="Lamborghini">Lamborghini</option>
                                    <option value="Land Rover">Land Rover</option>
                                    <option value="Lexus">Lexus</option>
                                    <option value="Lincoln">Lincoln</option>
                                    <option value="Maserati">Maserati</option>
                                    <option value="Mazda">Mazda</option>
                                    <option value="McLaren">McLaren</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="Mini">Mini</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Pagani">Pagani</option>
                                    <option value="Peugeot">Peugeot</option>
                                    <option value="Porsche">Porsche</option>
                                    <option value="Ram">Ram</option>
                                    <option value="Renault">Renault</option>
                                    <option value="Rolls-Royce">Rolls-Royce</option>
                                    <option value="Saab">Saab</option>
                                    <option value="Subaru">Subaru</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="Volvo">Volvo</option>
                                </select> */}
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="placa_veiculo" className={styles.label}>Placa:</label>
                                <input type="text" id="placa_veiculo" name="placa_veiculo_veiculo" required className={styles.input} />
                            </div>

                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="ano_veiculo" className={styles.label}>Ano:</label>
                                <input type="number" id="ano_veiculo" name="ano_veiculo" required className={styles.input} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="cor_veiculo" className={styles.label}>Cor:</label>
                                <input type="text" id="cor_veiculo" name="cor_veiculo" required className={styles.input} />
                                {/* <select id="cor" name="cor" required className={`${styles.select} ${styles.input_small_select}`}>
                                    <option value="Selecione">Selecione</option>
                                    <option value="Amarelo">Amarelo</option>
                                    <option value="Azul">Azul</option>
                                    <option value="Bege">Bege</option>
                                    <option value="Branco">Branco</option>
                                    <option value="Cinza">Cinza</option>
                                    <option value="Dourado">Dourado</option>
                                    <option value="Laranja">Laranja</option>
                                    <option value="Marrom">Marrom</option>
                                    <option value="Preto">Preto</option>
                                    <option value="Prata">Prata</option>
                                    <option value="Rosa">Rosa</option>
                                    <option value="Roxo">Roxo</option>
                                    <option value="Verde">Verde</option>
                                    <option value="Vermelho">Vermelho</option>
                                    <option value="Vinho">Vinho</option>
                                </select> */}
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_medium}`}>
                                <label htmlFor="categoria_veiculo" className={styles.label}>Categoria:</label>
                                <input type="text" id="categoria_veiculo" name="categoria_veiculo" required className={styles.input} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_large} ${styles.grid_item_observacoes}`}>
                                <label htmlFor="observacoes_veiculo" className={styles.label}>Observações</label>
                                <input type="text" id="observacoes_veiculo" name="observacoes_veiculo" required className={styles.input} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="proprietario_veiculo" className={styles.label}>Proprietário:</label>
                                <input type="text" id="proprietario_veiculo" name="proprietario_veiculo" required className={styles.input} />
                            </div>
                        </div>
                    </form>
                    <div className={styles.footer_form}>
                        <button type="submit" className={styles.button_submit}>Salvar</button>
                        <button type="reset" className={styles.button_cancel}>Cancelar</button>
                    </div>
                    {/* <table id="tabelaVeiculos" className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Placa</th>
                                <th className={styles.th}>Modelo</th>
                                <th className={styles.th}>Marca</th>
                                <th className={styles.th}>Ano</th>
                                <th className={styles.th}>Cor</th>
                            </tr>
                        </thead>
                        <tbody>
                            Linhas de dados aqui
                        </tbody>
                    </table> */}
                </div>

                {/* SESSÃO SERVIÇOS */}
                <div id="servicos" className={`${styles.content_section} ${styles.hidden}`}>
                    <h2 className={styles.h2}>Gerenciamento de Serviços</h2>
                    <div className={styles.button_group}>
                        <button id="novoServico">Novo</button>
                        <button id="alterarServico">Alterar</button>
                        <button id="excluirServico">Excluir</button>
                        <button id="localizarServico">Localizar</button>
                    </div>
                    <form id="servicoForm" className={styles.form}>

                        <input type="hidden" id="servicoId" className={styles.input} />

                        <div className={styles.grid}>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label for="codigo_servico" className={styles.label}>Código</label>
                                <input type="number" id="codigo_servico" name="codigo_servico" required className={styles.input} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_large}`}>
                                <label htmlFor="nome_servico" className={styles.label}>Nome</label>
                                <input type="text" id="nome_servico" name="nome_servico" required className={styles.input} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_medium}`}>
                                <label for="categoria_servico" className={styles.label}>Categoria:</label>
                                <select id="categoria_servico" name="categoria_servico"
                                    className={`${styles.select} ${styles.grid_item_small}`}>
                                    <option value="manutencao">Manutenção</option>
                                    <option value="reparo">Reparo</option>
                                    <option value="inspecao">Inspeção</option>
                                    <option value="diagnostico">Diagnóstico</option>
                                    <option value="eletrico">Elétrico</option>
                                    <option value="pintura">Pintura</option>
                                    <option value="suspensao">Suspensão</option>
                                    <option value="freios">Freios</option>
                                    <option value="ar_condicionado">Ar Condicionado</option>
                                    <option value="limpeza">Limpeza</option>
                                </select>
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="duracao_servico" className={styles.label}>Duração Estimada:</label>
                                <select id="duracao_servico" name="duracao_servico"
                                    className={`${styles.select} ${styles.grid_item_small}`}>
                                    <option value="30">30 minutos</option>
                                    <option value="60">1 hora</option>
                                    <option value="90">1 hora e 30 minutos</option>
                                    <option value="120">2 horas</option>
                                    <option value="180">3 horas</option>
                                    <option value="240">4 horas</option>
                                    <option value="300">5 horas</option>
                                    <option value="360">6 horas</option>
                                    <option value="420">7 horas</option>
                                    <option value="480">8 horas</option>
                                </select>
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="preco_servico" className={styles.label}>Preço:</label>
                                <input type="number" id="preco_servico" name="preco_servico" required className={styles.input} />
                            </div>

                            <div className={`${styles.grid_item} ${styles.grid_item_large} ${styles.grid_item_observacoes}`}>
                                <label htmlFor="observacoes_servico" className={styles.label}>Observações</label>
                                <input type="text" id="observacoes_servico" name="observacoes_servico" required className={styles.input} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label for="situacao_servico" className={styles.label}>Situação:</label>
                                <select id="situacao_servico" name="situacao_servico"
                                    className={`${styles.select} ${styles.grid_item_small}`}>
                                    <option value="ativo" className={styles.option} selected>Ativo</option>
                                    <option value="inativo" className={styles.option}>Inativo</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className={styles.footer_form}>
                        <button type="submit" className={styles.button_submit}>Salvar</button>
                        <button type="reset" className={styles.button_cancel}>Cancelar</button>
                    </div>
                    {/* <table id="tabelaServicos" className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Descrição</th>
                                <th className={styles.th}>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            Linhas de dados aqui
                        </tbody>
                    </table> */}
                </div>

                {/* SESSÃO AGENDA */}
                <div id="agenda" className={`${styles.content_section} ${styles.hidden}`}>
                    <h2 className={styles.h2}>Gerenciamento de Agenda</h2>

                    <FullCalendar />

                </div>
                {/* SESSÃO HISTÓRICO */}
                <div id="historico" className={`${styles.content_section} ${styles.hidden}`}>
                    <h2 className={styles.h2}>Histórico de Serviços</h2>
                    <div className={styles.button_group}>
                        <button id="detalhesServico">Detalhes</button>
                        <button id="localizarHistorico">Localizar</button>
                    </div>
                    <div id="detalhesServicoPanel" className={styles.hidden}>
                        {/* Detalhes do serviço aqui */}
                    </div>
                    {/* <table id="tabelaHistorico" className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Data</th>
                                <th className={styles.th}>Cliente</th>
                                <th className={styles.th}>Veículo</th>
                                <th className={styles.th}>Serviço</th>
                                <th className={styles.th}>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            Linhas de dados aqui
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    )
}