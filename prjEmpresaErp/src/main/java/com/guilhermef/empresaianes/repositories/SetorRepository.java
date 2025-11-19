package com.guilhermef.empresaianes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guilhermef.empresaianes.entities.Setor;

@Repository
public interface SetorRepository extends JpaRepository<Setor, Long>{

}
