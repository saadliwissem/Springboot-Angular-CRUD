package com.iset.projetIntegration.CRUD.Services;
import com.iset.projetIntegration.CRUD.Models.Article;
import com.iset.projetIntegration.CRUD.Repositories.ArticleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ArticleService {
    @Autowired
    private ArticleRepo articlerepo;

    public List<Article> getArticles(){
        List<Article> articles= new ArrayList<>();
        articlerepo.findAll().forEach(article -> {
            articles.add(article);
        });
        return articles;
    }
    public Article getArticle(long id){
        return articlerepo.findById(id).orElse(null);
    }
    public void DeleteArticle(long id){
        articlerepo.deleteById(id);
    }

    public void  addArticle(Article a)
    {
        articlerepo.save(a);
    }

    public void updateArticle(Article a,long id){
        articlerepo.save(a);
    }
}
