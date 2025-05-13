package com.accesodatos.practica1.repository;
import com.accesodatos.practica1.entity.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Diana Duta
 * Asignatura: Acceso a datos
 * Tema 4: Práctica 1
 */

@Repository
public interface IClienteController extends CrudRepository<Cliente, Long>{

}