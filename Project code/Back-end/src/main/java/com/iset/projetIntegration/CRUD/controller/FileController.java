package com.iset.projetIntegration.CRUD.controller;

import com.iset.projetIntegration.CRUD.Models.User;
import com.iset.projetIntegration.CRUD.Models.fileI;
import com.iset.projetIntegration.CRUD.Services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FileController {
@Autowired
private FileService fs;
    @RequestMapping("/files")
    public List<fileI> getfiles(){

        return fs.getFiles();
    }
    @RequestMapping("/file/{id}")
    public fileI getFile(@PathVariable long id){
        return fs.getFile(id);
    }
    @RequestMapping(method = RequestMethod.DELETE,value = "/file/{id}")
    public void DeleteFile(@PathVariable long id){
        fs.DeleteFile(id);
    }
    @RequestMapping(method = RequestMethod.POST,value = ("/files"))
    public void AddFIle(@RequestBody fileI f){
        fs.addFile(f);
    }
    @RequestMapping(method = RequestMethod.PUT,value = "/file/{id}")
    public void updateFile(@RequestBody fileI f , @PathVariable long id ){
        fs.updateFile(f,id);
    }
}
