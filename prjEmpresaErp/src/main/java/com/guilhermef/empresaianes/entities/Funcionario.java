package com.guilhermef.empresaianes.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_funcionarios")
public class Funcionario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idFuncionario;

	private String nomeFuncionario;

	private double salario;

	@ManyToOne
	private Setor setor;

	public Funcionario() {

	}

	public Funcionario(Long idFuncionario, String nomeFuncionario, double salario, Setor setor) {
		this.idFuncionario = idFuncionario;
		this.nomeFuncionario = nomeFuncionario;
		this.salario = salario;
		this.setor = setor;
	}

	public String getNomeFuncionario() {
		return nomeFuncionario;
	}

	public void setNomeFuncionario(String nomeFuncionario) {
		this.nomeFuncionario = nomeFuncionario;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public long getIdFuncionario() {
		return idFuncionario;
	}

	public void setIdFuncionario(long idFuncionario) {
		this.idFuncionario = idFuncionario;
	}

	public Setor getSetor() {
		return setor;
	}

	public void setSetor(Setor setor) {
		this.setor = setor;
	}

}
