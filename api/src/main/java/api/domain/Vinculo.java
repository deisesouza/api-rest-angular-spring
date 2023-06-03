package api.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Entity
@Table(name = "vinculo")
public class Vinculo implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@Column (name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private Long id;
	
	@Getter
	@Setter
	@Column(name = "profissional")
	private String profissional;
	
	@Getter
	@Setter
	@Column(name = "estabelecimento")
	private String estabelecimento;

	public Vinculo() {
	}	
	
}
