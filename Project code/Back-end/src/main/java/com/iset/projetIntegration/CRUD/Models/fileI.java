package com.iset.projetIntegration.CRUD.Models;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class fileI {
    @Id
    private long ref;
    private String date ;
    private String debut;
    private String fin;
    private long devis ;
    private long idClient;
    private String intervenant;
    private String description;
    private String activity;
    private String observation;

    public fileI() {
    }

    public fileI(long ref, String date, String debut, String fin, long devis, long idClient, String intervenant, String description, String activity, String observation) {
        this.ref = ref;
        this.date = date;
        this.debut = debut;
        this.fin = fin;
        this.devis = devis;
        this.idClient = idClient;
        this.intervenant = intervenant;
        this.description = description;
        this.activity = activity;
        this.observation = observation;
    }

    public long getRef() {
        return ref;
    }

    public void setRef(long ref) {
        this.ref = ref;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDebut() {
        return debut;
    }

    public void setDebut(String debut) {
        this.debut = debut;
    }

    public String getFin() {
        return fin;
    }

    public void setFin(String fin) {
        this.fin = fin;
    }

    public long getDevis() {
        return devis;
    }

    public void setDevis(long devis) {
        this.devis = devis;
    }

    public long getIdClient() {
        return idClient;
    }

    public void setIdClient(long idClient) {
        this.idClient = idClient;
    }

    public String getIntervenant() {
        return intervenant;
    }

    public void setIntervenant(String intervenant) {
        this.intervenant = intervenant;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }
}