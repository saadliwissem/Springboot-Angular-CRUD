package com.iset.projetIntegration.CRUD.Services;

import com.iset.projetIntegration.CRUD.Models.Client;
import com.iset.projetIntegration.CRUD.Repositories.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ClientService {
    @Autowired
    private ClientRepo clientrepo;

    public List<Client> getClients(){

        List<Client> clients= new ArrayList<>();
        clientrepo.findAll().forEach(client -> {
            clients.add(client);
        });
        return clients;
    }
    public Client getclient(long id){
        return clientrepo.findById(id).orElse(null);
    }
    public void DeleteClient(long id){
        clientrepo.deleteById(id);
    }

    public void  addClient(Client c)
    {
        clientrepo.save(c);

    }

    public void updateclient(Client c,long id){
        clientrepo.save(c);
    }
}

