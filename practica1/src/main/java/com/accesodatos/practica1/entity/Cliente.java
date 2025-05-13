
package com.accesodatos.practica1.entity;


import jakarta.persistence.*;

/**
 *
 * @author Diana Duta
 * Asignatura: Acceso a datos
 * Tema 4: Práctica 1
 */


@Entity
@Table(name="clientes")
public class Cliente {

    //Campos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column(name = "nombre", unique = true,length = 40)
    String nombre;

    @Column(name = "apellido", length = 40)
    String apellido;

    @Column(name = "direccion", length = 100)
    String direccion;


    //Constructores
    public Cliente(String nombre, String apellido, String direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }

    public Cliente(String nombre){
        this.nombre = nombre;
    }

    public Cliente(){}

    //Métodos

    // -- Id --
    public long getId() {
        return this.id;
    }

    // --Nombre--
    public String getNombre() {
        return this.nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // --Apellido--
    public String getApellido() {
        return this.apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    // --Direccion--
    public String getDireccion() {
        return this.direccion;
    }
    public void setEdad(String direccion) {
        this.direccion = direccion;
    }


}


