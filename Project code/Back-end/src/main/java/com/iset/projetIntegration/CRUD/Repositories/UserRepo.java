package com.iset.projetIntegration.CRUD.Repositories;

import com.iset.projetIntegration.CRUD.Models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User,Long > {

}
