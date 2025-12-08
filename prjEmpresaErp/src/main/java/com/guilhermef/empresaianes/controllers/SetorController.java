package com.guilhermef.empresaianes.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilhermef.empresaianes.entities.Setor;
import com.guilhermef.empresaianes.services.SetorService;

@RestController
@RequestMapping("/setor")
public class SetorController {

	private final SetorService setorService;

	public SetorController(SetorService setorService) {
		this.setorService = setorService;
	}

	@PostMapping("/salvar")
	public Setor criarSetor(@RequestBody Setor setor) {
		return setorService.saveSetor(setor);
	}

	@GetMapping("/{idSetor}")
	public Setor getSetorById(@PathVariable Long idSetor) {
		return setorService.getSetorById(idSetor);
	}

	@GetMapping("/listar")
	public List<Setor> listarSetores() {
		return setorService.listarSetores();
	}
	
	@DeleteMapping("/{idSetor}")
	public void deleteSetorById(@PathVariable Long idSetor) {
		setorService.deletarSetorById(idSetor);
	}

}
