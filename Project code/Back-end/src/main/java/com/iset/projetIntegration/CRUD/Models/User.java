package com.iset.projetIntegration.CRUD.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    private String name;
    private String lastName;
    private double cin;

    public User() {
    }

    public User(String name, String lastName, double cin) {
        this.name = name;
        this.lastName = lastName;
        this.cin = cin;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public double getCin() {
        return cin;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setCin(double cin) {
        this.cin = cin;
    }

}
