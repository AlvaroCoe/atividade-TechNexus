package com.example.back_end.controller;

import com.example.back_end.dto.FuncionarioRequestDTO;
import com.example.back_end.dto.FuncionarioResponseDTO;
import com.example.back_end.service.FuncionarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/funcionarios")
@CrossOrigin("*")
public class FuncionarioController {

    @Autowired
    private FuncionarioService service;

    @GetMapping
    public ResponseEntity<List<FuncionarioResponseDTO>> listar() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(service.listarTodos());
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(
            @Valid @RequestBody FuncionarioRequestDTO funcionarioDTO) {
        service.salvarFuncionario(funcionarioDTO);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of("mensagem", "Funcionário cadastrado com sucesso."));
    }
}