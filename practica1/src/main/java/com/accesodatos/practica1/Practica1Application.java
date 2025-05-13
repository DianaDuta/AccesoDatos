package com.accesodatos.practica1;

import com.accesodatos.practica1.entity.*;
import com.accesodatos.practica1.repository.*;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;




@SpringBootApplication
public class Practica1Application implements CommandLineRunner{

	@Autowired
	private IClienteController clienteRepository;

	public static void main(String[] args) {
		SpringApplication.run(Practica1Application.class, args);

	}

	@Override
	public void run(String...args) throws Exception {
		funcionPruebas1();
	}

	@Transactional
	public void funcionPruebas1() {
		//Escritura en BBDD
		Cliente cl1 = new Cliente("Narco");
		Cliente cl2 = new Cliente("Isis");

		//uno a uno
		clienteRepository.save(cl1);
		clienteRepository.save(cl2);

		//juntos
		clienteRepository.saveAll(List.of(cl1, cl2));

		//Lecturas de BBDD
		Optional<Cliente> optionalClient = clienteRepository.findById(1L);
	}

}
