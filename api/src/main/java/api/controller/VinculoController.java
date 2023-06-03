package api.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.domain.Vinculo;
import api.service.VinculoService;

@RestController
@RequestMapping(value = "/vinculo")
public class VinculoController {
	
	@Autowired
	VinculoService service;
	
	@GetMapping
	public ResponseEntity<Optional<Collection<Vinculo>>> findAll() {
		Optional<Collection<Vinculo>> newEntity = Optional.ofNullable(service.findAll());
		return newEntity.isPresent()
		       ? ResponseEntity.ok(newEntity)
		       : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Vinculo> save(@RequestBody Vinculo entity) {
		Vinculo newEntity = service.save(entity);
		return ResponseEntity.ok().body(newEntity);
	}
		
	
}
