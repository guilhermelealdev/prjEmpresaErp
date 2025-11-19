package com.guilhermef.empresaianes.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.guilhermef.empresaianes.entities.Setor;
import com.guilhermef.empresaianes.repositories.SetorRepository;

@Service
public class SetorService {
	private final SetorRepository setorRepository;

	public SetorService(SetorRepository setorRepository) {
		this.setorRepository = setorRepository;
	}

	public Setor saveSetor(Setor setor) {
		return setorRepository.save(setor);
	}

	public Setor getSetorById(Long idSetor) {
		return setorRepository.findById(idSetor).orElse(null);
	}

	public List<Setor> listarSetores() {
		return setorRepository.findAll();
	}

}
