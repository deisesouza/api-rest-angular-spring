package api.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.domain.Vinculo;
import api.repository.VinculoRepository;

@Service
public class VinculoService{

	@Autowired
	VinculoRepository vinculoRepository;
	Vinculo vinculo;
		
	public Vinculo save(Vinculo vinculo) {
		return vinculoRepository.save(vinculo);
	}
	
	public Collection<Vinculo> findAll(){
		return vinculoRepository.findAll();
	}
	
	
}
