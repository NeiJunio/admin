import styles from './index.module.css';

export default function Servicos() {
    return (
        <div id="servicos" className={`${styles.content_section}`}>
            <h2 className={styles.h2}>Gerenciamento de Serviços</h2>
            <div className={styles.button_group}>
                <button id="novoServico">Novo</button>
                <button id="alterarServico">Alterar</button>
                <button id="excluirServico">Excluir</button>
                <button id="localizarServico">Localizar</button>
            </div>
            <form id="servicoForm" className={styles.form}>

                <input type="hidden" id="servicoId" className={styles.input_servicos} />

                <div className={styles.grid}>
                    <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                        <label for="codigo_servico" className={styles.label_servicos}>Código</label>
                        <input type="number" id="codigo_servico" name="codigo_servico" required className={styles.input_servicos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_large}`}>
                        <label htmlFor="nome_servico" className={styles.label_servicos}>Nome</label>
                        <input type="text" id="nome_servico" name="nome_servico" required className={styles.input_servicos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_medium}`}>
                        <label for="categoria_servico" className={styles.label_servicos}>Categoria:</label>
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
                        <label htmlFor="duracao_servico" className={styles.label_servicos}>Duração Estimada:</label>
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
                        <label htmlFor="preco_servico" className={styles.label_servicos}>Preço:</label>
                        <input type="number" id="preco_servico" name="preco_servico" required className={styles.input_servicos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_large} ${styles.grid_item_descricao}`}>
                        <label htmlFor="descricao_servico" className={styles.label_servicos}>Descrição</label>
                        <input type="text" id="descricao_servico" name="descricao_servico" required className={styles.input_servicos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_large} ${styles.grid_item_observacoes}`}>
                        <label htmlFor="observacoes_servico" className={styles.label_servicos}>Observações</label>
                        <input type="text" id="observacoes_servico" name="observacoes_servico" required className={styles.input_servicos} />
                    </div>
                    <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                        <label for="situacao_servico" className={styles.label_servicos}>Situação:</label>
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
    );
}