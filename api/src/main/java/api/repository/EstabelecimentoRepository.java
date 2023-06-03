package api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import api.domain.Estabelecimento;

public interface EstabelecimentoRepository extends JpaRepository<Estabelecimento,Long>{

		@Query(nativeQuery = true, value = "SELECT *  "
				+ "FROM testdb "
				+ "WHERE nome LIKE (:name))")
		List<Estabelecimento> findByName(String name);
	
}
