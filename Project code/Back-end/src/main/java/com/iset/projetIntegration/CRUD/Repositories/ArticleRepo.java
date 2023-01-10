package com.iset.projetIntegration.CRUD.Repositories;

import com.iset.projetIntegration.CRUD.Models.Article;
import org.springframework.data.repository.CrudRepository;

public interface ArticleRepo extends CrudRepository<Article, Long> {
}
