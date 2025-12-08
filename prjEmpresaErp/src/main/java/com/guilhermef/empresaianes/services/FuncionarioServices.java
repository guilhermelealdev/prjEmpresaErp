package com.guilhermef.empresaianes.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.guilhermef.empresaianes.entities.Funcionario;
import com.guilhermef.empresaianes.repositories.FuncionarioRepository;

@Service
public class FuncionarioServices {
	private final FuncionarioRepository funcionarioRepository;

	public FuncionarioServices(FuncionarioRepository funcionarioRepository) {
		this.funcionarioRepository = funcionarioRepository;
	}

	public Funcionario saveFuncionario(Funcionario funcionario) {
		return funcionarioRepository.save(funcionario);
	}

	public Funcionario getFuncionarioById(Long idFuncionario) {
		return funcionarioRepository.findById(idFuncionario).orElse(null);
	}

	public List<Funcionario> listarFuncionarios() {
		return funcionarioRepository.findAll();
	}
	
	public void deleteFuncionarioById(Long idFuncionario) {
		funcionarioRepository.deleteById(idFuncionario);
	}

}
