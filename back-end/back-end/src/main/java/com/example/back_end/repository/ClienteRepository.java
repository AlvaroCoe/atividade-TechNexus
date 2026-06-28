package com.example.back_end.repository;

import com.example.back_end.model.ClienteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel, Long> {

    // Busca um cliente pelo e-mail (útil para validações de duplicidade)
    Optional<ClienteModel> findByEmail(String email);

    // Busca um cliente pelo CPF (essencial já que CPF também é único)
    Optional<ClienteModel> findByCpf(String cpf);
}