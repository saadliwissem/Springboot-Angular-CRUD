package com.iset.projetIntegration.CRUD.controller;

import com.iset.projetIntegration.CRUD.Models.Article;
import com.iset.projetIntegration.CRUD.Models.Client;
import com.iset.projetIntegration.CRUD.Services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ArticleController {
    @Autowired
    private ArticleService articleService;
    @RequestMapping("/articles")
    public List<Article> getArticles(){

        return articleService.getArticles();
    }
    @RequestMapping("/article/{id}")
    public Article getArticle(@PathVariable long id){
        return articleService.getArticle(id);
    }
    @RequestMapping(method = RequestMethod.DELETE,value = "/article/{id}")
    public void DeleteArticle(@PathVariable long id){
        articleService.DeleteArticle(id);
    }
    @RequestMapping(method = RequestMethod.POST,value = ("/articles"))
    public void AddArticle(@RequestBody Article article){
        articleService.addArticle(article);
    }
    @RequestMapping(method = RequestMethod.PUT,value = "/article/{id}")
    public void updateArticle(@RequestBody Article article , @PathVariable long id ){
        articleService.updateArticle(article,id);
    }
}
