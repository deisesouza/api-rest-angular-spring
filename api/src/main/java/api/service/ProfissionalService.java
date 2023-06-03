package api.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.domain.Profissional;
import api.repository.ProfissionalRepository;

@Service
public class ProfissionalService {

	@Autowired
	ProfissionalRepository profissionalRepository;
	@Autowired
	Profissional profissional;
		
	
	public Profissional save(Profissional profissional) {
		return profissionalRepository.save(profissional);
	}
	
	public Collection<Profissional> findAll(){
		return profissionalRepository.findAll();
	}

	public Profissional findById(Long id) {
		profissionalRepository.findById(id);
	   return profissional;
	}
	
	public Profissional findByName(String name) {
		Optional<List<Profissional>> lista = Optional.ofNullable(profissionalRepository.findByName(name));
			if(lista.isPresent()) {
				lista.stream().forEach(obj -> {
					if(obj.contains(name)) 
						profissional = obj.get(0);
				});
			}
		return profissional;
	}
	
	public void delete(Profissional profissional) {
		profissionalRepository.delete(profissional);
	}
	
	public Profissional update(Profissional profissional) {
		return profissionalRepository.save(profissional);
	}
}
