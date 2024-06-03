'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import CadCliente from "./components/cadcliente";
import Veiculos from "./components/veiculos"; 
import Servicos from "./components/servicos";
import FullCalendar from "./components/agenda/page";

export default function Home() {

    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a exibição do modal
    const [tela, setTela] = useState(0);

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
                <button data-target="#clientes" onClick={() => setTela(0)}>Clientes</button>
                <button data-target="#veiculos" onClick={() => setTela(1)}>Veículos</button>
                <button data-target="#servicos" onClick={() => setTela(2)}>Serviços</button>
                <button data-target="#agenda" onClick={() => setTela(3)}>Agenda</button>
                <button data-target="#historico" onClick={() => setTela(4)}>Histórico</button>
            </div>
            <div className={styles.main_content}>
                
                {
                    tela === 0 ?
                        <CadCliente />
                    : tela === 1 ? 
                        <Veiculos />
                    : tela === 2 ? 
                        <Servicos />
                    : tela === 3 ? 
                        <FullCalendar />
                    :   <FullCalendar /> // trocar pelo histórico
                }
                
                {/* SESSÃO CLIENTES */}
                

                {/* SESSÃO VEÍCULOS */}
                

                {/* SESSÃO SERVIÇOS */}
                

                {/* SESSÃO AGENDA */}
                

                {/* SESSÃO HISTÓRICO */}
                

            </div>
        </div>
    )
}