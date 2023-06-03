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

import api.domain.Estabelecimento;
import api.service.EstabelecimentoService;

@RestController
@RequestMapping(value = "/estabelecimento")
public class EstabelecimentoController {

	@Autowired
	EstabelecimentoService service;
	
	@GetMapping
	public ResponseEntity<Optional<Collection<Estabelecimento>>> findAll() {
		Optional<Collection<Estabelecimento>> newEntity = Optional.ofNullable(service.findAll());
		return newEntity.isPresent()
		       ? ResponseEntity.ok(newEntity)
		       : ResponseEntity.notFound().build();
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Optional<Estabelecimento>> findById(@PathVariable Long id) {
		Optional<Estabelecimento> newEntity = Optional.ofNullable(service.findById(id));
        return newEntity.isPresent()
                ? ResponseEntity.ok(newEntity)
                : ResponseEntity.notFound().build();
	}
	
	@GetMapping(value = "/{name}")
	public ResponseEntity<Optional<Estabelecimento>> findName(@PathParam("name") String name) {
		Optional<Estabelecimento> newEntity = Optional.ofNullable(service.findByName(name));
        return newEntity.isPresent()
                ? ResponseEntity.ok(newEntity)
                : ResponseEntity.notFound().build();
	}

	@PutMapping(path = "/{id}")
	public ResponseEntity<Optional<Estabelecimento>> update(@PathVariable Long id, @RequestBody Estabelecimento entity) {
		Optional<Estabelecimento> newEntity = Optional.ofNullable(service.save(entity));
		return ResponseEntity.ok().body(newEntity);
	}

	@DeleteMapping
	public ResponseEntity<Estabelecimento> delete(@RequestBody Estabelecimento entity) {
		service.delete(entity);
		return ResponseEntity.ok(entity);
	}

	@PostMapping
	public ResponseEntity<Estabelecimento> save(@RequestBody Estabelecimento entity) {
		Estabelecimento newEntity = service.save(entity);
		return ResponseEntity.ok().body(newEntity);
	}
			
}
