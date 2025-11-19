package com.guilhermef.empresaianes.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.guilhermef.empresaianes.entities.Dependente;
import com.guilhermef.empresaianes.repositories.DependenteRepository;

@Service
public class DependenteServices {

	private final DependenteRepository dependenteRepository;

	public DependenteServices(DependenteRepository dependenteRepository) {
		this.dependenteRepository = dependenteRepository;
	}

	public Dependente saveDependente(Dependente dependente) {
		return dependenteRepository.save(dependente);
	}

	public Dependente getDependenteById(Long idDependente) {
		return dependenteRepository.findById(idDependente).orElse(null);
	}

	public List<Dependente> listarDependentes() {
		return dependenteRepository.findAll();
	}

}
