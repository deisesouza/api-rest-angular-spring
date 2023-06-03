package api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import api.domain.Profissional;

public interface ProfissionalRepository extends JpaRepository<Profissional,Long>{

	@Query(nativeQuery = true, value = "SELECT *  "
			+ "FROM testdb "
			+ "WHERE nome LIKE (:name))")
	List<Profissional> findByName(String name);
}
