package com.iset.projetIntegration.CRUD.Services;

import com.iset.projetIntegration.CRUD.Models.User;
import com.iset.projetIntegration.CRUD.Models.fileI;
import com.iset.projetIntegration.CRUD.Repositories.FileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class FileService {
    @Autowired
    private FileRepo Filerepo;
    public List<fileI> getFiles(){
        List<fileI> files = new ArrayList<fileI>();
        Filerepo.findAll().forEach(f-> {
            files.add(f);
        });
        return files;
    }

    public fileI getFile(long id ){
        return Filerepo.findById(id ).orElse(null);
    }
    public void DeleteFile(long id){
        Filerepo.deleteById(id);
    }
    public void addFile(fileI u ){
        Filerepo.save(u);
    }
    public void updateFile(fileI f , long id){
        Filerepo.save(f);
    }
}
