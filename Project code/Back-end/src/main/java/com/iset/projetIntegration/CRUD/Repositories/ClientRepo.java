package com.iset.projetIntegration.CRUD.Repositories;

import com.iset.projetIntegration.CRUD.Models.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepo extends CrudRepository<Client, Long> {
}
