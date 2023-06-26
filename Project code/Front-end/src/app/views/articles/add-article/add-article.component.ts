import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { FileHandle } from 'src/app/models/file-handle.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
})
export class AddArticleComponent {
  constructor(
    private articleSer: ArticleService,
    private router: Router,
    private sinitizer: DomSanitizer
  ) {}

  setName(name: string) {
    console.log(name);
  }
  addArticle(newArticle: Article) {
    const articleFormData = this.prepareFormData(newArticle);
    this.articleSer.addArticle(articleFormData).subscribe();
  }
  file: any;
  ImgUrl: any;
  msg: any = null;
  imgpath: any;

  //
  article: Article = {
    name: '',
    description: '',
    qte: 0,
    pVente: 0,
    pAcha: 0,
    src: '',
    ref: 0,
    articleImages: [],
  };
  submitNewArticle(form: NgForm) {
    const Article: Article = {
      name: form.value.name,
      description: form.value.description,
      qte: form.value.qte,
      pVente: form.value.pv,
      pAcha: form.value.pAcha,
      src:
        form.value.src ||
        'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg',
      ref: 0,
      articleImages: this.article.articleImages,
    };
    this.article = Article;
    console.log(Article);
    this.addArticle(this.article);
    //redirect to the main page
    this.router.navigate(['/articles']);
    //alerting succ adding client
    alert('article added successfully');
  }
  prepareFormData(article: Article): FormData {
    const formData = new FormData();
    formData.append(
      'article',
      new Blob([JSON.stringify(article)], { type: 'application/json' })
    );
    if (article.articleImages)
      for (var i = 0; i < article.articleImages.length; i++) {
        formData.append(
          'imageFile',
          article.articleImages[i].file,
          article.articleImages[i].file.name
        );
      }
    return formData;
  }
  onSelect(files: FileList | null) {
    if (files && files.length > 0) {
      const file = files[0];
      this.file = file;
      var mimeType = file.type;
      if (mimeType.match(/image\/*/) == null) {
        this.msg = false;
        return;
      } else {
        this.msg = true;
      }
      var reader = new FileReader();
      this.imgpath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event: ProgressEvent<FileReader>) => {
        if (reader.result) {
          this.ImgUrl = reader.result.toString();
        }
      };
      console.log(file);
      // Perform further operations with the selected file
      const fileHandle: FileHandle = {
        file: file,
        url: this.sinitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      if (this.article.articleImages)
        this.article.articleImages.push(fileHandle);
    }
  }
}
