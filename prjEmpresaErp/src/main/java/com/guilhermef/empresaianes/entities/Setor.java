package com.guilhermef.empresaianes.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_setores")
public class Setor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSetor;

	private String nome;

	public Setor(Long idSetor, String nome) {
		this.idSetor = idSetor;
		this.nome = nome;
	}

	public Setor() {

	}

	public long getIdSetor() {
		return idSetor;
	}

	public void setIdSetor(Long idSetor) {
		this.idSetor = idSetor;
	}

	public String getNomeSetor() {
		return nome;
	}

	public void setNomeSetor(String nome) {
		this.nome = nome;
	}

}
