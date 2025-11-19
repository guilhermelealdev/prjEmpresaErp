package com.guilhermef.empresaianes.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_dependentes")
public class Dependente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idDependente;

	private String nomeDependente;

	@ManyToOne
	private Funcionario funcionario;

	public Dependente(Long idDependente, String nomeDependente, Funcionario funcionario) {
		this.idDependente = idDependente;
		this.nomeDependente = nomeDependente;
		this.funcionario = funcionario;
	}

	public Dependente() {

	}

	public long getIdDependente() {
		return idDependente;
	}

	public void setIdDependente(Long idDependente) {
		this.idDependente = idDependente;
	}

	public String getNomeDependente() {
		return nomeDependente;
	}

	public void setNomeDependente(String nomeDependente) {
		this.nomeDependente = nomeDependente;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}

}
