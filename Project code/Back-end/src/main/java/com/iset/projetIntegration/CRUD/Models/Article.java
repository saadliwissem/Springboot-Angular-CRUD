package com.iset.projetIntegration.CRUD.Models;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Article {
@Id
private long ref;
private long pAcha;
private long pVente;
private byte qte;
private String src;
private String name;
private String description;
@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
@JoinTable(name = "article_images",
        joinColumns = {
        @JoinColumn(name = "article_id")
        },
        inverseJoinColumns = {
        @JoinColumn(name = "image_id")
        }
)
private Set<ImageModel> ArticleImages;
    public Article() {
    }

    public Article(long ref, long pAcha, long pVente, byte qte,String src,String name,String description) {
        this.ref = ref;
        this.pAcha = pAcha;
        this.pVente = pVente;
        this.qte = qte;
        this.src= src;
        this.name=name;
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

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<ImageModel> getArticleImages() {
        return ArticleImages;
    }

    public void setArticleImages(Set<ImageModel> articleImages) {
        ArticleImages = articleImages;
    }
}

