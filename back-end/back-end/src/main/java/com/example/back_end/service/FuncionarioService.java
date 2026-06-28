package com.example.back_end.service;

import com.example.back_end.dto.FuncionarioRequestDTO;
import com.example.back_end.dto.FuncionarioResponseDTO;
import com.example.back_end.model.FuncionarioModel;
import com.example.back_end.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository repository;

    public List<FuncionarioResponseDTO> listarTodos() {
        return repository
                .findAll()
                .stream()
                .map(f -> new FuncionarioResponseDTO(
                        f.getNome(),
                        f.getCargo(),
                        f.getSetor()
                ))
                .toList();
    }

    public FuncionarioModel salvarFuncionario(FuncionarioRequestDTO funcionarioDTO) {
        if (repository.findByEmail(funcionarioDTO.getEmail()).isPresent()) {
            throw new RuntimeException("E-mail já cadastrado para outro funcionário.");
        }

        FuncionarioModel novoFuncionario = new FuncionarioModel();
        novoFuncionario.setNome(funcionarioDTO.getNome());
        novoFuncionario.setTelefone(funcionarioDTO.getTelefone());
        novoFuncionario.setEmail(funcionarioDTO.getEmail());
        novoFuncionario.setCargo(funcionarioDTO.getCargo());
        novoFuncionario.setSetor(funcionarioDTO.getSetor());

        return repository.save(novoFuncionario);
    }
}