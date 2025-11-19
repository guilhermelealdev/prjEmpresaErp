package com.guilhermef.empresaianes.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilhermef.empresaianes.entities.Funcionario;
import com.guilhermef.empresaianes.services.FuncionarioServices;

@RestController
@RequestMapping("/funcionario")
public class FuncionarioController {

	private final FuncionarioServices funcionarioService;

	public FuncionarioController(FuncionarioServices funcionarioService) {
		this.funcionarioService = funcionarioService;
	}

	@PostMapping("/salvar")
	public Funcionario criarFuncionario(@RequestBody Funcionario funcionario) {
		return funcionarioService.saveFuncionario(funcionario);
	}

	@GetMapping("/{idFuncionario}")
	public Funcionario getFuncionarioById(@PathVariable Long idFuncionario) {
		return funcionarioService.getFuncionarioById(idFuncionario);
	}

	@GetMapping("/listar")
	public List<Funcionario> listarFuncionarios() {
		return funcionarioService.listarFuncionarios();
	}

}
