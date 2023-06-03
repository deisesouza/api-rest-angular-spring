package api.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Entity
@Table(name = "estabelecimento")
public class Estabelecimento implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@Column (name = "id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE) 
	private Long id;
	@Getter
	@Setter
	@Column(name = "nome")
	private String nome;
	@Getter
	@Setter
	@Column(name = "endereco")
	private String endereco;
	@Getter
	@Setter
	@Column(name = "telefone")
	private String telefone;
	
	@ManyToOne
	private Profissional profissional;
	
	public Estabelecimento() {
	}


	public Estabelecimento(String nome, String endereco, String telefone) {
		super();
		this.nome = nome;
		this.endereco = endereco;
		this.telefone = telefone;
	}


	@Override
	public String toString() {
		return "Estabelecimento [nome=" + nome + ", endereco=" + endereco + ", telefone=" + telefone + "]";
	}
	
	
	
}