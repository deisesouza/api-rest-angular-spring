package api.domain;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Entity
@Table(name = "profissional")
public class Profissional implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column (name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
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
	@Getter
	@Setter
	@Column(name = "celular")
	private String celular;
	@Getter
	@Setter
	@Column(name = "funcao")
	private String funcao;
	
	
	@OneToMany(mappedBy = "profissional", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Estabelecimento> estabelecimento;

	public Profissional() {			
	}

	public Profissional(String nome, String endereco, String telefone, String celular, String funcao, String foto) {
		super();
		this.nome = nome;
		this.endereco = endereco;
		this.telefone = telefone;
		this.celular = celular;
		this.funcao = funcao;
		
	}

	@Override
	public String toString() {
		return "Profissional [nome=" + nome + ", endereco=" + endereco + ", telefone=" + telefone + ", celular="
				+ celular + ", funcao=" + funcao + ", estabelecimento=" + estabelecimento + "]";
	}

	
}
