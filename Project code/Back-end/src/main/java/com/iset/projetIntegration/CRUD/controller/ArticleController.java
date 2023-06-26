package com.iset.projetIntegration.CRUD.controller;

import com.iset.projetIntegration.CRUD.Models.Article;
import com.iset.projetIntegration.CRUD.Models.Client;
import com.iset.projetIntegration.CRUD.Models.ImageModel;
import com.iset.projetIntegration.CRUD.Services.ArticleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    @RequestMapping(method = RequestMethod.POST,consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},value = ("/articles"))
    public void AddArticle(@RequestPart("article") Article article, @RequestPart("imageFile")MultipartFile[]file){
        //articleService.addArticle(article);
        try {
            Set<ImageModel> images= uploadImage(file);
            article.setArticleImages(images);

            articleService.addArticle(article);
        }catch (Exception e){
            System.out.println(e);
        }
    }
    //process images
    public Set<ImageModel> uploadImage (MultipartFile[]multipartFiles) throws IOException {
        Set<ImageModel> imageModels= new HashSet<>();
        for(MultipartFile file: multipartFiles){
            ImageModel imageModel = new ImageModel(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            imageModels.add(imageModel);
        }
        return imageModels;
    }
    @RequestMapping(method = RequestMethod.PUT,value = "/article/{id}")
    public void updateArticle(@RequestBody Article article , @PathVariable long id ){
        articleService.updateArticle(article,id);
    }
}
