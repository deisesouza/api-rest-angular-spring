package api.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.domain.Estabelecimento;
import api.repository.EstabelecimentoRepository;

@Service
public class EstabelecimentoService {

	@Autowired
	EstabelecimentoRepository estabelecimentoRepository;
	@Autowired
	Estabelecimento estabelecimento;
	
	
	public Estabelecimento save(Estabelecimento estabelecimento) {
		return estabelecimentoRepository.save(estabelecimento);
	}
	
	public Collection<Estabelecimento> findAll(){
		return estabelecimentoRepository.findAll();
	}

	public Estabelecimento findById(Long id) {
		estabelecimentoRepository.findById(id);
	   return estabelecimento;
	}
	
	public Estabelecimento findByName(String name) {
		Optional<List<Estabelecimento>> lista = Optional.ofNullable(estabelecimentoRepository.findByName(name));
			if(lista.isPresent()) {
				lista.stream().forEach(obj -> {
					if(obj.contains(name)) 
						estabelecimento = obj.get(0);
				});
			}
		return estabelecimento;
	}
	
	public void delete(Estabelecimento estabelecimento) {
		estabelecimentoRepository.delete(estabelecimento);
	}	
	
	public Estabelecimento update(Estabelecimento estabelecimento) {
		return estabelecimentoRepository.save(estabelecimento);
	}
}
