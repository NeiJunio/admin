'use client';
import React from "react";
import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import styles from "./page.module.css";
import CadCliente from "./components/cadcliente";
import Veiculos from "./components/veiculos";
import Servicos from "./components/servicos";
import FullCalendar from "./components/agenda/index";
import Localizar from "./components/modais";

export default function Home() {

    const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a exibição do modal
    const [tela, setTela] = useState(0);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                <button data-target="#clientes" onClick={() => setTela(1)}>Clientes</button>
                <button data-target="#veiculos" onClick={() => setTela(2)}>Veículos</button>
                <button data-target="#servicos" onClick={() => setTela(3)}>Serviços</button>
                <button data-target="#agenda" onClick={() => setTela(4)}>Agenda</button>
                <button data-target="#historico" onClick={() => setTela(5)}>Histórico</button>
            </div>
            <div className={styles.main_content}>

                {
                    tela === 1 ?
                        <CadCliente />
                        : tela === 2 ?
                            <Veiculos />
                            : tela === 3 ?
                                <Servicos />
                                : tela === 4 ?
                                    <FullCalendar />
                                    : tela === 5 ?
                                        <FullCalendar /> // trocar pelo histórico
                                        : <></>
                }


{/* 
<Button onPress={onOpen}>Open Modal</Button>
<>
     

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} className={styles.modal}>
        <ModalContent>
          {(onClose) => (
            <>

              <ModalHeader className={styles.header}>Modal Title</ModalHeader>
              <ModalBody className={styles.body}>
                <fieldset className={styles.fieldset}>
                  <label htmlFor="" className={styles.label}>NOME</label>
                  <input type="text" className={styles.input} required />
                </fieldset>

                <fieldset className={styles.fieldset}>
                  <label htmlFor="" className={styles.label}>TELEFONE</label>
                  <input type="text" className={styles.input} required/>
                </fieldset>

                <fieldset className={styles.fieldset}>
                  <label htmlFor="" className={styles.label}>EMAIL</label>
                  <input type="text" className={styles.input} required/>
                </fieldset>
                
                <fieldset className={styles.fieldset}>
                  <label htmlFor="" className={styles.label}>SENHA</label>
                  <input type="password" className={styles.input} required/>
                </fieldset>

                
              </ModalBody>
              <ModalFooter>
                <Button className={`${styles.button} ${styles.fechar}`} color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className={`${styles.button} ${styles.confirmar}`} color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </> */}
            </div>
        </div>
    )
}