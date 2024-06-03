import styles from './index.module.css';

export default function CadCliente() {
    return (
        <div id="clientes" className={`${styles.content_section}`}>
            <h2>Gerenciamento de Clientes</h2>
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
                        <option value="" disabled selected>Selecionar</option>
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
                    <input type="tel" id="telefone_cliente" name="telefone_cliente" required className={styles.input} placeholder="(xx) xxxxx - xxxxx" />
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
    );
}