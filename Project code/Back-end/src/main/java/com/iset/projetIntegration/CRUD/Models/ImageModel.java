package com.iset.projetIntegration.CRUD.Models;

import jakarta.persistence.*;

@Entity
@Table(name="Image_Model")
public class ImageModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
            private long id;
            private String name;
            private String type;
            @Column(length = 5000000)
             private byte[] picByte;

    public ImageModel(){}

    public ImageModel(String name, String type, byte[] picByte) {
        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }
}
