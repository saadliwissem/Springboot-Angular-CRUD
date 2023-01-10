package com.iset.projetIntegration.CRUD.Services;

import com.iset.projetIntegration.CRUD.Models.User;
import com.iset.projetIntegration.CRUD.Repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo Userrepo;
     public List<User> getUsers(){
        List<User> users = new ArrayList<User>();
        Userrepo.findAll().forEach(user-> {
            users.add(user);
        });
        return users;
     }

    public User getuser(Long id ){
         return Userrepo.findById(id ).orElse(null);
    }
    public void DeleteUser(Long id){
         Userrepo.deleteById(id);
    }
    public void addUser(User u ){
         Userrepo.save(u);
    }
    public void updateUser(User u , Long id){
         Userrepo.save(u);
    }
}

