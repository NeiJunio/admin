import styles from './index.module.css';

export default function Veiculos() {
    return(
        <div id="veiculos" className={`${styles.content_section}`}>
                    <h2 className={styles.h2}>Gerenciamento de Veículos</h2>
                    <div className={styles.button_group}>
                        <button id="novoVeiculo">Novo</button>
                        <button id="alterarVeiculo">Alterar</button>
                        <button id="excluirVeiculo">Excluir</button>
                        <button id="localizarVeiculo">Localizar</button>
                    </div>
                    <form id="veiculoForm" className={styles.form}>

                        <input type="hidden" id="veiculoId" className={styles.input_veiculos} />

                        <div className={styles.grid}>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="codigo_veiculo" className={styles.label_veiculos}>Código:</label>
                                <input type="text" id="placa_veiculo" name="placa_veiculo" required className={styles.input_veiculos} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_large}`}>
                                <label htmlFor="modelo_veiculo" className={styles.label_veiculos}>Modelo:</label>
                                <input type="text" id="modelo_veiculo" name="modelo_veiculo" required className={styles.input_veiculos} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="marca_veiculo" className={styles.label_veiculos}>Marca:</label>
                                <input type="text" id="marca_veiculo" name="marca_veiculo" required className={styles.input_veiculos} />
                                {/* <select id="marca" name="marca" required className={`${styles.select} ${styles.input_small_select}`}>
                                    <option value="Selecione" disabled>Selecione</option>
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
                                <label htmlFor="placa_veiculo" className={styles.label_veiculos}>Placa:</label>
                                <input type="text" id="placa_veiculo" name="placa_veiculo_veiculo" required className={styles.input_veiculos} />
                            </div>

                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="ano_veiculo" className={styles.label_veiculos}>Ano:</label>
                                <input type="number" id="ano_veiculo" name="ano_veiculo" required className={styles.input_veiculos} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="cor_veiculo" className={styles.label_veiculos}>Cor:</label>
                                {/* <input type="text" id="cor_veiculo" name="cor_veiculo" required className={styles.input_veiculos} /> */}
                                <select id="cor" name="cor" required className={`${styles.select} ${styles.input_small_select}`}>
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
                                    <option value="Personalizado">Personalizado</option>
                                </select>
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_medium}`}>
                                <label htmlFor="categoria_veiculo" className={styles.label_veiculos}>Categoria:</label>
                                <select id="categoria_veiculo" name="categoria_veiculo" required className={`${styles.select} ${styles.input_medium_select}`}>
                                    <option value="" disabled selected>Selecione</option>
                                    <option value="hatch">Hatch</option>
                                    <option value="sedan">Sedan</option>
                                    <option value="suv">SUV</option>
                                    <option value="pickup">Pickup</option>
                                    <option value="van">Van</option>
                                    <option value="moto">Moto</option>
                                    <option value="caminhao">Caminhão</option>
                                    <option value="onibus">Ônibus</option>
                                </select>
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_medium}`}>
                                <label htmlFor="combustivel_veiculo" className={styles.label_veiculos}>Combustível:</label>
                                <select id="combustivel_veiculo" name="combustivel_veiculo" required className={`${styles.select} ${styles.input_medium_select}`}>
                                    <option value="" disabled selected>Selecione</option>
                                    <option value="gasolina">Gasolina</option>
                                    <option value="alcool">Álcool</option>
                                    <option value="diesel">Diesel</option>
                                    <option value="flex">Flex</option>
                                    <option value="gnv">GNV (Gás Natural Veicular)</option>
                                    <option value="eletrico">Elétrico</option>
                                    <option value="hibrido">Híbrido</option>
                                </select>
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_large} ${styles.grid_item_observacoes}`}>
                                <label htmlFor="observacoes_veiculo" className={styles.label_veiculos}>Observações</label>
                                <input type="text" id="observacoes_veiculo" name="observacoes_veiculo" required className={styles.input_veiculos} />
                            </div>
                            <div className={`${styles.grid_item} ${styles.grid_item_small}`}>
                                <label htmlFor="proprietario_veiculo" className={styles.label_veiculos}>Proprietário:</label>
                                <input type="text" id="proprietario_veiculo" name="proprietario_veiculo" required className={styles.input_veiculos} />
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
    );
}