'use client';

import styles from './index.module.css';
import Swal from 'sweetalert2';

import React from "react";


export default function CadCliente() {
    const Pesquisar = () => {
        Swal.fire({
            width: 1200,
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'ok',
            html:
                '<input id="swal-input1">' +
                '<input id="swal-input2" >',
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address",
            showCloseButton: "true",
            backdrop: `rgba(0,0,0,0.8)`,
            customClass: {
                filter: 'my-swal'
            }
        });
    }

    const Novo = () => {
        Swal.fire({
            width: 1200,
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'ok',
            html:
                '<input id="swal-input1">' +
                '<input id="swal-input2" >',
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address",
            showCloseButton: "true",
            backdrop: `rgba(56,79,126,0.8)`,
            customClass: {
                filter: 'my-swal'
            }
        });
    }

    return (
        <div id="clientes" className={`${styles.content_section}`}>
            <h2 className={styles.title_page}>Gerenciamento de Clientes</h2>
            <div className={styles.button_group}>
            <button id="novoCliente" onClick={Novo}>Novo</button>
                <button id="alterarCliente">Alterar</button>
                <button id="excluirCliente">Excluir</button>
                <button id="localizarCliente" onClick={Pesquisar}>Localizar</button>
            </div>

            <form id="clienteForm" className={styles.form}>

                <input type="hidden" id="clienteId" className={styles.input_cliente} />

                <div className={styles.grid}>
                    <div className={`${styles.grid_item} ${styles.grid_codigo}`}>
                        <label for="codigo_cliente" className={styles.label_cliente}>Código</label>
                        <input type="number" id="codigo_cliente" name="codigo_cliente" required className={styles.input_cliente} />
                    </div>

                    <div className={`${styles.grid_item} ${styles.grid_nome}`}>
                        <label for="nome_cliente" className={styles.label_cliente} >Nome:</label>
                        <input type="text" id="nome_cliente" name="nome_cliente" required className={styles.input_cliente} placeholder="Nome Completo" />
                    </div>

                    <div className={`${styles.grid_item} ${styles.grid_cpf}`}>
                        <label for="cpf_cliente" className={styles.label_cliente}>CPF:</label>
                        <input type="text" id="cpf_cliente" name="cpf_cliente" required className={styles.input_cliente} placeholder="xxx.xxx.xxx - xx" />
                    </div>
                </div>

                <div className={`${styles.grid_item} ${styles.grid_data}`}>
                    <label for="data_nasc_cliente" className={styles.label_cliente}>Data de nascimento:</label>
                    <input type="date" id="data_nasc_cliente" name="data_nasc_cliente" required className={styles.input_cliente} />
                </div>

                <div className={`${styles.grid_item} ${styles.grid_sexo}`}>
                    <label for="sexo_cliente" className={styles.label_cliente}>Sexo:</label>
                    <select id="sexo_cliente" name="sexo_cliente" required className={`${styles.select_cliente} ${styles.input_sexo}`}>
                        <option value="" disabled selected>Selecionar</option>
                        <option value="0">Masculino</option>
                        <option value="1">Feminino</option>
                        <option value="2">Outro</option>
                    </select>
                </div>

                <div className={`${styles.grid_item} ${styles.grid_acesso}`}>
                    <label for="nivel_acesso" className={styles.label_cliente}>Nível de Acesso:</label>
                    <select id="nivel_acesso" name="nivel_acesso"
                        className={`${styles.select_cliente} ${styles.input_acesso}`}>
                        <option value="0" className={styles.option}>Usuário</option>
                        <option value="1" className={styles.option}>Administrador</option>
                    </select>
                </div>


                <div className={`${styles.grid_item} ${styles.grid_telefone}`}>
                    <label for="telefone_cliente" className={styles.label_cliente}>Telefone:</label>
                    <input type="tel" id="telefone_cliente" name="telefone_cliente" required className={` ${styles.input_cliente}`} placeholder="(xx) xxxxx - xxxxx" />
                </div>

                <div className={`${styles.grid_item} ${styles.grid_email}`}>
                    <label for="email_cliente" className={styles.label_cliente}>Email:</label>
                    <input type="email_cliente" id="email_cliente" name="email_cliente" required className={styles.input_cliente} placeholder="exemplo@exemplo.com" />
                </div>
                <div className={`${styles.grid_item}  ${styles.grid_observacoes}`}>
                    <label htmlFor="observacoes_cliente" className={styles.label_cliente}>Observações</label>
                    <input type="text" id="observacoes_cliente" name="observacoes_cliente" required className={styles.input_cliente} />
                </div>
            </form>

            <div className={styles.footer_form}>
                <button type="button" onclick="cancelarAcao()" className={styles.button_cancel}>Cancelar</button>
                <button type="submit" className={styles.button_submit}>Salvar</button>
            </div>

            {/* MODAL */}
        </div>
    );
}