package com.guilhermef.empresaianes.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilhermef.empresaianes.entities.Dependente;
import com.guilhermef.empresaianes.services.DependenteServices;

@RestController
@RequestMapping("/dependente")
public class DependenteController {

	private final DependenteServices dependenteService;

	public DependenteController(DependenteServices dependenteService) {
		this.dependenteService = dependenteService;
	}
	
	// -> abra a pasta do seu projeto -> main -> resources -> static -> coloque seus arquivos -> fecha e abre denovo o spring -> m2 no prj -> refresh
	@GetMapping("/home")
	public String paginaInicial() {
		return "index"; //Nome do seu arquivo HTML "index"
	}
	
	
	@PostMapping("/salvar")
	public Dependente criarDependente(@RequestBody Dependente dependente) {
		return dependenteService.saveDependente(dependente);
	}

	@GetMapping("/{idDependente}")
	public Dependente getDependenteById(@PathVariable Long idDependente) {
		return dependenteService.getDependenteById(idDependente);
	}

	@GetMapping("/listar")
	public List<Dependente> listarDependentes() {
		return dependenteService.listarDependentes();
	}

}
