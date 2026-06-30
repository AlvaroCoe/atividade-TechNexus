package com.example.back_end.service;

import com.example.back_end.dto.ClienteRequestDTO;
import com.example.back_end.dto.ClienteResponseDTO;
import com.example.back_end.model.ClienteModel;
import com.example.back_end.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    // Lista todos os clientes convertendo-os de Model para ResponseDTO
    public List<ClienteResponseDTO> listarTodos() {
        return repository
                .findAll()
                .stream()
                .map(cliente -> new ClienteResponseDTO(
                        cliente.getNome(),
                        cliente.getEmail(),
                        cliente.getTelefone()
                ))
                .toList();
    }

    // Salva o cliente aplicando as regras de negócio básicas
    public ClienteModel salvarCliente(ClienteRequestDTO clienteDTO) {
        // Validação 1: O e-mail já existe?
        if (repository.findByEmail(clienteDTO.getEmail()).isPresent()) {
            throw new RuntimeException("E-mail já cadastrado para outro cliente.");
        }

        // Validação 2: O CPF já existe?
        if (repository.findByCpf(clienteDTO.getCpf()).isPresent()) {
            throw new RuntimeException("CPF já cadastrado para outro cliente.");
        }

        // Transferindo os dados do DTO para o Model (que vai para o banco de dados)
        ClienteModel novoCliente = new ClienteModel();
        novoCliente.setNome(clienteDTO.getNome());
        novoCliente.setEmail(clienteDTO.getEmail());
        novoCliente.setTelefone(clienteDTO.getTelefone());
        novoCliente.setCpf(clienteDTO.getCpf());

        return repository.save(novoCliente);
    }
}