package com.example.back_end.dto;

public class FuncionarioResponseDTO {

    private String nome;
    private String cargo;
    private String setor;

    public FuncionarioResponseDTO() {
    }

    public FuncionarioResponseDTO(String nome, String cargo, String setor) {
        this.nome = nome;
        this.cargo = cargo;
        this.setor = setor;
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }
}