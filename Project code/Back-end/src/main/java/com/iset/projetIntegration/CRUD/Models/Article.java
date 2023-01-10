package com.iset.projetIntegration.CRUD.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Article {
@Id
private long ref;
private long pAcha;
private long pVente;
private byte qte;

    public Article() {
    }

    public Article(long ref, long pAcha, long pVente, byte qte) {
        this.ref = ref;
        this.pAcha = pAcha;
        this.pVente = pVente;
        this.qte = qte;
    }

    public long getRef() {
        return ref;
    }

    public void setRef(long ref) {
        this.ref = ref;
    }

    public long getpAcha() {
        return pAcha;
    }

    public void setpAcha(long pAcha) {
        this.pAcha = pAcha;
    }

    public long getpVente() {
        return pVente;
    }

    public void setpVente(long pVente) {
        this.pVente = pVente;
    }

    public byte getQte() {
        return qte;
    }

    public void setQte(byte qte) {
        this.qte = qte;
    }
}

