import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Utilisateurs',
    subtitle: 'Cadastro de usuarios: Incluir, Listar, Alterar e Excluir'
}

export default class UtilisateurCrud extends Componet {
    render () {
        return (
            <Main {...headerProps}>
                Cadastro usuarios
            </Main>
        )
    }
}