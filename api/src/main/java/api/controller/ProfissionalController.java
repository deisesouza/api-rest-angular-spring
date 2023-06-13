package api.controller;

import java.util.Collection;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.domain.Profissional;
import api.service.ProfissionalService;

@RestController
@RequestMapping(value = "/profissional")
public class ProfissionalController {

	@Autowired
	ProfissionalService service;

	@GetMapping
	public ResponseEntity<Optional<Collection<Profissional>>> findAll() {
		Optional<Collection<Profissional>> newEntity = Optional.ofNullable(service.findAll());
		return newEntity.isPresent()
		       ? ResponseEntity.ok(newEntity)
		       : ResponseEntity.notFound().build();
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Optional<Profissional>> findById(@PathVariable Long id) {
		Optional<Profissional> newEntity = Optional.ofNullable(service.findById(id));
       		 return newEntity.isPresent()
                	? ResponseEntity.ok(newEntity)
                	: ResponseEntity.notFound().build();
	}

	@PutMapping(path = "/{id}")
	public ResponseEntity<Optional<Profissional>> update(@PathVariable Long id, @RequestBody Profissional entity) {
		Optional<Profissional> newEntity = Optional.ofNullable(service.save(entity));
		return ResponseEntity.ok().body(newEntity);
	}
	
	@GetMapping(value = "/{name}")
	public ResponseEntity<Optional<Profissional>> findName(@PathParam("name") String name) {
		Optional<Profissional> newEntity = Optional.ofNullable(service.findByName(name));
       		return newEntity.isPresent()
                	? ResponseEntity.ok(newEntity)
                	: ResponseEntity.notFound().build();
	}

	@DeleteMapping
	public ResponseEntity<Profissional> delete(@RequestBody Profissional entity) {
		service.delete(entity);
		return ResponseEntity.ok(entity);
	}


	@PostMapping
	public ResponseEntity<Profissional> save(@RequestBody Profissional entity) {
		Profissional newEntity = service.save(entity);
		return ResponseEntity.ok().body(newEntity);
	}

	
}
